from . import app
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, fields, marshal_with
from flask_marshmallow import Marshmallow
# from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

# app = Flask(__name__)

db = SQLAlchemy(app)
ma = Marshmallow(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    # password_hash = db.Column(db.String(120), unique=False, nullable=False)
    # password_salt = db.Column(db.String(120), unique=False, nullable=False)
    credits = db.Column(db.Integer, unique=False, nullable=False, default=0)
    bio = db.Column(db.Text())

    def __init__(self, username, email, bio, credits ):
        self.username = username
        self.email = email
        self.bio = bio
        self.credits = credits


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.Integer, db.ForeignKey(User.id))
    supporters = db.relationship(
        'User', backref=db.backref('projects', lazy=True))



class UserSchema(ma.Schema):
    class Meta:
        fields = ('id','username','email','credits','bio')

user_schema = UserSchema()
users_schema = UserSchema(many=True)