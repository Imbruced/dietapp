package pl.diet.company.dietapp.registration.service.validate

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import pl.diet.company.dietapp.registration.domain.User
import pl.diet.company.dietapp.util.EmailValidator

@Service
class UserValidator{
    @Autowired
    lateinit var emailValidator: EmailValidator

    fun validate(user: User): Boolean {
        return validateEmail(user) && validatePassword(user)
    }

    private fun validatePassword(user: User): Boolean = user.matchingPassword == user.password
    private fun validateEmail(user: User): Boolean = emailValidator.validate(user.email)
}