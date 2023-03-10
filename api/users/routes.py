from flask import Blueprint, request
from bson import json_util
import json
from db import db

mongoClient = db.get_database()


users_bp = Blueprint(
    'users_bp', __name__,
)


@users_bp.route('', methods=["POST"])
def addUser():
    try:
        username = request.json["username"]
        password = request.json["password"]

        user = {
            'username': username,
            'password': password
        }

        user = mongoClient["users"].insert_one(user)

        return {'message': user.acknowledged, 'status': 200}

    except Exception as Argument:
        print(Argument)
        return Argument


@users_bp.route('', methods=["GET"])
def getUser():
    try:
        username = request.args.to_dict()["username"]
        user = mongoClient["users"].find_one({'username': username})
        print(json.loads(json_util.dumps(user)))
        return {'user': json.loads(json_util.dumps(user)), 'message': 'sucess', 'status': 200}

    except Exception as Argument:
        print(Argument)
        return Argument

@users_bp.route('/login', methods=["POST"])
def loginUser():
    try:
        username = request.json["username"]
        password = request.json["password"]


        user = mongoClient["users"].find_one({
            'username': username,
            'password': password,
            })

        return {'user': json.loads(json_util.dumps(user)), 'message': 'sucess', 'status': 200}

    except Exception as Argument:
        print(Argument)
        return Argument
