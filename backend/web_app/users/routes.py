from web_app.dbmodel import User, db, user_schema, users_schema
from flask import Blueprint, request, jsonify, make_response
from flask import current_app

users = Blueprint('users', __name__, url_prefix='/users')


@users.route('/')
def index():
    # print(current_app.config)
    return jsonify({'work': 'in progress'})


@users.route('/add', methods=['POST'])
def add_user():
    username = request.json['username']
    email = request.json['email']
    bio = request.json['bio']
    credits = 0

    new_user = User(username, email, bio, credits)
    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)

@users.route('/list', methods=['GET'])
def get_users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)

@users.route('/<id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)
