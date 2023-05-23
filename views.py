import os
from flask import Flask, send_from_directory, render_template

app = Flask(__name__, static_folder='static', static_url_path='/static')

db_config = {
    'host': 'localhost',
    'user': 'mysql',
    'password': '123456',
    'db': 'anime_date'
}

@app.route('/')
def index():
    return render_template('index.html')

def login():
    return render_template('login.html')

def cadastro():
    return render_template('cadastro.html')

def username():
    return render_template('username.html')

@app.route('/static/images/<path:path>')
def serve_static(path):
    return send_from_directory('static/images', path)

