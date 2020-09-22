package pl.diet.company.dietapp.registration.domain

import org.jetbrains.annotations.NotNull

data class User (@NotNull val firstName: String,
                 @NotNull val lastName: String,
                 @NotNull val password: String,
                 @NotNull val matchingPassword: String,
                 @NotNull val email: String
){
    fun withFirstName(firstName: String): User = this.copy(firstName=firstName)
    fun withLastName(lastName: String): User = this.copy(lastName=lastName)
    fun withEmail(email: String): User = this.copy(email=email)
    fun withMatchingPassword(matchingPassword: String): User = this.copy(matchingPassword=matchingPassword)
    fun withPassword(password: String): User = this.copy(password=password)

}