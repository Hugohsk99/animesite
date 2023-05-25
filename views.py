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

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/cadastro')
def cadastro():
    return render_template('cadastro.html')

@app.route('/username')
def username():
    return render_template('username.html')

