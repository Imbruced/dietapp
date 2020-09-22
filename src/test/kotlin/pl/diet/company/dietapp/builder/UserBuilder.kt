package pl.diet.company.dietapp.builder

import pl.diet.company.dietapp.registration.domain.User

class UserBuilder {

    companion object{
        val buildUser = User(
                "firstname",
                "lastname",
                "password",
                "password",
                "email@email.com"
        )
    }
}