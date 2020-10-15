from datetime import timedelta

from airflow import DAG
from airflow.operators.dummy_operator import DummyOperator
from airflow.operators.python_operator import PythonOperator
from airflow.utils.dates import days_ago

from products.metadata.config.categories import PRODUCT_CATEGORIES
from products.metadata.domain.category import Category
from products.metadata.process import ProductMetadataGetter

categories = [
    Category(cat) for cat in PRODUCT_CATEGORIES
]

default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': days_ago(1),
    'email': ['pawel93kocinski@gmail.com'],
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 1,
    'sla': timedelta(hours=2)
}

dag = DAG(
    'product_metadata_scraping_v4',
    default_args=default_args,
    description='A simple tutorial DAG',
    schedule_interval=timedelta(days=1),
    max_active_runs=1,
    concurrency=1
)

start_scrap = DummyOperator(
    task_id="product_metadata_scrap_start",
    dag=dag
)

for category in categories:

    operator = PythonOperator(
        task_id=f"scraping_{category.name}",
        provide_context=True,
        op_kwargs={"category": category, "pages": 1},
        python_callable=ProductMetadataGetter.process,
        dag=dag,
    )
    start_scrap >> operator
