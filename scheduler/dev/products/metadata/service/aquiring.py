from abc import ABC
from datetime import datetime
from typing import List, Optional


from products.metadata.config.categories import PRODUCT_CATEGORIES
import attr
from bs4 import BeautifulSoup
import requests

from products.metadata.config.urls import STARTING_PAGE
from products.utils.date import DateUtil


class ElementNotExists(Exception):
    def __init__(self, msg):
        super().__init__(self, msg)


class Category:

    def __init__(self, category: str):
        self.validate(category)
        self.category = category

    @staticmethod
    def validate(category: str):
        if category not in PRODUCT_CATEGORIES:
            raise ElementNotExists(f"category {category} does not exists, please update it within the configuration file")


@attr.s
class ProductMetaData:
    category = attr.ib(type=Category)
    url = attr.ib(type=Optional[str])
    source_id = attr.ib(type=Optional[str])
    # date in iso format yyyy-mm-ddThh-mm-ss
    date = attr.ib(type=str)


class PageNumberFinder:

    @staticmethod
    def find_number_of_pages(main_data: BeautifulSoup) -> int:
        pages_div = main_data.find("div", {"class": "jss264"})

        pages_number = pages_div.find("p").text.split(" ")[-1]
        return int(pages_number)


class ProductGetter(ABC):

    @classmethod
    def get(cls) -> List[ProductMetaData]:
        raise NotImplementedError()


class CarrefourProductGetter(ProductGetter):

    starting_url = STARTING_PAGE

    @classmethod
    def get(cls):
        pass

    @classmethod
    def get_page(cls, category: Category, page: int, date: datetime) -> List[ProductMetaData]:
        page_data = requests.get(cls.__create_page_url(category), params={"page": page})
        page_data_text = page_data.content.decode()
        return cls.parse_page(page_data_text, category, DateUtil.format_date(date))

    @classmethod
    def __create_page_url(cls, category: Category):
        return f"{cls.starting_url}/{category.category}"

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



