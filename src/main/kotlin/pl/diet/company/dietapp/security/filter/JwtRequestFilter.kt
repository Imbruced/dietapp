package pl.diet.company.dietapp.security.filter

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import pl.diet.company.dietapp.security.service.DietAppUserService
import pl.diet.company.dietapp.security.util.JwtUtil
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class JwtRequestFilter(@Autowired val userDetailsService: DietAppUserService,
                       @Autowired val jwtUtil: JwtUtil) : OncePerRequestFilter(){

    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain) {
        val authorizationHeader: String? = request.getHeader("Authorization")

        val jwt: String? = if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            authorizationHeader.substring(7)
        } else null

        val username: String? = if (jwt != null) jwtUtil.extractUserName(jwt) else null

        if (username != null && SecurityContextHolder.getContext().authentication == null && jwt != null){
            val userDetails = try{
                userDetailsService.loadUserByUsername(username)
            } catch (e: UsernameNotFoundException){
                null
            }

            if (userDetails != null){
                if (jwtUtil.validateToken(jwt, userDetails)){
                    val usernamePasswordAuthenticationToken = UsernamePasswordAuthenticationToken(userDetails, null, userDetails.authorities)
                    usernamePasswordAuthenticationToken.details = WebAuthenticationDetailsSource().buildDetails(request)
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken)
                }
            }

        }

        filterChain.doFilter(request, response)
    }
}