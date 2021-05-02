import os
from sqlalchemy import create_engine
from sqlalchemy import Table, Column, Integer, String, Text, ForeignKey, Numeric
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine(os.environ['DATABASE_URL'], echo=True)
# engine = create_engine('postgresql://testuser:testingorm@localhost/testorm', echo=True)
# from .models import User, Project
Base = declarative_base ()

Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(engine)

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
  

    def __init__(self, username, email, projects =[],supporting = [],credits = 0, bio = None):
        self.username = username
        self.email = email
        self.projects = projects
        self.supporting = supporting
        self.credits = credits
        self.bio = bio
        



class Project(Base):
    __tablename__='project'
    project_id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=True, nullable=False)
    author_id = Column(Integer, ForeignKey('user.user_id',ondelete='CASCADE'))
    author = relationship('User', back_populates='projects')
    supporters = relationship('User', secondary=association_table_suporter, back_populates='supporting')
    description = Column(Text(),nullable=False)
    credits = Column(Integer, default=0)

    def __init__(self, name, author_id, author,description, supporters = [], credits = 0 ):
            self.name = name
            self.author_id = author_id
            self.author = author
            self.supporters = supporters
            self.description = description
            self.credits = credits



Session = sessionmaker(engine)
session = Session()



testuser = User(username='Me', email='fake@mail.ru') 
session.add(testuser)
session.commit()

testuser1 = User(username='eeeMe', email='eeefake@mail.ru') 
session.add(testuser1)
session.commit()

testproject = Project(name='myDegeneracy', author_id= 1, author=testuser, description="work work work")
session.add(testproject)
session.commit()

testproject1 = Project(name='myEnlightment', author=testuser, author_id= 1, description="don't work work work")
session.add(testproject1)
session.commit()

testproject2 = Project(name='despare',author_id= 2, author=testuser1,description="never gonna work work work")
session.add(testproject2)
session.commit()
