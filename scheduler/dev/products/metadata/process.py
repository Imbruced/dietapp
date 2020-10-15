from products.metadata.repository.mongo import ProductMetadataMongoRepository
from products.metadata.service.aquiring import CarrefourProductGetter


class ProductMetadataGetter:

    @staticmethod
    def process(ds, **kwargs):
        products_to_scrap = CarrefourProductGetter(kwargs.get("category"),
                                                   ds,
                                                   kwargs.get("pages")).get()
        mongo_repo = ProductMetadataMongoRepository()
        mongo_repo.save(products_to_scrap)
