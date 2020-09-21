package pl.diet.company.dietapp.service

import org.springframework.stereotype.Service
import pl.diet.company.dietapp.domain.ProductCompositionDescription
import pl.diet.company.dietapp.domain.PositiveMeasurement
import pl.diet.company.dietapp.domain.Money
import pl.diet.company.dietapp.domain.Product
import java.math.BigDecimal

@Service
class ProductReader{
    private val fileName: String = "/products.csv"
    fun readProducts(): List<Product> {
        return this::class.java.getResource(fileName).readText(Charsets.UTF_8).split("\n").map {
            it -> it.split("|")
        }.map { Product(
                id = it[0].toLong(),
                name = it[1],
                average_price = Money(BigDecimal(it[2]), "PLN"),
                description = ProductCompositionDescription(
                        kcal = PositiveMeasurement(it[5].toDouble(), "kcal"),
                        fat = PositiveMeasurement(it[6].toDouble(), "g"),
                        carbo = PositiveMeasurement(it[7].toDouble(), "g"),
                        protein = PositiveMeasurement(it[8].toDouble(), "g")
                )
        ) }

    }
}
