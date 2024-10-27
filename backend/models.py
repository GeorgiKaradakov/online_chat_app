import enum
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum
from utils import generate_random_id, generate_room_code

db = SQLAlchemy()

class GenderEnum(enum.Enum):
    male = 'male'
    female = 'female'


class User(db.Model):
    id = db.Column(db.String(12), primary_key=True, default=lambda: generate_random_id(12, User), unique=True, nullable=False)
    username = db.Column(db.String(50), nullable=False)
    gender = db.Column(Enum(GenderEnum), nullable=False)
    room_id = db.Column(db.String(12), db.ForeignKey('room.id'), nullable=True)
    is_connected = db.Column(db.Boolean, nullable=False)

class Room(db.Model):
    id = db.Column(db.String(12), primary_key=True, default=lambda: generate_random_id(12, Room), unique=True, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    room_code = db.Column(db.String(6), default=lambda: generate_room_code(), unique=True)
    user_count = db.Column(db.Integer, default=0)
    messages = db.relationship('Message', backref='room', lazy=True)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.String(12), db.ForeignKey('user.id'), nullable=True)
    room_id = db.Column(db.String(12), db.ForeignKey('room.id'))
