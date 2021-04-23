from flask import Blueprint

users = Blueprint('users', __name__, url_prefix='/users')


@users.route("/")
def index():
    return "Index Page"


@users.route('/getdata')
def getdata():
    return{'key': 'value'}


@users.route("/json", methods=["POST"])
def json():
    return "great!", 200
