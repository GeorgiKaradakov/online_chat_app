from datetime import date
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route('/api/date')
def home():
    return jsonify(
        {
            'date': [
                 date.today().day,
                 date.today().month,
                 date.today().year,
            ]
        }
    )


if __name__ == '__main__':
    app.run(debug=True, port=6969)
