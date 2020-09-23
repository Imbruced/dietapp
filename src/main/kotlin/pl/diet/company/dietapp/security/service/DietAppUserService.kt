package pl.diet.company.dietapp.security.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import pl.diet.company.dietapp.registration.domain.DietAppUser
import pl.diet.company.dietapp.registration.repository.DietUserRepository

@Service
class DietAppUserService : UserDetailsService {

    @Autowired
    private lateinit var userRepository: DietUserRepository

    override fun loadUserByUsername(email: String): DietAppUser {
        val user = userRepository.findByEmail(email)
        if (user.isPresent) {
            val currentUser = user.get()
            return DietAppUser(currentUser.firstName,
                    currentUser.userPassword,
                    currentUser.lastName,
                    currentUser.matchingPassword,
                    currentUser.email
            )
        }
        else throw UsernameNotFoundException("Can not find user")
    }

    fun addUser(user: DietAppUser): Boolean {
        return userRepository.save(user)
    }

    fun removeUser(email: String): Boolean {
        return userRepository.delete(email)
    }

    // TODO mock within tests to avoid data spill
    fun findAll() = userRepository.findAll()
}