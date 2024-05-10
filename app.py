from flask import Flask, request, jsonify


app = Flask(__name__)


@app.route('/home')
def hello():
    data = {"data":'hello'}
    return jsonify(data)