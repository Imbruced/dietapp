

import spock.lang.Specification
import spock.lang.Unroll

@Unroll
class TestApp extends Specification{

    def 'test'(){
        given:
        1 == 1
        when:
        1==1
        then:
        1==1

    }
}
