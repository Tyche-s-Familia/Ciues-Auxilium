# from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, fields, marshal_with


from sqlalchemy import Table, Column, Integer, String, Text, ForeignKey, Numeric
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

import json


Base = declarative_base ()


association_table_suporter = Table('supporter_assosiaction', Base.metadata,
    Column('user_id', Integer, ForeignKey('user.user_id')),
    Column('project_id', Integer, ForeignKey('project.project_id'))
)

class User(Base):
    __tablename__='user'
    user_id = Column(Integer, primary_key=True)
    username = Column(String(80), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    projects = relationship('Project', back_populates='author')
    supporting = relationship('Project', secondary=association_table_suporter,back_populates='supporters')
    credits = Column(Integer, default=0)
    bio = Column(Text(), default=None)
    
    #WORK IN PROGRESS
    # image_url 
    # password_hash = db.Column(db.String(120), unique=False, nullable=False)
    # password_salt = db.Column(db.String(120), unique=False, nullable=False)
    
    # def toJSON(self):
    #     return json.dumps(self, default=lambda o: o.__dict__, 
    #         sort_keys=True, indent=4)

    def __repr__(self):
        return "<{}:{}>"  .format(self.user_id, self.username, self.email)

    # def __init__(self, username, email, projects =[],supporting = [],credits = 0, bio = None):
    #     self.username = username
    #     self.email = email
    #     self.projects = projects
    #     self.supporting = supporting
    #     self.credits = credits
    #     self.bio = bio
        



class Project(Base):
    __tablename__='project'
    project_id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=True, nullable=False)
    author_id = Column(Integer, ForeignKey('user.user_id',ondelete='CASCADE'))
    author = relationship('User', back_populates='projects')
    supporters = relationship('User', secondary=association_table_suporter, back_populates='supporting')
    description = Column(Text(),default=None)
    credits = Column(Integer, default=0)

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)


    def __repr__(self):
        return "<{}:{}>"  .format(self.project_id, self.name)

    # def __init__(self, name, author_id, author,description, supporters = [], credits = 0 ):
    #         self.name = name
    #         self.author_id = author_id
    #         self.author = author
    #         self.supporters = supporters
    #         self.description = description
    #         self.credits = credits
