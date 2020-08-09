package pl.diet.company.dietapp.service

import org.springframework.stereotype.Service
import pl.diet.company.dietapp.domain.Product

@Service
class ProductInfoReader(val productReader: ProductReader) {

    fun getProductInfo(productName: String): List<Product> {
        return productReader.readProducts().filter {
            it.name.toLowerCase().startsWith(productName)
        }
    }

}