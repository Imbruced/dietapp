from attr import attr


@attr.s
class ProductInfoJob:

    @staticmethod
    def process(ds, **kwargs):
        pass