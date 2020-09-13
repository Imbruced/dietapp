package pl.diet.company.dietapp.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.*
import pl.diet.company.dietapp.domain.AuthenticationRequest
import pl.diet.company.dietapp.domain.AuthenticationResponse
import pl.diet.company.dietapp.service.DietAppUserService
import pl.diet.company.dietapp.util.JwtUtil

@RestController
@RequestMapping("/home")
class LoggingController(@Autowired val authenticationManager: AuthenticationManager,
                        @Autowired val userDetailsService: DietAppUserService,
                        @Autowired val jwtUtil: JwtUtil) {


    @GetMapping()
    fun mainPage() = "Main page"

    @PostMapping("/authenticates")
    fun createAuthenticationToken(@RequestBody authenticationRequest: AuthenticationRequest): ResponseEntity<AuthenticationResponse>{
        try {
            authenticationManager.authenticate(
                    UsernamePasswordAuthenticationToken(authenticationRequest.username, authenticationRequest.password)
            )
        }
        catch (e: BadCredentialsException){
            return ResponseEntity.status(403).body(AuthenticationResponse(""))
        }
        val userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.username)

        val jwt = jwtUtil.generateToken(userDetails)

        return ResponseEntity.ok(AuthenticationResponse(jwt))
    }
}