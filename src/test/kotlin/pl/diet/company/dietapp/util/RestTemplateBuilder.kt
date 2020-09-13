package pl.diet.company.dietapp.util

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.client.RestTemplate


@Configuration
class RestTemplateClient {
    @Bean
    fun restTemplate(): RestTemplate {
        return RestTemplate()
    }
}

