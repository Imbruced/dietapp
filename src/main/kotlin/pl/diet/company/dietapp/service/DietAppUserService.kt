package pl.diet.company.dietapp.service

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class DietAppUserService : UserDetailsService {
    override fun loadUserByUsername(username: String?): UserDetails {
        return User(username, "password", listOf<GrantedAuthority>())
    }
}