package pl.diet.company.dietapp.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.math.BigDecimal


data class Money(val value: BigDecimal, val currency: String)
data class Measurement(val value: Double, val unit: String)
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
}

//@SuppressWarnings("serial")
//@Document(collection = "counter")
//class Counter : BaseEntity{
//
//    private String name;
//
//    private long sequence;
//
//    ...
//}