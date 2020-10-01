package pl.diet.company.dietapp

import org.junit.jupiter.api.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import pl.diet.company.dietapp.product.domain.ProductCompositionDescription
import pl.diet.company.dietapp.product.domain.Money
import pl.diet.company.dietapp.security.util.TestBase
import java.math.BigDecimal


data class ProductWithoutName(val average_price: Money?, val description: ProductCompositionDescription)
data class ProductWithoutPrice(val name: String, val description: ProductCompositionDescription)
data class ProductWithoutDescription(val name: String, val average_price: Money?)

@AutoConfigureDataMongo
@RunWith(SpringRunner::class)
class TestAddProduct : TestBase() {

    private val addProductEndpointUrl = "/product"

    @Test
    fun `should correctly insert product to the database`() {
        // given

        val description = builder.buildDescription
        val price = builder.buildPrice

        val sampleProductRequest = builder.buildProductRequest
                .withName("jogurt").withDescription(description)
                .withPrice(price)

        // when
        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(mapper.writeValueAsString(sampleProductRequest))
                .headers(authenticatedHeaders))

        // then

        with(response) {
            andExpect(status().isOk)
            andReturn().response.contentAsString.toInt() != -1
        }

    }

    @Test
    fun `should correctly reject product when empty json is sent`() {
        // given empty json
        val emptyJson = "{}"

        // when
        // trying to send empty json

        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(emptyJson)
                .headers(authenticatedHeaders))


        // then
        // result should be

        with(response) {
            andExpect(status().is4xxClientError)
        }
    }

    @Test
    fun `should not save the product when the name is missing`() {

        val sampleProductWithoutName = ProductWithoutName(samplePrice, sampleDescription)
        val jsonProductWithoutName = mapper.writeValueAsString(sampleProductWithoutName)

        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(jsonProductWithoutName)
                .headers(authenticatedHeaders))

        with(response) {
            andExpect(status().is4xxClientError)
        }
    }

    @Test
    fun `should reject the request when the description is not send`() {
        val sampleProductWithoutDescription = ProductWithoutDescription(
                name = "jogurt",
                average_price = samplePrice
        )

        val jsonProductWithoutDescription = mapper.writeValueAsString(sampleProductWithoutDescription)

        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(jsonProductWithoutDescription)
                .headers(authenticatedHeaders))

        with(response) {
            andExpect(status().is4xxClientError)
        }

    }

    @Test
    fun `should reject the request when any of description field is not valid`() {

        //TODO change to table like tests

        val invalidDescriptions = listOf(
                builder.buildDescription.withCarbo(-10.0),
                builder.buildDescription.withFat(-20.0),
                builder.buildDescription.withKcal(-400.0),
                builder.buildDescription.withProtein(-15.0)
        )

        invalidDescriptions.forEach { invalidDescription ->
            val productWithWrongDescription = builder.buildProductRequest
                    .withDescription(invalidDescription)
            val productWithWrongDescriptionJson = mapper
                    .writeValueAsString(productWithWrongDescription)

            val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                    .content(productWithWrongDescriptionJson)
                    .headers(authenticatedHeaders))

            with(response) {
                andExpect(status().is4xxClientError)
            }

        }


    }

    @Test
    fun `should reject the request when any of price data field is not valid`() {
        val invalidPriceData = Money(
                BigDecimal.valueOf(-110.0),
                "PLN"
        )

        val productWithIncorrectPriceData = builder
                .buildProductRequest
                .withPrice(invalidPriceData)

        val jsonProductWithInvalidPriceData = mapper.writeValueAsString(productWithIncorrectPriceData)

        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(jsonProductWithInvalidPriceData)
                .headers(authenticatedHeaders))

        with(response) {
            andExpect(status().is4xxClientError)
        }
    }

    @Test
    fun `should reject product creation when client is not authenticated`() {
        val productWithIncorrectPriceData = builder
                .buildProductRequest

        val jsonProductWithInvalidPriceData = mapper.writeValueAsString(productWithIncorrectPriceData)

        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(jsonProductWithInvalidPriceData)
                .headers(unauthenticatedHeaders))

        with(response) {
            andExpect(status().is4xxClientError)
        }
    }

    @Test
    fun `should not reject product when the price data is missing`() {
        val exampleDescription = builder.buildDescription
        val productWithoutPrice = ProductWithoutPrice(
                name = "jogurt",
                description = exampleDescription
        )

        val jsonProductWithoutPriceData = mapper.writeValueAsString(productWithoutPrice)

        val response = mvc.perform(MockMvcRequestBuilders.post(localUrl(addProductEndpointUrl))
                .content(jsonProductWithoutPriceData)
                .headers(authenticatedHeaders))

        with(response) {
            andExpect(status().isOk)
        }
    }

}