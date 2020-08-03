package pl.diet.company.dietapp

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.servlet.ModelAndView
import pl.diet.company.dietapp.service.ProductInfoReader

@Controller
class MainController(val productInfoReader: ProductInfoReader) {

    @RequestMapping("/products/{productName}", method = [RequestMethod.GET])
    @ResponseBody
    fun getProduct(@PathVariable productName: String) : ModelAndView {
        val maybeProducts = productInfoReader.getProductInfo(productName)
        return if (maybeProducts.isEmpty()) ModelAndView("NotFoundProduct")
        else ModelAndView("ProductPage", "product", maybeProducts.first())
        
    }

}
