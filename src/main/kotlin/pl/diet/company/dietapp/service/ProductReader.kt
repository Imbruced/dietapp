package pl.diet.company.dietapp.service

import org.springframework.stereotype.Service

@Service
class ProductReader{
    private val fileName: String = "/products_2.csv"
    fun readProducts(): List<Product> {
        return this::class.java.getResource(fileName).readText(Charsets.UTF_8).split("\n").map {
            it -> it.split("|")
        }.filter{it.size == 5}.map { Product(it[0], it[4], it[3], it[1], it[2]) }

    }
}

data class Product(val id: String, val name: String, val description: String, val price: String, val ean: String)