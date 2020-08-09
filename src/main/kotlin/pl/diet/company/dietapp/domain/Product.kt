package pl.diet.company.dietapp.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.repository.Query
import java.math.BigDecimal


data class Money(val value: BigDecimal, val currency: String)
data class Measurement(val value: Double, val unit: String)
data class Description(val kcal: Measurement, val fat: Measurement, val carbo: Measurement, val protein: Measurement)

@Document
data class Product(val id: String, @Id val name: String, val average_price: Money, val description: Description)