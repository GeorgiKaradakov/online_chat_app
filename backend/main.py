from flask import Flask, jsonify, request, session
from flask_cors import CORS
from flask_session import Session
from flask_socketio import SocketIO, emit,  join_room
from models import Message, db, User, Room
from config import AppConfig
from queries import get_gender, get_room, get_room_code, get_room_id, get_room_name, get_user, get_username

app = Flask(__name__)
app.config.from_object(AppConfig)
socket = SocketIO(app, cors_allowed_origins='http://localhost:5173')

Session(app)

db.init_app(app)
CORS(app, supports_credentials=True, origins=['http://localhost:5173'])


@app.route('/create_room', methods=['POST'])
def create_chat_room():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    username = data.get('username')

    new_room = Room(name=data.get('room_name'))
    db.session.add(new_room)
    db.session.commit()

    if 'user_id' in session:
        user = User.query.filter_by(id=session['user_id']).first()
        user.room_id = new_room.id
        if user.username != username:
            user.username = username
        new_room.user_count += 1
        db.session.commit()
    else:
        new_user = User(username=username, gender=data.get('gender'), room_id=new_room.id, is_connected=False)
        db.session.add(new_user)
        new_room.user_count += 1
        db.session.commit()
        session['user_id'] = new_user.id

    response = {"message": "Data received successfully", 'room_id': new_room.id}
    return jsonify(response), 200

@app.route('/join_room', methods=['POST'])
def join_chat_room():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    username = data.get('username')
    gender = data.get('gender')
    room_code = data.get('room_code')

    room = Room.query.filter_by(room_code=room_code).first()

    if not room:
        return jsonify({'Error', 'Room does not exist!'}), 404

    room.user_count += 1
    db.session.commit()

    if 'user_id' in session:
        user = User.query.filter_by(id=session['user_id']).first()
        user.room_id = room.id
        if user.username != username:
            user.username = username
        db.session.commit()

    else:
        new_user = User(username=username, gender=gender, room_id=room.id, is_connected=False)
        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id

    return jsonify({'Message': 'User successfully added to the room!', 'room_id': room.id}), 200


@app.route('/is_authorized', methods=['GET'])
def is_authorized():
    return jsonify({
        'is_authorized': True if session else False
    })

@socket.on('connect')
def user_join():
    if 'user_id' not in session:
        emit('auth_error', room=request.sid)
        return

    user_id = session['user_id']
    room_name = get_room_name(user_id)
    room_code = get_room_code(user_id)
    user = get_user(user_id)

    if not user.is_connected:
        join_room(room_code)
        user.is_connected = True

        new_message = Message(content=f'{get_username(user_id)} has joined the chat room! :)', user_id = None, room_id=get_room_id(room_code))
        db.session.add(new_message)
        db.session.commit()

    emit('join_success', {'roomName': room_name}, room=request.sid)
    emit('message_received', room=room_code)


@socket.on('send_message')
def send_message(data):
    if 'user_id' not in session:
        socket.emit('auth_error')
        return

    user_id = session['user_id']
    room_code = get_room_code(user_id)
    room_id = get_room_id(room_code)

    new_message = Message(content=data.get('message'), user_id=user_id, room_id=room_id)
    db.session.add(new_message)
    db.session.commit()

    socket.emit('message_received', room=room_code)

@socket.on('collect_messages')
def add_messages():
    if 'user_id' not in session:
        socket.emit('auth_error')
        return

    messages = []
    room_code = get_room_code(session['user_id'])
    room = get_room(room_code)

    for message in room.messages:
        user_id = message.user_id
        messages.append({
            'username': get_username(user_id) if user_id else '',
            'msg': message.content,
            'gender': get_gender(user_id) if user_id else '',
            'isSender': user_id == session['user_id'] if user_id else False,
            'fromServer': True if not user_id else False
        })

    emit('get_messages', {'messages': messages}, room=request.sid)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    socket.run(app, debug=True, port=app.config['FLASK_RUN_PORT'])
