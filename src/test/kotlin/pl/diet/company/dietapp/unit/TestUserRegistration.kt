package pl.diet.company.dietapp.unit

import junit.framework.Assert.assertEquals
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.context.junit4.SpringRunner
import pl.diet.company.dietapp.builder.UserBuilder
import pl.diet.company.dietapp.registration.service.validate.UserValidator
import pl.diet.company.dietapp.security.util.TestBase

@RunWith(SpringRunner::class)
class TestUserRegistration: TestBase(){

    private val userBuilder = UserBuilder
    private val validUserEmail = "email@email.com"
    private val validPasswordSample = "password1"
    private val validPasswordSample2 = "password2"
    private val invalidUserEmail = "email.com"
    private val validFirstName = "john"
    private val validLastName = "kowalsky"

    @Autowired
    lateinit var userValidator: UserValidator

    @Test
    fun `should correctly validate passwords which do not match`(){
        // given
        val sampleUser= userBuilder.buildUser
                .withPassword(validPasswordSample)
                .withMatchingPassword(validPasswordSample2)

        // when
        val isValidUser = userValidator.validate(sampleUser)

        // then

        assertEquals(false, isValidUser)

    }

    @Test
    fun `should correctly validate user with wrong email passed`(){
        // given
        val sampleUser = userBuilder.buildUser.withEmail(invalidUserEmail)

        // when

        val isValidUser = userValidator.validate(sampleUser)

        // then

        assertEquals(false, isValidUser)
    }

    @Test
    fun `should correctly validate user when the data is correctly filled in`(){
        // given

        val sampleUser = userBuilder.buildUser
                .withEmail(validUserEmail)
                .withFirstName(validFirstName)
                .withLastName(validLastName)
                .withMatchingPassword(validPasswordSample2)
                .withPassword(validPasswordSample2)

        // when

        val isValidUser = userValidator.validate(sampleUser)

        // then

        assertEquals(true, isValidUser)
    }


}