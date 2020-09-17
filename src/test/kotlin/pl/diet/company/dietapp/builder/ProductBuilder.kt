package pl.diet.company.dietapp.builder

import pl.diet.company.dietapp.domain.ProductCompositionDescription
import pl.diet.company.dietapp.domain.PositiveMeasurement
import pl.diet.company.dietapp.domain.Money
import pl.diet.company.dietapp.domain.ProductRequest
import java.math.BigDecimal

class ProductBuilder {

    val buildPrice: Money = Money(BigDecimal.valueOf(0.0), "PLN")

    val buildMeasurement: PositiveMeasurement = PositiveMeasurement(0.0, "g")

    val buildDescription: ProductCompositionDescription = ProductCompositionDescription(
            buildMeasurement,
            buildMeasurement,
            buildMeasurement,
            buildMeasurement
    )

    val buildProductRequest: ProductRequest = ProductRequest(
            name = "",
            average_price = buildPrice,
            description = buildDescription
    )
}
