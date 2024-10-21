import secrets
from flask import Flask, jsonify, request, session
from flask_cors import CORS
# from flask_socketio import SocketIO
from models import db, User, Room
from config import AppConfig

app = Flask(__name__)
app.config.from_object(AppConfig)

db.init_app(app)
CORS(app, supports_credentials=True)

@app.route('/create_room', methods=['POST'])
def create_room():
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
        new_room.user_count += 1
        db.session.commit()
    else:
        new_user = User(username=username, gender=data.get('gender'), room_id=new_room.id)
        db.session.add(new_user)
        new_room.user_count += 1
        db.session.commit()
        session['user_id'] = new_user.id


    response = {"message": "Data received successfully", "room_name": new_room.name, 'room_id': new_room.id}
    return jsonify(response), 200

@app.route('/join_room', methods=['POST'])
def join_room():
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
        user = User.query.get(session['user_id'])
        user.room_id = room.id
        db.session.commit()

    else:
        new_user = User(username=username, gender=gender, room_id=room.id)
        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id


    return jsonify({'Message': 'User successfully added to the room!', 'room_id': room.id}), 200


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=app.config['FLASK_RUN_PORT'])
    # socketio.run(app, debug=True, port=6969)
