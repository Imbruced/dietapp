package pl.diet.company.dietapp.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import pl.diet.company.dietapp.domain.Product
import pl.diet.company.dietapp.service.ProductQuery

import pl.diet.company.dietapp.service.ProductReader


@RestController
class ProductController(@Autowired val productQuery: ProductQuery,
                        @Autowired val productReader: ProductReader) {

    @GetMapping("/all_products")
    fun getAllProducts(): List<Product> {
        return productQuery.findAll();
    }

    @GetMapping("/products")
    fun getProduct(@RequestParam(name="name", required = false) productName: String) : List<Product> {
        val maybeProducts = productQuery.findProductByName(productName)
        return if (maybeProducts.isEmpty()) listOf()
        else maybeProducts

    }

    @GetMapping("/insert_products")
    fun insertProducts(): Unit {
        productReader.readProducts().forEach {
            it -> productQuery.save(it)
        }
    }
}