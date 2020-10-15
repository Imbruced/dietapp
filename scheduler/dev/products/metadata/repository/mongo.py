from abc import ABC
from typing import TypeVar, Iterable

import attr
from pymongo import MongoClient

from products.metadata.domain.product import ProductMetaData

T = TypeVar('T')


class MongoRepository(ABC):

    def save(self, iterable: Iterable[T]):
        raise NotImplementedError("Not implemented")


@attr.s
class ProductMetadataMongoRepository(MongoRepository):
    user = "diet_admin"
    pwd = "diet"
    db = "diet_db"
    port = 27018
    collection = "product_metadata"
    host = "localhost"
    client = MongoClient(username=user, password=pwd, host=host, port=port, authSource=db)

    @classmethod
    def save(cls, iterable: Iterable[ProductMetaData]):
        client = cls.client
        db = client[cls.db]
        collection = db[cls.collection]
        for metadata in iterable:
            collection.insert_one(metadata.to_json())

