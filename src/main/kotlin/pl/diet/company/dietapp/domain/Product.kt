package pl.diet.company.dietapp.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.math.BigDecimal


data class Money(val value: BigDecimal, val currency: String){

    fun withValue(value: BigDecimal): Money = this.copy(value=value)
    fun withCurrency(currency: String): Money = this.copy(currency=currency)
}

data class Measurement(val value: Double, val unit: String){

    fun withValue(value: Double): Measurement = this.copy(value=value)
    fun withUnit(unit: String): Measurement = this.copy(unit=unit)
}
data class Description(val kcal: Measurement, val fat: Measurement, val carbo: Measurement, val protein: Measurement)

@Document
data class Product(@Id val id: Long, val name: String, val average_price: Money?, val description: Description)

data class ProductRequest(val name: String, val average_price: Money?, val description: Description){
    fun toProduct(id: Long): Product =
        Product(
                id = id,
                name=name,
                average_price = average_price,
                description = description
        )

    fun withName(name: String): ProductRequest = this.copy(name=name)
    fun withPrice(price: Money): ProductRequest = this.copy(average_price = price)
    fun withDescription(description: Description) = this.copy(description = description)

}
