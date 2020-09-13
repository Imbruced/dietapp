package pl.diet.company.dietapp

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.web.client.HttpClientErrorException
import pl.diet.company.dietapp.util.TestBase
import java.lang.AssertionError

@AutoConfigureDataMongo
class TestAuthentication : TestBase(){

	@Test
	fun testValidAuthentication() {

		//given
		val body = "{\"username\": \"user\", \"password\": \"password\"}"

		//when
		val response = getAuthenticationToken(body)
		//then

		with(response){
			statusCode.value() == 200
			assert(getBody() != null)

			val length = getBody()?.jwt?.length
			if (length != null){
				assert(length > 10)
			}
			else throw AssertionError("Length is null")

		}

	}

	@Test
	fun testInvalidAuthentication(){
		//given
		val body = "{\"username\": \"user\", \"password\": \"not_valid_password\"}"

		//then
		assertThrows<HttpClientErrorException> { getAuthenticationToken(body) }

	}

}
