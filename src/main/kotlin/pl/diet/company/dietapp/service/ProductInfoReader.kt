package pl.diet.company.dietapp.service

import org.springframework.stereotype.Service

@Service
class ProductInfoReader(val productReader: ProductReader) {

    fun getProductInfo(productName: String): List<Product> {
        productReader.readProducts()
        return productReader.readProducts().filter {
            it.name.toLowerCase().startsWith(productName)
        }
    }

}