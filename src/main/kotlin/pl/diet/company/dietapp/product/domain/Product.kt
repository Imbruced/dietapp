package pl.diet.company.dietapp.product.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.math.BigDecimal


data class Money(val value: BigDecimal, val currency: String){

    fun withValue(value: BigDecimal): Money = this.copy(value=value)
    fun withCurrency(currency: String): Money = this.copy(currency=currency)

    fun validate(): Boolean = value >= BigDecimal.valueOf(0.0)
}

data class PositiveMeasurement(val value: Double, val unit: String){

    fun  validate(): Boolean = value >= 0.0
    fun withValue(value: Double): PositiveMeasurement = this.copy(value=value)
    fun withUnit(unit: String): PositiveMeasurement = this.copy(unit=unit)
}

data class ProductCompositionDescription(val kcal: PositiveMeasurement, val fat: PositiveMeasurement, val carbo: PositiveMeasurement, val protein: PositiveMeasurement){

    fun validate(): Boolean {
        return listOf(kcal, fat, carbo, protein).all {
            measurement -> measurement.validate()
        }
    }

    fun withKcal(value: Double) = this.copy(kcal= PositiveMeasurement(value, "kcal"))
    fun withFat(value: Double) = this.copy(fat = PositiveMeasurement(value, "g"))
    fun withCarbo(value: Double) = this.copy(carbo = PositiveMeasurement(value, "g"))
    fun withProtein(value: Double) = this.copy(protein = PositiveMeasurement(value, "g"))
}

@Document
data class Product(@Id val id: Long, val name: String, val average_price: Money?, val description: ProductCompositionDescription)

data class ProductRequest(val name: String, val average_price: Money?, val description: ProductCompositionDescription){

    fun validate(): Boolean {
        return if (average_price != null){
            average_price.validate() && description.validate()
        } else description.validate()
    }

    fun toProduct(id: Long): Product =
            Product(
                    id = id,
                    name = name,
                    average_price = average_price,
                    description = description
            )

    fun withName(name: String): ProductRequest = this.copy(name=name)
    fun withPrice(price: Money): ProductRequest = this.copy(average_price = price)
    fun withDescription(description: ProductCompositionDescription) = this.copy(description = description)

}
