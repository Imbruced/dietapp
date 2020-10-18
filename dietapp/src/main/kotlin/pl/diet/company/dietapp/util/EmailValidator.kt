package pl.diet.company.dietapp.util

import org.springframework.stereotype.Service

@Service
class EmailValidator {
    fun validate(email: String): Boolean = email.contains("@")

}