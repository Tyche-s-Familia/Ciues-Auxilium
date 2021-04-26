from flask import Blueprint, request, jsonify, make_response, redirect, url_for, request
from flask import session as flask_session
from markupsafe import escape
from flask import current_app

from sqlalchemy import select
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql.elements import True_

from .. import engine
from .models import Project, User
from .schemas import UserSchema, ProjectSchema

users = Blueprint('users', __name__, url_prefix='/users')
projects = Blueprint('projects', __name__, url_prefix='/projects')

Session = sessionmaker(engine)
session = Session()

@users.route('/login')
def index():
    flask_session['user_id'] = 42
    return jsonify({'work': 'in progress'})


@users.route('/add', methods=['POST'])
def add_user():
    username = request.json['username']
    email = request.json['email']
    projects = []
    supporting = []
    bio = None
    credits = 0

    new_user = User(username, email, projects, supporting, bio, credits)
    session.add(new_user)
    session.commit()

    user_schema = UserSchema()
    result = user_schema.dumps(new_user)

    return result

@users.route('/list', methods=['GET'])
def get_users():
    all_users = session.query(User).all()
    user_schema = UserSchema(many=True)
    result = user_schema.dumps(all_users)
    # print(flask_session.get('user_id','not logged in'))
    return result


@users.route('/<int:id>', methods=['GET'])
def get_user(id):
    user = session.query(User).filter(User.user_id == id).first()
    user_schema = UserSchema()
    result = user_schema.dumps(user)
    return result


#DOESN'T WORK YET
@projects.route('/add', methods=['POST'])
def add_project():
    name = request.json['name']
    author_id = request.json['author_id']
    user = session.query(User).filter(User.user_id == author_id).first()
    author = user
    supporters = []
    description = request.json['description']
    credits = 0

    new_project = Project(name, author_id, author, supporters, description, credits)
    session.add(new_project)
    session.commit()

    project_schema = ProjectSchema()
    result = project_schema.dumps(new_project)

    return result

@projects.route('/list', methods=['GET'])
def get_projects():
    all_projects = session.query(Project).all()
    project_schema = ProjectSchema(many=True)
    result = project_schema.dumps(all_projects)

    return result

@projects.route('/<int:id>', methods=['GET'])
def get_project(id):
    project = session.query(Project).filter(Project.project_id == id).first()
    project_schema = ProjectSchema()
    result = project_schema.dumps(project)

    return result