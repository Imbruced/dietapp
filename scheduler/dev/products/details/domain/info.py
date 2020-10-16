from typing import Dict

import attr


@attr.s
class RawProduct(object):

    source = attr.ib()
    url = attr.ib()
    datetime = attr.ib()
    raw_data = attr.ib()

    def to_json(self) -> Dict[str, object]:
        return {
            "source": self.source,
            "url": self.url,
            "datetime": self.datetime,
            "raw_data": self.raw_data
        }
