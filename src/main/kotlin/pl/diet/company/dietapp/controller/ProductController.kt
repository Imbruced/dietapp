package pl.diet.company.dietapp.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pl.diet.company.dietapp.domain.Product
import pl.diet.company.dietapp.domain.ProductRequest
import pl.diet.company.dietapp.repository.CounterQuery
import pl.diet.company.dietapp.repository.ProductQuery


@RestController
@CrossOrigin
class ProductController(@Autowired val productQuery: ProductQuery) {

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

    @PostMapping("/product")
    fun addProduct(@RequestBody product: ProductRequest): ResponseEntity<Long> {
        val insertedId = productQuery.save(product)

        return if (product.validate()){
            ResponseEntity.ok().body(insertedId)
        } else ResponseEntity.badRequest().body(-1)
    }

    @DeleteMapping("/product")
    fun removeProduct(@RequestParam("id") id: Long): ResponseEntity<Long> {
        val productId = productQuery.remove(id)
        return ResponseEntity.ok().body(productId)
    }
}