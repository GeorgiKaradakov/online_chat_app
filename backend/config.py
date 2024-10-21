import secrets
import redis

class AppConfig:
    # Flask settings
    SECRET_KEY = secrets.token_hex(32)
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_COOKIE_SECURE = True  # For HTTPS; in development, this can be set to False
    SESSION_COOKIE_SAMESITE = "None"  # Allow cross-site cookies for session
    SESSION_COOKIE_HTTPONLY = True  # Prevent JavaScript from accessing session cookie

    SQLALCHEMY_DATABASE_URI = 'sqlite:///chat.db'
    SQLALCHEMY_ECHO = True

    SESSION_TYPE = 'redis'  # Use Redis for session management
    SESSION_REDIS = redis.StrictRedis(host='localhost', port=6379, db=0)  # Redis connection config

    FLASK_RUN_PORT = 6969  # The port the Flask app will run on
