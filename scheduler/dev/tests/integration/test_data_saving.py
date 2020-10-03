import mongomock
import pymongo
from pymongo.collection import Collection

from products.metadata.domain.category import Category
from products.metadata.domain.product import ProductMetaData
from products.metadata.repository.mongo import ProductMetadataMongoRepository
from tests.integration.test_product_aquiring import assertListEqual

PORT = 27019
HOST = "server.example.com"
DB = "db"
COLLECTION = "collection"
USER = "user"
PWD = "pwd"

ProductMetadataMongoRepository.port = PORT
ProductMetadataMongoRepository.user = USER
ProductMetadataMongoRepository.db = DB
ProductMetadataMongoRepository.pwd = PWD
ProductMetadataMongoRepository.collection = COLLECTION
ProductMetadataMongoRepository.host = HOST


class MongoClient:
    def __init__(self, client, db, collection: Collection):
        self.client = client
        self.db = db
        self.collection = collection


class TestDataSaver:

    sample_product_metadata = ProductMetaData(
        category=Category("napoje"),
        url="some_url",
        source_id="id",
        date="2020-10-20"
    )

    @mongomock.patch(servers=((HOST, PORT),))
    def test_should_be_empty_db_when_no_data_was_uploaded(self):
        objects = [
        ]
        client = self.__create_client()
        ProductMetadataMongoRepository.client = client.client
        ProductMetadataMongoRepository.save(objects)

        assert(client.collection.find_one() is None)

    @mongomock.patch(servers=((HOST, PORT),))
    def test_should_correctly_save_data_to_db(self):
        objects = [
            self.sample_product_metadata.copy(
                source_id=1,
                date="2020-10-21"
            ),
            self.sample_product_metadata.copy(
                source_id=2,
                date="2020-10-22"
            ),
            self.sample_product_metadata.copy(
                source_id=3,
                date="2020-10-23"
            )
        ]
        client = self.__create_client()
        ProductMetadataMongoRepository.client = client.client

        assert(client.collection.find_one() is None)

        ProductMetadataMongoRepository.save(objects)

        all_elements = client.collection.find()

        assertListEqual(
            [metadata["source_id"] for metadata in all_elements],
            [1, 2, 3]
        )

    def test_should_not_allow_to_save_incorrect_data(self):
        pass

    def test_should_not_allow_saving_when_required_field_is_missing(self):
        pass

    def __create_client(self):
        client = pymongo.MongoClient(f"mongodb://{USER}:{PWD}@{HOST}:{PORT}")
        db = client[DB]
        collection = db[COLLECTION]
        return MongoClient(client, db, collection)
