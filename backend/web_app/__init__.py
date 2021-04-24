import os

import click
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask.cli import with_appcontext



app = Flask(__name__)
api = Api(app)
app.config.update(
    SECRET_KEY=os.environ['SECRET_KEY'],
    SQLALCHEMY_DATABASE_URI=os.environ['DATABASE_URL'],
    SQLALCHEMY_TRACK_MODIFICATIONS=False
)


from .users.routes import users
app.register_blueprint(users)



from . import dbmodel

@app.cli.command('create-table')
@click.argument('dburi')
def create_db(dburi):
    dbmodel.db.drop_all()
    app.config['SQLALCHEMY_DATABASE_URI'] = dburi
    dbmodel.db.create_all()
    dbmodel.db.session.commit()
