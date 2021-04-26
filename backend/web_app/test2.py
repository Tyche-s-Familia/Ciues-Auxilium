import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, fields, marshal_with
from flask_marshmallow import Marshmallow



from sqlalchemy import create_engine, Table, Column, Integer, String, Text, ForeignKey, select
from sqlalchemy.orm import backref, base, sessionmaker, relationship, lazyload, joinedload, raiseload, subqueryload
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.declarative import declarative_base

# from . import app
# from .. import engine


Base = declarative_base ()



# association_table_author = Table('author_assosiaction', Base.metadata,
#     Column('user_id', Integer, ForeignKey('user.id')),
#     Column('project_id', Integer, ForeignKey('project.id'))
# )

# association_table_suporter = Table('supporter_assosiaction', Base.metadata,
#     Column('user_id', Integer, ForeignKey('user.id')),
#     Column('project_id', Integer, ForeignKey('project.id'))
# )

class User(Base):
    __tablename__='user'
    user_id = Column(Integer, primary_key=True)
    username = Column(String(80), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    # credits = Column(Integer, default=0)
    # bio = Column(Text(), default=None)
    projects = relationship('Project',lazy='joined', back_populates='author')
    # projects = relationship('Project', backref='author')
    # projects = association_proxy('user_projects')
    # supporting = relationship('Project',secondary=association_table_suporter, back_populates='supporters')

    # def __init__(self, username, email):
    #         self.username = username
    #         self.email = email

class Project(Base):
    __tablename__='project'
    project_id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=True, nullable=False)
    author_id = Column(Integer, ForeignKey('user.user_id',ondelete='CASCADE'))
    author = relationship('User', back_populates='projects')
    # primaryjoin=(author_id == User.user_id)
    # author = relationship('User',primaryjoin=(author_id == User.id) ,backref=backref('user_authored_projects'))
    # supporters = relationship('User',secondary=association_table_suporter, back_populates='supporting')

    # def __init__(self, name):
    #         self.name = name

# class UserAuthoredProject(base):
#     __tablename__ = 'user_authored_projects'
#     author_id = Column(Integer, ForeignKey('user.id'), primary_key=True)
#     project_id = Column(Integer, ForeignKey('project.id'), primary_key=True)

#     user = relationship('User',primaryjoin=(author_id == User.id) ,backref=backref('user_authored_projects'))



engine = create_engine('postgresql://testuser:testingorm@localhost/testorm', echo=True)
# Base.metadata.drop_all(bind=engine)
# Base.metadata.create_all(engine)
# print(engine)

Session = sessionmaker(engine)
session = Session()

# testuser = User(username='Me', email='fake@mail.ru') 
# session.add(testuser)
# session.commit()

# testuser1 = User(username='eeeMe', email='eeefake@mail.ru') 
# session.add(testuser1)
# session.commit()

# testproject = Project(name='myDegeneracy', author=testuser)
# session.add(testproject)
# session.commit()

# testproject1 = Project(name='myEnlightment', author=testuser)
# session.add(testproject1)
# session.commit()

# testproject2 = Project(name='despare', author=testuser1)
# session.add(testproject2)
# session.commit()
# raiseload

# users = session.query(User).options(joinedload(User.projects), raiseload('*')).all()
# for user_obj in users:
#     print(user_obj.user_id)
#     print(user_obj.projects.project_id)

# projects = session.query(User).join(Project).filter(Project.author_id== 2).all()
# for proj in projects:
#     print(proj.user_id)

projects = session.query(Project).join(User).filter(User.user_id== 1).all()
for proj in projects:
    print(proj.name)

# projects = session.query(Project).all()
# for project_obj in projects:
#     print(project_obj.project_id)
#     print(project_obj.name)
#     print(project_obj.author.username)


# .subqueryload(Project.author)
# userptojects = session.execute(select(User).where(User.id == 1).options(lazyload(User.projects)))
# for userp in userptojects.scalars():
#     print(f'{userp.username} {userp}')

# session.close()

# stmt = select(User).where(User.username == 'Me')

# result = session.execute(stmt)
# for user_obj in result.scalars():
#     print(user_obj.email)