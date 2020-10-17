from pymongo import MongoClient

from products.details.loader.metadata import ProductInfoLoader
from products.details.repository.product_info import RawProductInfoRepository
from products.details.service.aquiring import ProductFetcher
from products.metadata.domain.category import Category


class RawProductJob:

    # todo yaml config
    user = "diet_admin"
    pwd = "diet"
    port = 27018
    host = "localhost"
    db = "diet_db"

    @classmethod
    def process(cls, ds, **kwargs):
        client = MongoClient(username=cls.user, password=cls.pwd, host=cls.host, port=cls.port, authSource=cls.db)
        category = kwargs.get("category")
        products_to_scrap = ProductInfoLoader.load(category, client)

        raw_products = []
        for product_metadata in products_to_scrap:
            raw_product = ProductFetcher.get(ds, product_metadata)

            raw_products.append(raw_product)

        RawProductInfoRepository.save(raw_products, client)


RawProductJob.process("2020-10-15T12:00:00", category=Category("napoje"))
