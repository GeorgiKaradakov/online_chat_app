import secrets
import redis

class AppConfig:
    # Flask settings
    SECRET_KEY = secrets.token_hex(32)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///chat.db'

    SESSION_TYPE = 'redis'
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_COOKIE_SECURE = True  # False for HTTP; set to True for HTTPS in production
    SESSION_COOKIE_SAMESITE = 'None'
    SESSION_COOKIE_HTTPONLY = True
    SESSION_REDIS = redis.StrictRedis(host='localhost', port=6379, db=0)


    FLASK_RUN_PORT = 6969  # The port the Flask app will run on


