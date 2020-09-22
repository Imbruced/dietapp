package pl.diet.company.dietapp.registration.service.validate

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import pl.diet.company.dietapp.registration.domain.DietAppUser
import pl.diet.company.dietapp.util.EmailValidator

@Service
class UserValidator{
    @Autowired
    lateinit var emailValidator: EmailValidator

    fun validate(user: DietAppUser): Boolean {
        return validateEmail(user) && validatePassword(user)
    }

    private fun validatePassword(user: DietAppUser): Boolean = user.matchingPassword == user.password
    private fun validateEmail(user: DietAppUser): Boolean = emailValidator.validate(user.email)
}