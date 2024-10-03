from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')

data = {}

@app.route('/', methods=['GET'])
def test():
    global data
    if len(data) == 0:
        return "<p>Data not send<p>"
    else:
        return """
            <h1>Data: <h1>
            <p>  username: {username}<p>
            <p>  room_name: {room_name}<p>
            <p>  gender: {gender}<p>
        """.format(username=data['username'], room_name=data['room'], gender=data['gender'])

@app.route('/api/data', methods=['POST'])
def get_data():
    global data
    d = request.get_json()

    data['username'] = d.get('username')
    data['room'] = d.get('room_name')
    data['gender'] = d.get('gender')

    response = {"message": "Data received!", "received_data": data}
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True, port=6969)
