from flask import Blueprint, request, jsonify, make_response
from flask import current_app

users = Blueprint('users', __name__, url_prefix='/users')


@users.route("/")
def index():
    print(current_app.config)
    return "Index Page"


@users.route('/getdata')
def getdata():
    return{'key': 'value'}


@users.route("/json", methods=["POST"])
def json():

    if request.is_json:
        req = request.get_json()

        response = {
            "msg": "ttttt",
            "name": req.get("name")
        }

        res = make_response(jsonify(response), 200)

        return res
    else:
        res = make_response(jsonify({"msg": "no json"}), 200)

        return res
