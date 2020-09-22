package pl.diet.company.dietapp.registration.domain

import org.jetbrains.annotations.NotNull

data class UserDto (@NotNull val firstName: String,
                    @NotNull val lastName: String,
                    @NotNull val password: String,
                    @NotNull val matchingPassword: String,
                    @NotNull val email: String
)