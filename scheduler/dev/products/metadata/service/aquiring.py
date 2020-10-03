from abc import ABC
from datetime import datetime
from typing import List

from bs4 import BeautifulSoup
import requests

from products.metadata.config.urls import STARTING_PAGE
from products.metadata.domain.category import Category
from products.metadata.domain.product import ProductMetaData
from products.utils.date import DateUtil


class ProductGetter(ABC):

    def get(self) -> List[ProductMetaData]:
        raise NotImplementedError()


class CarrefourProductGetter(ProductGetter):
    starting_url = STARTING_PAGE

    def __init__(self, category: Category, date: str, pages: int):
        self.pages = pages
        self.category = category
        self.date = date

    def get(self) -> List[ProductMetaData]:
        pages = []
        for page in range(self.pages):
            pages.extend(self.get_page(page, self.date))

        return pages

    def get_page(self, page: int, date: str) -> List[ProductMetaData]:
        page_data = requests.get(self.__create_base_url(self.category), params={"page": page})
        page_data_text = page_data.content.decode()
        return self.parse_page(page_data_text, self.category, date)

    @classmethod
    def __create_base_url(cls, category: Category):
        return f"{cls.starting_url}/{category.name}"

    @classmethod
    def parse_page(cls, page_data: str, category: Category, date: str) -> List[ProductMetaData]:
        soup = BeautifulSoup(page_data)
        all_raw_products = soup.find_all("div", {"class": "jss278"})
        return [
            ProductMetaData(
                category=category,
                url=raw_product.find("a")["href"],
                date=date,
                source_id=None
            ) for raw_product in all_raw_products
        ]
