import com.typesafe.config.Config
import com.typesafe.config.ConfigFactory


val conf: Config = ConfigFactory.load()
val applicationSecret = conf.getString("app.applicationSecret")
