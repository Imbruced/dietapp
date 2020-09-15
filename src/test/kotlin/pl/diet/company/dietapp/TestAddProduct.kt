package pl.diet.company.dietapp

import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import pl.diet.company.dietapp.domain.Product
import pl.diet.company.dietapp.util.TestBase


@AutoConfigureDataMongo
@RunWith(SpringRunner::class)
class TestAddProduct : TestBase(){

    private val addProductEndpointUrl = "/product"

    @Test
    fun `should correctly insert product to the database`(){
        // given
        val token = generateToken()
//        val sampleProduct = Product(
//
//        )
        // when
        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content("{}")
                .param("name", "some")
                .header("Authorization", "Bearer $token"))


        // then

    }

    @Test
    fun `should correctly reject product which does not have all fields filled in`(){

    }
}