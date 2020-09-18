package pl.diet.company.dietapp.util

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.github.tomakehurst.wiremock.client.WireMock
import com.github.tomakehurst.wiremock.junit.WireMockRule
import com.nimbusds.jose.jwk.gen.RSAKeyGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.test.web.servlet.MockMvc
import org.springframework.web.client.RestTemplate
import pl.diet.company.dietapp.builder.ProductBuilder
import pl.diet.company.dietapp.domain.AuthenticationResponse
import javax.security.auth.callback.ConfirmationCallback


@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
class TestBase {

    private val authenticationUrl = "/home/authenticates"

    val builder = ProductBuilder()

    val mapper = jacksonObjectMapper()

    val sampleDescription = builder.buildDescription
    val samplePrice = builder.buildPrice


    @Autowired
    lateinit var restTemplate: RestTemplate

    @Autowired
    lateinit var mvc: MockMvc

    companion object {
        val AUTHORIZATION_KEY = RSAKeyGenerator(2048, true).keyID("321").generate()
    }

    fun mockOAuth(wireMockRule: WireMockRule) {
        wireMockRule.stubFor(WireMock.get("/home/authenticates").willReturn(WireMock.aResponse()
                .withHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .withStatus(ConfirmationCallback.OK)
                .withBody("{jwt: ${AUTHORIZATION_KEY.toString()}}")
        ))

    }

    fun localUrl(url: String): String {
        return "http://localhost:5052$url"
    }

    fun getAuthenticationToken(body: String): ResponseEntity<AuthenticationResponse> {
        val headers = HttpHeaders()
        headers.contentType = MediaType.APPLICATION_JSON
        val httpEntity: HttpEntity<*> = HttpEntity<Any>(body, headers)
        return restTemplate.postForEntity(localUrl(authenticationUrl), httpEntity, AuthenticationResponse::class.java)
    }

    fun generateToken(): String =
            JwtUtil().generateToken(
                    User(
                            "user",
                            "password",
                            listOf<GrantedAuthority>())
            )

    private fun createHeaders(): HttpHeaders {
        val token = generateToken()
        val headers = HttpHeaders()
        headers.contentType = MediaType.APPLICATION_JSON
        headers.add("Authorization", "Bearer $token")
        return headers
    }

    private fun createUnAuthenticatedHeaders(): HttpHeaders {
        val headers = HttpHeaders()
        headers.contentType = MediaType.APPLICATION_JSON

        return headers
    }

    val authenticatedHeaders = createHeaders()
    val unauthenticatedHeaders = createUnAuthenticatedHeaders()

}