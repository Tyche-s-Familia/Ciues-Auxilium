from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, fields, marshal_with


from sqlalchemy import Table, Column, Integer, String, Text, ForeignKey, log
from sqlalchemy.orm import base, relationship
from sqlalchemy.ext.declarative import declarative_base



# from .. import engine

# print(engine)
# Session = sessionmaker(engine)
# session = Session()

Base = declarative_base ()


class User(Base):
    __tablename__='user'
    user_id = Column(Integer, primary_key=True)
    username = Column(String(80), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    projects = relationship('Project',lazy='joined', back_populates='author')
    # supporting = relationship('Project',secondary=association_table_suporter, back_populates='supporters')


    # credits = Column(Integer, default=0)
    # bio = Column(Text(), default=None)

    # password_hash = db.Column(db.String(120), unique=False, nullable=False)
    # password_salt = db.Column(db.String(120), unique=False, nullable=False)
  

    def __init__(self, user_id, username, email, projects =[] ):
        self.user_id = user_id
        self.username = username
        self.email = email
        self.projects = projects

        # self.bio = bio
        # self.credits = credits



class Project(Base):
    __tablename__='project'
    project_id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=True, nullable=False)
    author_id = Column(Integer, ForeignKey('user.user_id',ondelete='CASCADE'))
    author = relationship('User', back_populates='projects')
    # supporters = relationship('User',secondary=association_table_suporter, back_populates='supporting')

    # def __init__(self, author, supporters, bio, credits ):
    #         self.username = username
    #         self.email = email
    #         self.bio = bio
    #         self.credits = credits


# class UserSchema(ma.Schema):
#     class Meta:
#         fields = ('id','username','email','projects')



# user_schema = UserSchema()
# users_schema = UserSchema(many=True)
