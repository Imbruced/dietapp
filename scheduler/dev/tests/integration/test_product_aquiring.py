import requests_mock
from datetime import datetime

from requests_mock import Mocker

from products.metadata.config.urls import STARTING_PAGE
from products.metadata.service.aquiring import CarrefourProductGetter, Category, ProductMetaData
from tests.config.metaresponse import load_meta_data_page


def assertListEqual(lit, rit):
    assert(sorted(lit) == sorted(rit) and len(lit) == len(rit))


class TestProductMetaDataAquire:
    __date = datetime(2020, 9, 10, 12, 47, 33)
    __eggs_and_dairy_category = Category("mleko-nabial-jaja")
    __product_getter = CarrefourProductGetter(__eggs_and_dairy_category, __date, 3)
    sample_product_metadata = ProductMetaData(__eggs_and_dairy_category, "", None, "2020-09-10T12-47-33")
    __expected_products = [
        sample_product_metadata.copy(
            url="/mleko-nabial-jaja/sery/sery-salatkowe-kanapkowe/bieluch-serek"
        ),
        sample_product_metadata.copy(
            url="/mleko-nabial-jaja/twarog-serek-wiejski/serki-wiejskie/mlekovita-polski-wiejski"
        ),
        sample_product_metadata.copy(
            url="/mleko-nabial-jaja/twarog-poltlusty-275-g"
        ),
        sample_product_metadata.copy(
            url="/mleko-nabial-jaja/sery/ser-120-g"
        ),
        sample_product_metadata.copy(
            url="/mleko-nabial-jaja/mleczny-przystanek-twarog-chudy-250-g"
        ),
        sample_product_metadata.copy(
            url="/mleko-nabial-jaja/carrefour-ser-dziuramer-150-g"
        )

    ]

    def test_correctly_parsing_website(self):
        with requests_mock.Mocker() as m:
            # given

            m.register_uri("GET",
                           f"{STARTING_PAGE}/{self.__eggs_and_dairy_category.name}?page=0",
                           text=load_meta_data_page(0),
                           status_code=200
                           )

            # when
            products_metadata = self.__product_getter.get_page(
                0,
                self.__date
            )

            # then
            assertListEqual(products_metadata, self.__expected_products[:2])

    def test_should_correctly_get_the_data_from_multiple_pages(self):
        # given
        with requests_mock.Mocker() as m:
            # given

            for page_number in range(3):
                self.__register_product_metadata_uri(m, page_number)

            # when
            products_metadata = self.__product_getter.get()
            # then
            assertListEqual(products_metadata, self.__expected_products)

    def __register_product_metadata_uri(self, mocker: Mocker, page_number: int):
        mocker.register_uri("GET",
                            f"{STARTING_PAGE}/{self.__eggs_and_dairy_category.name}?page={page_number}",
                            text=load_meta_data_page(page_number),
                            status_code=200
        )
