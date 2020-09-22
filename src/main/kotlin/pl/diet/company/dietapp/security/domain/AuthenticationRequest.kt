package pl.diet.company.dietapp.security.domain

data class AuthenticationRequest(val username: String, val password: String)

data class AuthenticationResponse(val jwt: String)