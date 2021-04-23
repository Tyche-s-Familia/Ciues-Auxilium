from flask import Flask

from .users.routes import users
from .admin.routes import admin


def create_app():
    app = Flask(__name__)

    app.register_blueprint(users)
    app.register_blueprint(admin)

    return app
