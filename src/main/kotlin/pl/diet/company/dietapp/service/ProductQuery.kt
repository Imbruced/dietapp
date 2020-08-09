package pl.diet.company.dietapp.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import pl.diet.company.dietapp.domain.Product
import pl.diet.company.dietapp.repository.ProductRepository

@Service
class ProductQuery(@Autowired val productRepository: ProductRepository){
    fun findProductByName(productName: String): List<Product> =
            productRepository.findProductByName(productName)

    fun findAll(): List<Product> = productRepository.findAll()

    fun save(product: Product) = productRepository.save(product)

}