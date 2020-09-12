package pl.diet.company.dietapp.util

import applicationSecret
import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Service
import java.util.Date

@Service
class JwtUtil {

    private val tokenExpirationTime: Long = 1000 * 60 * 10 * 10
    private val SECRET_KEY = applicationSecret

    fun extractUserName(token: String): String {
        return extractClaim(token, Claims::getSubject)
    }

    fun extractExpiration(token: String): Date{
        return extractClaim(token, Claims::getExpiration)
    }

    fun <T>extractClaim(token: String, claimsResolver: (Claims) -> T): T{
        val claims: Claims = extractAllClaims(token)
        return claimsResolver(claims)
    }

    private fun extractAllClaims(token: String): Claims {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).body
    }

    private fun isTokenExpired(token: String): Boolean {

        return extractExpiration(token).after(Date())
    }

    fun createToken(claims: HashMap<String, Any>, subject: String): String{
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(Date(System.currentTimeMillis()))
                .setExpiration(Date(System.currentTimeMillis() + tokenExpirationTime))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact()
    }

    fun generateToken(userDetails: UserDetails): String {
        val claims = HashMap<String, Any>()
        return createToken(claims, userDetails.username)
    }

    fun validateToken(token: String, userDetails: UserDetails): Boolean {
        val userName: String = extractUserName(token)
        return userName.equals(userDetails.username) && isTokenExpired(token)
    }
}