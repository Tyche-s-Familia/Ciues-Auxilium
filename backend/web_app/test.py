import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, fields, marshal_with
from flask_marshmallow import Marshmallow



from sqlalchemy import create_engine, Table, Column, Integer, String, Text, ForeignKey, select
from sqlalchemy.orm import sessionmaker, relationship, lazyload, joinedload, subqueryload
from sqlalchemy.ext.declarative import declarative_base

# from . import app
# from .. import engine


Base = declarative_base ()



association_table_author = Table('author_assosiaction', Base.metadata,
    Column('user_id', Integer, ForeignKey('user.id')),
    Column('project_id', Integer, ForeignKey('project.id'))
)

association_table_suporter = Table('supporter_assosiaction', Base.metadata,
    Column('user_id', Integer, ForeignKey('user.id')),
    Column('project_id', Integer, ForeignKey('project.id'))
)

class User(Base):
    __tablename__='user'
    id = Column(Integer, primary_key=True)
    username = Column(String(80), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    credits = Column(Integer, default=0)
    bio = Column(Text(), default=None)
    projects = relationship('Project',secondary=association_table_author, back_populates='author',uselist=True)
    supporting = relationship('Project',secondary=association_table_suporter, back_populates='supporters')


class Project(Base):
    __tablename__='project'
    id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=True, nullable=False)
    # author_id = Column(Integer, ForeignKey('User.id',ondelete='CASCADE'))
    author = relationship('User',secondary=association_table_author, back_populates='projects',lazy="joined", innerjoin=True)
    supporters = relationship('User',secondary=association_table_suporter, back_populates='supporting')



engine = create_engine('postgresql://testuser:testingorm@localhost/testorm', echo=True)
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

# testproject = Project(name='myDegeneracy', author=[testuser])
# session.add(testproject)
# session.commit()

# testproject1 = Project(name='myEnlightment', author=[testuser])
# session.add(testproject1)
# session.commit()

# testproject2 = Project(name='despare', author=[testuser1])
# session.add(testproject2)
# session.commit()

# users = session.query(User).all()
# for user_obj in users:
#     print(f'{user_obj.projects} {user_obj.id}')

projects = session.query(Project).all()
for project_obj in projects:
    print(project_obj.author)


# .subqueryload(Project.author)
# userptojects = session.execute(select(User).where(User.id == 1).options(lazyload(User.projects)))
# for userp in userptojects.scalars():
#     print(f'{userp.username} {userp}')

# session.close()

# stmt = select(User).where(User.username == 'Me')

# result = session.execute(stmt)
# for user_obj in result.scalars():
#     print(user_obj.email)