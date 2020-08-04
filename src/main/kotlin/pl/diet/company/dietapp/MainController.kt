package pl.diet.company.dietapp

import org.springframework.web.bind.annotation.*
import pl.diet.company.dietapp.service.Product
import pl.diet.company.dietapp.service.ProductInfoReader

@RestController
class MainController(val productInfoReader: ProductInfoReader) {

    @GetMapping("/products")
    fun getProduct(@RequestParam(name="name", required = false) productName: String) : List<Product> {
        val maybeProducts = productInfoReader.getProductInfo(productName)
        return if (maybeProducts.isEmpty()) listOf()
        else maybeProducts

    }

}
