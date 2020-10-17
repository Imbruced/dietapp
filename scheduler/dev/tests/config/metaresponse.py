from os import path

data_path = path.abspath(path.dirname(__file__))


def load_config_file(file_name: str, cwd=data_path) -> str:

    with open(path.join(cwd, file_name)) as file:
        lines = file.readlines()

    return "".join(lines)


def load_meta_data_page(page: int):
    return load_config_file(f"resources/metadata/pages/{page}.html")
