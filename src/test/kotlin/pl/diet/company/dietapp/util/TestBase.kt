package pl.diet.company.dietapp.util

import com.github.tomakehurst.wiremock.client.WireMock
import com.github.tomakehurst.wiremock.junit.WireMockRule
import com.nimbusds.jose.jwk.gen.RSAKeyGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.client.RestTemplate
import pl.diet.company.dietapp.domain.AuthenticationResponse
import javax.security.auth.callback.ConfirmationCallback


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
class TestBase{

    @Autowired
    lateinit var restTemplate: RestTemplate

    private val authenticationUrl = "/home/authenticates"

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

    fun getAuthenticationToken(body: String): ResponseEntity<AuthenticationResponse> {
        val headers = HttpHeaders()
        headers.contentType = MediaType.APPLICATION_JSON
        val httpEntity: HttpEntity<*> = HttpEntity<Any>(body, headers)
        return restTemplate.postForEntity(localUrl(authenticationUrl),  httpEntity, AuthenticationResponse::class.java)
    }

    fun localUrl(url: String): String {
        return "http://localhost:5052$url"
    }
}