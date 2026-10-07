import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-key-change-me")
    PMS_MODE = os.getenv("PMS_MODE", "mock")  # mock | opera
    PMS_BASE_URL = os.getenv("PMS_BASE_URL", "")
    PMS_API_KEY = os.getenv("PMS_API_KEY", "")
    PMS_USERNAME = os.getenv("PMS_USERNAME", "")
    PMS_PASSWORD = os.getenv("PMS_PASSWORD", "")
    PAYMENT_PROVIDER = os.getenv("PAYMENT_PROVIDER", "bictorys")
    BICTORYS_API_KEY = os.getenv("BICTORYS_API_KEY", "")
