import os

import click
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask.cli import with_appcontext

from sqlalchemy import create_engine

from .user.models import Base

app = Flask(__name__)
api = Api(app)
app.config.update(
    SECRET_KEY=os.environ['SECRET_KEY'],
    SQLALCHEMY_DATABASE_URI=os.environ['DATABASE_URL'],
    SQLALCHEMY_TRACK_MODIFICATIONS=False
)

# print(os.environ['DATABASE_URL'])
engine = create_engine(os.environ['DATABASE_URL'], echo=True)




from .user.routes import users
from .user.routes import projects
app.register_blueprint(users)
app.register_blueprint(projects)





@app.cli.command('create-table')
# @click.argument('dburi')
def create_tables():

    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(engine)  


    # user_models.db.drop_all()
    # app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
    # user_models.db.create_all()
    # user_models.db.session.commit()
