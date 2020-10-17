from pymongo import MongoClient

from products.metadata.domain.category import Category
from products.metadata.repository.mongo import ProductMetadataMongoRepository
from products.metadata.service.aquiring import CarrefourProductGetter


class ProductMetadataGetter:

    # todo yaml config
    user = "diet_admin"
    pwd = "diet"
    port = 27018
    host = "localhost"
    db = "diet_db"

    @classmethod
    def process(cls, ds, **kwargs):
        products_to_scrap = CarrefourProductGetter(kwargs.get("category"),
                                                   ds,
                                                   kwargs.get("pages")).get()

        mongo_repo = ProductMetadataMongoRepository()
        client = MongoClient(username=cls.user, password=cls.pwd, host=cls.host, port=cls.port, authSource=cls.db)
        mongo_repo.save(products_to_scrap, client)

ProductMetadataGetter.process("2020-10-15T12:00:00", category=Category("napoje"), pages=2)
