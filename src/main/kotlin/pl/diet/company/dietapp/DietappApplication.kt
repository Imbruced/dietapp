package pl.diet.company.dietapp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DietappApplication

fun main(args: Array<String>) {
	runApplication<DietappApplication>(*args)
}
