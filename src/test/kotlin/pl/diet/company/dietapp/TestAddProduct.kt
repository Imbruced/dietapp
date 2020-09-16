package pl.diet.company.dietapp

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import pl.diet.company.dietapp.builder.ProductBuilder
import pl.diet.company.dietapp.domain.Product
import pl.diet.company.dietapp.util.TestBase


@AutoConfigureDataMongo
@RunWith(SpringRunner::class)
class TestAddProduct : TestBase(){

    private val addProductEndpointUrl = "/product"

    private val builder = ProductBuilder()

    private val mapper = jacksonObjectMapper()

    private fun createHeaders(): HttpHeaders {
        val token = generateToken()
        val headers = HttpHeaders()
        headers.contentType = MediaType.APPLICATION_JSON
        headers.add("Authorization", "Bearer $token")
        return headers
    }

    private val headers = createHeaders()

    @Test
    fun `should correctly insert product to the database`(){
        // given

        val description = builder.buildDescription
        val price = builder.buildPrice

        val sampleProductRequest = builder.buildProductRequest
                .withName("jogurt").withDescription(description)
                .withPrice(price)

        // when
        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(mapper.writeValueAsString(sampleProductRequest))
                .headers(headers))

        // then

        with(response){
            response.andExpect(status().isOk)
            response.andReturn().response.contentAsString.toInt() != -1
        }

    }

    @Test
    fun `should correctly reject product when empty json is sent`(){
        // given empty json
        val emptyJson = "{}"

        // when
        // trying to send empty json

        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(emptyJson)
                .headers(headers))


        // then
        // result should be

        with(response){
            andExpect(status().is4xxClientError)
        }
    }

    @Test
    fun `should not save the product when the name is missing`(){
        val jsonWithoutName = ""
    }

    @Test
    fun `should reject the request when the description is not send`(){

    }

    @Test
    fun `should reject the request when any of description field is not valid`(){

    }

    @Test
    fun `should reject the request when any of price data field is not valid`(){

    }

    @Test
    fun `should reject product creation when client is not authenticated`(){

    }

    @Test
    fun `should not reject product when the price data is missing`() {

    }

    @Test
    fun `should reject when name field is not valid`(){

    }

}