package pl.diet.company.dietapp.domain

data class AuthenticationRequest(val username: String, val password: String)

data class AuthenticationResponse(val jwt: String)