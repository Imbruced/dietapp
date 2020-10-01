package pl.diet.company.dietapp.registration.domain

import org.jetbrains.annotations.NotNull
import org.springframework.data.annotation.Id
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

data class DietAppUser(@NotNull val firstName: String,
                       @NotNull val userPassword: String,
                       @NotNull val lastName: String,
                       @NotNull val matchingPassword: String,
                       @Id @NotNull val email: String
) : UserDetails {

    override fun getAuthorities(): MutableCollection<GrantedAuthority> {
        return mutableListOf<GrantedAuthority>()
    }

    override fun isEnabled(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun getUsername(): String {
        return email
    }

    override fun getPassword(): String {
        return userPassword
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    fun withPassword(password: String): DietAppUser = copy(userPassword = password)

    fun withEmail(email: String): DietAppUser = copy(email = email)

    fun withFirstName(firstName: String): DietAppUser = copy(firstName = firstName)

    fun withMatchingPassword(matchingPassword: String): DietAppUser = copy(
            matchingPassword = matchingPassword
    )

    fun withLastName(lastName: String): DietAppUser = copy(
            lastName = lastName
    )
}