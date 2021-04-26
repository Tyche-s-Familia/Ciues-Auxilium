from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field

from .. import app
from .models import User, Project

app = Flask(__name__)
ma = Marshmallow(app)

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
    
    user_id = ma.auto_field()
    username = ma.auto_field()
    email = ma.auto_field()
    projects = ma.auto_field()
    supporting = ma.auto_field()
    credits = ma.auto_field()
    bio = ma.auto_field()


class ProjectSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Project
    
    project_id = ma.auto_field()
    name = ma.auto_field()
    author_id = ma.auto_field()
    author = ma.auto_field()
    supporters = ma.auto_field()
    description = ma.auto_field()
    credits = ma.auto_field()