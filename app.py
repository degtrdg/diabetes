from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/result', methods=['GET', 'POST'])
def welcome():
    return request.data

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)