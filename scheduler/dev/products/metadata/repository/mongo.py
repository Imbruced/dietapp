from abc import ABC
from typing import TypeVar, Iterable

import attr
from pymongo import MongoClient

from products.metadata.domain.product import ProductMetaData

T = TypeVar('T')


@attr.s
class ProductMetadataMongoRepository:
    db = "diet_db"
    collection = "product_metadata"

    @classmethod
    def save(cls, iterable: Iterable[ProductMetaData], client: MongoClient):
        db = client[cls.db]
        collection = db[cls.collection]
        for metadata in iterable:
            collection.insert_one(metadata.to_json())

