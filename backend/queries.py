from models import User, Message, Room

def get_room_name(user_id):
    user = User.query.filter_by(id = user_id).first()
    return Room.query.filter_by(id = user.room_id).first().name

def get_room_code(user_id):
    user = User.query.filter_by(id = user_id).first()
    return Room.query.filter_by(id = user.room_id).first().room_code

def get_username(user_id):
    return User.query.filter_by(id = user_id).first().username

def get_gender(user_id):
    return User.query.filter_by(id = user_id).first().gender

def get_room_id(room_code):
    return Room.query.filter_by(room_code = room_code).first().id
