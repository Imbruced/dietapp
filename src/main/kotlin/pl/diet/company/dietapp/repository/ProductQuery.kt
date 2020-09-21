package pl.diet.company.dietapp.repository

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import pl.diet.company.dietapp.domain.Product
import pl.diet.company.dietapp.domain.ProductRequest

@Service
class ProductQuery(@Autowired val productRepository: ProductRepository, @Autowired val counterQuery: CounterQuery){
    fun findProductByName(productName: String): List<Product> =
            productRepository.findProductByName(productName)

    fun findAll(): List<Product> = productRepository.findAll()

    fun save(productRequest: ProductRequest): Long {
        val maxId = counterQuery.getNextUserIdSequence()
        productRepository.save(productRequest.toProduct(maxId))
        return maxId
    }

    fun remove(id: Long): Long {
        val productToRemoveId = productRepository.findById(id)

        return if (productToRemoveId.isPresent){
            productRepository.deleteById(id)
            id
        }
        else -1

    }

}