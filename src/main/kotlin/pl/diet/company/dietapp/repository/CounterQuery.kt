package pl.diet.company.dietapp.repository

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import org.springframework.stereotype.Component

@SuppressWarnings("serial")
@Document(collection = "Counter")
data class Counter(val name: String, val sequence: Long)

@Component
class CounterQuery {
    @Autowired
    lateinit var mongoTemplate: MongoTemplate

    fun getNextUserIdSequence(): Long {
        return increaseCounter(PRODUCT_ID)!!
    }

    private fun increaseCounter(counterName: String): Long? {
        val query = Query(Criteria.where("name").`is`(counterName))
        val update = Update().inc("sequence", 1)
        val counter = mongoTemplate.findAndModify(query, update, Counter::class.java)
        return if (counter == null){
            mongoTemplate.insert(Counter(PRODUCT_ID, 0))
            0
        }
        else counter.sequence + 1
    }

    companion object {
        const val PRODUCT_ID: String = "productId"
    }
}