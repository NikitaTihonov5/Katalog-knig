from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from config import PG_USER, PG_PASS, PG_HOST, PG_PORT, PG_NAME

DATABASE_URL = f'postgresql+psycopg2://{PG_USER}:{PG_PASS}@{PG_HOST}:{PG_PORT}/{PG_NAME}'

Base = declarative_base()
engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autoflush=True, bind=engine)
db=SessionLocal()