package pl.diet.company.dietapp

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.BeforeEach
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import pl.diet.company.dietapp.builder.UserBuilder
import pl.diet.company.dietapp.security.service.DietAppUserService
import pl.diet.company.dietapp.security.util.TestBase

@RunWith(SpringRunner::class)
class TestUserRegistration() : TestBase() {

    private val validEmail = "james.hetfield@email.com"
    private val validFirstName = "james"
    private val validLastName = "hetfield"
    private val validPassword = "metallica.01"
    private val invalidEmailAddress = "email.com"

    @BeforeEach
    fun clearUsersRegistration(){
        val emails = listOf(validEmail, invalidEmailAddress)

        emails.forEach{
            dietUserService.removeUser(it)
        }
    }

    @Test
    fun `should correctly create user with correct parameters`(){

        // TODO remove additional jwt creation while user registration process
        // given
        val validUser = userBuilder.buildUser
                .withEmail(validEmail)
                .withFirstName(validFirstName)
                .withLastName(validLastName)
                .withMatchingPassword(validPassword)
                .withPassword(validPassword)
        // when
        val response = registerUser(validUser)

        //then

        with(response) {
            andExpect(MockMvcResultMatchers.status().isOk)
        }
    }

    @Test
    fun `should reject user creation when form is invalid`(){

        // given
        val invalidUser = userBuilder.buildUser
                .withEmail(validEmail)
                .withMatchingPassword(validPassword)
                .withPassword(validPassword + "some_word")

        // when

        val response = registerUser(invalidUser)

        // then

        with(response){
            andExpect(MockMvcResultMatchers.status().`is`(400))
        }
    }

    @Test
    fun `should not register when email already exists`(){

        // given
        val validUser = userBuilder.buildUser
                .withEmail(validEmail)
                .withMatchingPassword(validPassword)
                .withPassword(validPassword)
        // when

        val response = registerUser(validUser)

        // then

        with(response){
            andExpect(MockMvcResultMatchers.status().`is`(200))
        }

        // when trying to create account again

        val secondResponse = registerUser(validUser)

        // then
        with(secondResponse){
            andExpect(MockMvcResultMatchers.status().`is`(409))
        }
    }

    @Test
    fun `should reject remove user when email does not exists`(){
        // given
        val response = mvc.perform(MockMvcRequestBuilders
                .delete(localUrl(userRegistrationPath))
                .headers(authenticatedHeaders)
                .content(validEmail)
        )

        with(response){
            andExpect(MockMvcResultMatchers.status().`is`(409))
        }
    }

    @Test
    fun `should remove user when email specified is valid`(){
        val validUser = userBuilder.buildUser
                .withEmail(validEmail)
                .withMatchingPassword(validPassword)
                .withPassword(validPassword)

        registerUser(validUser)

        val response = mvc.perform(MockMvcRequestBuilders
                .delete(localUrl(userRegistrationPath))
                .headers(authenticatedHeaders)
                .content(validEmail)
        )

        with(response){
            andExpect(MockMvcResultMatchers.status().`is`(200))
        }

    }

    @Test
    fun `should reject user removing when user is not authenticated`(){
        val response = mvc.perform(MockMvcRequestBuilders
                .delete(localUrl(userRegistrationPath))
                .headers(unauthenticatedHeaders)
                .content(validEmail)
        )

        with(response){
            andExpect(MockMvcResultMatchers.status().`is`(409))
        }
    }
}