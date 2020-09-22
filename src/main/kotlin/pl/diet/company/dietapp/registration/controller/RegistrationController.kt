package pl.diet.company.dietapp.registration.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.web.bind.annotation.*
import pl.diet.company.dietapp.registration.domain.DietAppUser
import pl.diet.company.dietapp.security.service.DietAppUserService

@RequestMapping("/registration")
@RestController
@CrossOrigin
class RegistrationController {

    @Autowired
    private lateinit var userService: DietAppUserService

    @PostMapping("/user")
    fun addUser(@RequestBody user: DietAppUser): ResponseEntity<String> {
        return try{
            userService.loadUserByUsername(user.email)
            ResponseEntity.status(409).body("${user.email} already exists")
        } catch (e: UsernameNotFoundException) {
            val userAdded = userService.addUser(user)
            if (userAdded){
                ResponseEntity.ok(user.email)
            } else ResponseEntity.badRequest().body("Not valid form")

        }
    }

    @DeleteMapping("/user")
    fun removeUser(@RequestBody email: String): ResponseEntity<String> {
        return if (userService.removeUser(email)){
            ResponseEntity.ok(email)
        }else ResponseEntity.badRequest().body(email)
    }
}