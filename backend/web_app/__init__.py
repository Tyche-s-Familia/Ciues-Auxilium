import os

import click
import psycopg2 as postgres
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api

from . import config
from . import dbmodel
from .users.routes import users


def create_app():
    app = Flask(__name__)
    api = Api(app)
    app.config.update(
        SECRET_KEY = os.environ['SECRET_KEY'],
        SQLALCHEMY_DATABASE_URI=os.environ['DATABASE_URL']
    )
    # db = SQLAlchemy(app)
    @app.cli.command('create-db')
    @click.argument('dbname')
    def create_db(dbname):
        dbmodel.create_all()

    app.register_blueprint(users)
    # app.register_blueprint(admin)
    return app

# from web_app import routes
