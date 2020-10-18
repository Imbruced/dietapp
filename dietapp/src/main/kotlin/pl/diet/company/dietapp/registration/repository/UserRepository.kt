package pl.diet.company.dietapp.registration.repository

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Component
import pl.diet.company.dietapp.registration.domain.DietAppUser
import pl.diet.company.dietapp.registration.service.validate.UserValidator
import java.util.*

interface UserRepository : CrudRepository<DietAppUser, String> {
    fun findByEmail(email: String): Optional<DietAppUser>
}

@Component
class DietUserRepository(@Autowired val userRepository: UserRepository,
                         @Autowired val userValidator: UserValidator) {

    fun findByEmail(email: String): Optional<DietAppUser> {
        return userRepository.findById(email)
    }

    fun save(user: DietAppUser): Boolean {
        if (userValidator.validate(user)) {
            userRepository.save(user)
            return true
        }
        return false
    }

    fun delete(email: String): Boolean {
        val possibleUser = userRepository.findById(email)

        return if (possibleUser.isPresent) {
            userRepository.delete(possibleUser.get())
            true
        } else false

    }

    fun findAll() = userRepository.findAll()
}