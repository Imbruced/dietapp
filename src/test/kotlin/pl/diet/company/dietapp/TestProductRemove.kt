package pl.diet.company.dietapp

import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import pl.diet.company.dietapp.security.util.TestBase

@AutoConfigureDataMongo
@RunWith(SpringRunner::class)
class TestProductRemove : TestBase(){

    private val addProductEndpointUrl = "/product"
    private val removeProductEndpoint = "/product"

    @Test
    fun `should correctly remove product when is available in database`(){
        val description = builder.buildDescription
        val price = builder.buildPrice

        val sampleProductRequest = builder.buildProductRequest
                .withName("jogurt").withDescription(description)
                .withPrice(price)

        // when
        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(mapper.writeValueAsString(sampleProductRequest))
                .headers(authenticatedHeaders))


        with(response){
            val insertedProductId = andReturn().response.contentAsString

            val removeResponse = mvc.perform(MockMvcRequestBuilders.delete(localUrl(removeProductEndpoint))
                    .param("id", insertedProductId)
                    .headers(authenticatedHeaders))

            with(removeResponse){
                andExpect(status().isOk)
                andReturn().response.contentAsString == insertedProductId
            }

        }


    }

    @Test
    fun `should correctly reject product removal when product is unavailable`(){
        val removeResponse = mvc.perform(MockMvcRequestBuilders.delete(localUrl(removeProductEndpoint))
                .param("id", "100000")
                .headers(authenticatedHeaders))

        with(removeResponse){
            andExpect(status().is4xxClientError)
            andReturn().response.contentAsString == "-1"
        }
    }

    @Test
    fun `should not allow to remove product which for unauthenticated user`(){
        val removeResponse = mvc.perform(MockMvcRequestBuilders.delete(localUrl(removeProductEndpoint))
                .param("id", "100000")
                .headers(unauthenticatedHeaders))

        with(removeResponse){
            andExpect(status().is4xxClientError)
        }
    }
}