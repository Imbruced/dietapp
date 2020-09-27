from datetime import datetime

from products.metadata.domain.category import Category
from products.metadata.repository.mongo import ProductMetadataMongoRepository
from products.metadata.service.aquiring import CarrefourProductGetter


class ProductMetadataGetter:

    @staticmethod
    def process(date: datetime, category: Category, pages: int):
        products_to_scrap = CarrefourProductGetter(category, date, pages).get()
        mongo_repo = ProductMetadataMongoRepository()
        mongo_repo.save(products_to_scrap)
