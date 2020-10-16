from typing import List

from pymongo import MongoClient

from products.details.domain.info import RawProduct


class RawProductInfoRepository:

    collection = "raw_products"
    db = "diet_db"

    @classmethod
    def save(cls, products: List[RawProduct], client: MongoClient):
        collection = client[cls.db][cls.collection]
        for product in products:
            collection.insert_one(product.to_json())
