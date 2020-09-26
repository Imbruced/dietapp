from bs4 import BeautifulSoup


class PageNumberFinder:

    @staticmethod
    def find_number_of_pages(main_data: BeautifulSoup) -> int:
        pages_div = main_data.find("div", {"class": "jss264"})

        pages_number = pages_div.find("p").text.split(" ")[-1]
        return int(pages_number)
