package pl.diet.company.dietapp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableMongoRepositories
class DietappApplication

fun main(args: Array<String>) {
	runApplication<DietappApplication>(*args)
}
