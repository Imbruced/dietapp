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

    private val userRegistrationPath = "/registration/user"
    private val userRemovalPath = "/registration/user"
    private val userBuilder = UserBuilder
    private val validEmail = "james.hetfield@email.com"
    private val validFirstName = "james"
    private val validLastName = "hetfield"
    private val validPassword = "metallica.01"
    private val invalidEmailAddress = "email.com"

    @Autowired
    lateinit var dietUserService: DietAppUserService

    @BeforeEach
    fun clearUsers(){
        val emails = listOf(validEmail, invalidEmailAddress)

        emails.forEach{
            dietUserService.removeUser(it)
        }
    }

    @Test
    fun `should correctly create user with correct parameters`(){

        // TODO remove additional jwt creation while user registration process
        // given
        val token = generateToken()
        val validUser = userBuilder.buildUser
                .withEmail(validEmail)
                .withFirstName(validFirstName)
                .withLastName(validLastName)
                .withMatchingPassword(validPassword)
                .withPassword(validPassword)

        val validUserJson = mapper.writeValueAsString(validUser)

        // when
        val response = mvc.perform(MockMvcRequestBuilders
                .post(localUrl(userRegistrationPath))
                .headers(authenticatedHeaders)
                .content(validUserJson)
        )
        //then

        with(response) {
            andExpect(MockMvcResultMatchers.status().isOk)
        }
    }

    @Test
    fun `should reject user creation when form is invalid`(){

        // given
        val token = generateToken()
        val invalidUser = userBuilder.buildUser
                .withMatchingPassword(validPassword)
                .withPassword(validPassword + "some_word")

        val invalidUserJson = mapper.writeValueAsString(invalidUser)

        // when

        val response = mvc.perform(MockMvcRequestBuilders
                .post(localUrl(userRegistrationPath))
                .headers(authenticatedHeaders)
                .content(invalidUserJson))

        // then

        with(response){
            andExpect(MockMvcResultMatchers.status().`is`(400))
        }
    }

    @Test
    fun `should not register when email already exists`(){

        // given
        val token = generateToken()
        val invalidUser = userBuilder.buildUser
                .withMatchingPassword(validPassword)
                .withPassword(validPassword)

        val validUserJson = mapper.writeValueAsString(invalidUser)

        // when

        val response = mvc.perform(MockMvcRequestBuilders
                .post(localUrl(userRegistrationPath))
                .headers(authenticatedHeaders)
                .content(validUserJson))

        // then

        with(response){
            andExpect(MockMvcResultMatchers.status().`is`(200))
        }

        // when trying to create account again

        val secondResponse = mvc.perform(MockMvcRequestBuilders
                .post(localUrl(userRegistrationPath))
                .headers(authenticatedHeaders)
                .content(validUserJson))

        // then
        with(secondResponse){
            andExpect(MockMvcResultMatchers.status().`is`(409))
        }
    }

    @Test
    fun `should reject remove user when email does not exists`(){

    }

    @Test
    fun `should remove user when email specified is valid`(){

    }

    @Test
    fun `should reject user removing when user is not authenticated`(){

    }
}