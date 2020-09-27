from abc import ABC
from typing import TypeVar, Iterable

import attr

T = TypeVar('T')


class MongoRepository(ABC):

    def save(self, iterable: Iterable[T]):
        raise NotImplementedError("Not implemented")


@attr.s
class ProductMetadataMongoRepository(MongoRepository):

    def save(self, iterable: Iterable[T]):
        pass
