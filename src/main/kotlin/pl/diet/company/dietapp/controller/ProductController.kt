package pl.diet.company.dietapp.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import pl.diet.company.dietapp.domain.Product
import pl.diet.company.dietapp.service.ProductQuery

import pl.diet.company.dietapp.service.ProductReader


@RestController
@CrossOrigin
class ProductController(@Autowired val productQuery: ProductQuery,
                        @Autowired val productReader: ProductReader) {

    @GetMapping("/all_products", produces= ["application/json"])
    fun getAllProducts(): List<Product> {
        return productQuery.findAll();
    }

    @GetMapping("/products", produces=["application/json"])
    fun getProduct(@RequestParam(name="name", required = false) productName: String) : List<Product> {
        val maybeProducts = productQuery.findProductByName(productName)
        return if (maybeProducts.isEmpty()) listOf()
        else maybeProducts

    }
}