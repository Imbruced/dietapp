package pl.diet.company.dietapp

import org.junit.jupiter.api.Test
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.annotation.Bean

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@AutoConfigureDataMongo
class DietappApplicationTests {

	@Test
	fun contextLoads() {
	}

}
