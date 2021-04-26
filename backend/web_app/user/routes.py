from flask import Blueprint, request, jsonify, make_response
from flask import current_app

from sqlalchemy.orm import sessionmaker, lazyload, joinedload, raiseload, subqueryload
from sqlalchemy.sql.elements import True_

from .. import engine
from .models import Project, User
from .schemas import UserSchema, ProjectSchema

users = Blueprint('users', __name__, url_prefix='/users')
projects = Blueprint('projects', __name__, url_prefix='/projects')

Session = sessionmaker(engine)
session = Session()

@users.route('/')
def index():
    # print(current_app.config)
    return jsonify({'work': 'in progress'})


@users.route('/add', methods=['POST'])
def add_user():
    username = request.json['username']
    email = request.json['email']
    # bio = None
    # credits = 0
    projects = []

    new_user = User(username, email, projects)
    session.add(new_user)
    session.commit()

    return UserSchema.jsonify(new_user)

@users.route('/list', methods=['GET'])
def get_users():
    all_users = session.query(User).all()
    user_schema = UserSchema(many=True)
    result = user_schema.dump(all_users)

    return jsonify(result)



# @users.route('/<id>', methods=['GET'])
# def get_user(id):
#     user = User.query.get(id)
#     return user_schema.jsonify(user)

@projects.route('/list', methods=['GET'])
def get_projects():
    all_projects = session.query(Project).all()
    project_schema = ProjectSchema(many=True)
    result = project_schema.dump(all_projects)

    return jsonify(result)
