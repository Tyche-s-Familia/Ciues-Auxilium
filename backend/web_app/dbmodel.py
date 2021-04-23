from flask_sqlalchemy import SQLAlchemy
from flask import current_app as app

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(120), unique=False, nullable=False)
    password_salt = db.Column(db.String(120), unique=False, nullable=False)
    credits = db.Column(db.Integer, unique=True, nullable=False, default=0)
    bio = db.Column(db.Text())


    def __repr__(self):
        return self.username

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.Integer, db.ForeignKey('User.id'))
    supporters = db.relationship('User',backref=db.backref('projects', lazy=True))
