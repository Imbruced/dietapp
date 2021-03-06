package pl.diet.company.dietapp

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.junit.runner.RunWith
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.web.client.HttpClientErrorException
import pl.diet.company.dietapp.security.util.TestBase


@AutoConfigureDataMongo
@RunWith(SpringRunner::class)
class TestProduct : TestBase() {

    private val authenticationUrl = "/home/authenticates"

    private val allProductsUrl = "/all_products"
    private val filterProductUrl = "/products"

    @Test
    fun `should not allow to see all the products when client is not authenticated`() {
        val headers = HttpHeaders()
        headers.contentType = MediaType.APPLICATION_JSON
        val httpEntity: HttpEntity<*> = HttpEntity<Any>(null, headers)

        assertThrows<HttpClientErrorException> { restTemplate.getForEntity(localUrl(allProductsUrl), List::class.java, httpEntity) }
    }

    @Test
    fun `should not allow to see products based on filter when client is not authenticated `() {
        val headers = HttpHeaders()
        headers.contentType = MediaType.APPLICATION_JSON
        val httpEntity: HttpEntity<*> = HttpEntity<Any>(null, headers)

        assertThrows<HttpClientErrorException> { restTemplate.getForEntity(localUrl(filterProductUrl), List::class.java, httpEntity) }
    }

    @Test
    fun `should allow to see all the products when the user is authenticated`() {

        // given
        val token = generateToken()


        // when
        val response = mvc.perform(MockMvcRequestBuilders.get(localUrl(allProductsUrl)).header("Authorization", "Bearer $token"));
        //then

        with(response) {
            andExpect(status().isOk)
        }

    }

    @Test
    fun `should allow to see filtered products when the user is authenticated`() {
        // given
        val token = generateToken()


        // when
        val response = mvc.perform(MockMvcRequestBuilders.get(localUrl(filterProductUrl))
                .param("name", "some")
                .header("Authorization", "Bearer $token"))

        //then

        with(response) {
            andExpect(status().isOk)
        }
    }
}