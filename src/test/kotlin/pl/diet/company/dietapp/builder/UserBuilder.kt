package pl.diet.company.dietapp.builder

import org.springframework.stereotype.Service
import pl.diet.company.dietapp.registration.domain.DietAppUser

@Service
class UserBuilder {

    companion object{
        val buildUser = DietAppUser(
                "firstname",
                "password",
                "lastname",
                "password",
                "email@email.com"
        )
    }
}