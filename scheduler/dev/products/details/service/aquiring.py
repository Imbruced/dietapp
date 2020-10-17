import json

import requests
from bs4 import BeautifulSoup

from products.details.domain.info import RawProduct
from products.metadata.domain.product import ProductMetaData


class ProductFetcher:

    @staticmethod
    def get(ds: str, product_meta_data: ProductMetaData) -> RawProduct:
        response = requests.get(product_meta_data.url)

        soup = BeautifulSoup(response.content.decode())

        product_detailed_information = soup.find("script", {"id": "__NEXT_DATA__"}).contents[0]

        return RawProduct(
            source=product_meta_data.source_id,
            url=product_meta_data.url,
            datetime=ds,
            raw_data=json.loads(product_detailed_information)
        )

