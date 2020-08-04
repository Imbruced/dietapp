package pl.diet.company.dietapp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.builder.SpringApplicationBuilder

@SpringBootApplication
class DietappApplication

fun main(args: Array<String>) {
	val builder = SpringApplicationBuilder(DietappApplication::class.java)
	builder.headless(true).run(*args)
}
