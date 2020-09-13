package pl.diet.company.dietapp

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.web.client.HttpClientErrorException
import pl.diet.company.dietapp.util.JwtUtil
import pl.diet.company.dietapp.util.TestBase


@AutoConfigureDataMongo
@AutoConfigureMockMvc
@RunWith(SpringRunner::class)
class TestProduct : TestBase() {


    private val allProductsUrl = "/all_products"
    private val filterProductUrl = "/products"

    @Autowired
    lateinit var mvc: MockMvc

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
        val token = JwtUtil().generateToken(User("user", "password", listOf<GrantedAuthority>()))


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
        val token = JwtUtil().generateToken(User("user", "password", listOf<GrantedAuthority>()))


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