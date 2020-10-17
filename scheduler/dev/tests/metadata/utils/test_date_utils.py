from datetime import datetime

from products.utils.date import DateUtil


class TestDateUtils:

    def test_default_formatting_date_from_date_time(self):

        # given
        date = datetime(2020, 9, 1, 12, 43, 37)

        # when

        formatted_date = DateUtil.format_date(date)

        # then
        assert(
            formatted_date == "2020-09-01T12-43-37"
        )

    def test_other_formatting_methods(self):
        # given

        date = datetime(2020, 9, 1, 12, 43, 37)

        # when

        formatted_date = DateUtil.format_date(date, "%Y-%m-%d")

        # then
        assert(
                "2020-09-01" == formatted_date
        )
