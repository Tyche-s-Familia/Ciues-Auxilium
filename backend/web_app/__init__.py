import os

import click
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask.cli import with_appcontext

# from . import dbmodel
from .users.routes import users


app = Flask(__name__)
api = Api(app)
app.config.update(
    SECRET_KEY = os.environ['SECRET_KEY'],
    SQLALCHEMY_DATABASE_URI=os.environ['DATABASE_URL']
)

app.register_blueprint(users)
 

@app.cli.command('create-table')
@click.argument('dburi')
@with_appcontext
def create_db(dburi):
    app.config['SQLALCHEMY_DATABASE_URI'] = dburi
    from . import dbmodel
    dbmodel.create_all()


# from web_app import routes
