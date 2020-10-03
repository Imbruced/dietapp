from products.metadata.config.categories import PRODUCT_CATEGORIES
from products.metadata.exception.exception import ElementNotExists


class Category:

    def __init__(self, name: str):
        self.validate(name)
        self.name = name

    @staticmethod
    def validate(category: str):
        if category not in PRODUCT_CATEGORIES:
            raise ElementNotExists(f"category {category} does not exists, please update it within the configuration file")

    def to_json(self):
        return {"name": self.name}