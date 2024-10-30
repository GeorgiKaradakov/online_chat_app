# import os
# from dotenv import load_dotenv

import secrets
import redis

# load_dotenv()


class AppConfig:
    # SECRET_KEY = os.getenv("SECRET_KEY")
    SECRET_KEY = secrets.token_hex(32)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = "sqlite:///chat.db"

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_SAMESITE = "Lax"
    SESSION_COOKIE_HTTPONLY = True
    SESSION_REDIS = redis.StrictRedis(host="localhost", port=6379, db=0)

    FLASK_RUN_PORT = 6969
