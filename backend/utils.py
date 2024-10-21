import secrets
import string
import random

def generate_room_code(length=6):
    from models import Room

    characters = string.ascii_uppercase + string.digits
    while True:
        room_code = ''.join(random.choices(characters, k=length))
        
        existing_room = Room.query.filter_by(room_code=room_code).first()
        if not existing_room:
            return room_code

def generate_random_id(length=12, model=None):
    characters = string.ascii_letters + string.digits
    while True:
        random_id = ''.join(secrets.choice(characters) for i in range(length))
        
        # Check if this ID already exists in the database
        if model and not model.query.get(random_id):
            return random_id
