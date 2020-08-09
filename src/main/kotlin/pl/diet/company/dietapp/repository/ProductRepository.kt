package pl.diet.company.dietapp.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository;
import pl.diet.company.dietapp.domain.Product

@Repository
interface ProductRepository : MongoRepository<Product, String> {
    @Query("{ \'name\' : { \$regex: ?0 } }")
    fun findProductByName(name: String): List<Product>
}