from typing import List

from pymongo import MongoClient

from products.metadata.domain.category import Category
from products.metadata.domain.product import ProductMetaData


class ProductInfoLoader:

    db = "diet_db"
    collection = "product_metadata"

    @classmethod
    def load(cls, category: Category, client: MongoClient) -> List[ProductMetaData]:
        collection = client[cls.db][cls.collection]

        products_information = collection.find({"category": {"name": category.name}})

        return [
            ProductMetaData.from_json(product_information) for product_information in products_information
        ]
