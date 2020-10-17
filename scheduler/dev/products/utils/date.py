from datetime import datetime


class DateUtil:

    @classmethod
    def format_date(cls, date: datetime, date_format="%Y-%m-%dT%H-%M-%S") -> str:
        return date.strftime(date_format)
