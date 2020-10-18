package pl.diet.company.dietapp.product.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Component
import pl.diet.company.dietapp.product.domain.Product

@Component
interface ProductRepository : MongoRepository<Product, Long> {
    @Query("{ \'name\' : { \$regex: ?0 } }")
    fun findProductByName(name: String): List<Product>
}