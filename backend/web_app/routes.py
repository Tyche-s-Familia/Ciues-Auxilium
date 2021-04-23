from web_app import app

@app.route("/")
def index():
    print (app.config)
    return "based"