package pl.diet.company.dietapp.service

import org.springframework.stereotype.Service
import java.math.BigDecimal

@Service
class ProductReader{
    private val fileName: String = "/products.csv"
    fun readProducts(): List<Product> {
        return this::class.java.getResource(fileName).readText(Charsets.UTF_8).split("\n").map {
            it -> it.split("|")
        }.map { Product(
                id = it[0],
                name = it[1],
                average_price = Money(BigDecimal(it[2]), "PLN"),
                description = Description(
                        kcal = Measurement(it[5].toDouble(), "kcal"),
                        fat = Measurement(it[6].toDouble(), "g"),
                        carbo = Measurement(it[7].toDouble(), "g"),
                        protein = Measurement(it[8].toDouble(), "g")
                )
        ) }

    }
}


data class Money(val value: BigDecimal, val currency: String)
data class Measurement(val value: Double, val unit: String)
data class Description(val kcal: Measurement, val fat: Measurement, val carbo: Measurement, val protein: Measurement)
data class Product(val id: String, val name: String, val average_price: Money, val description: Description)