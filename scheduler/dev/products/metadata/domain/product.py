from typing import Optional

import attr

from products.metadata.domain.category import Category


@attr.s
class ProductMetaData:
    category = attr.ib(type=Category)
    url = attr.ib(type=Optional[str])
    source_id = attr.ib(type=Optional[str])
    # date in iso format yyyy-mm-ddThh-mm-ss
    date = attr.ib(type=str)

    def copy(self, **kwargs):
        return ProductMetaData(
            category=kwargs.get("category", self.category),
            url=kwargs.get("url", self.url),
            source_id=kwargs.get("source_id", self.source_id),
            date=kwargs.get("date", self.date)
        )

    def to_json(self):
        return {
            "category": self.category.to_json(),
            "url": self.url,
            "source_id": self.source_id,
            "date": self.date
        }
