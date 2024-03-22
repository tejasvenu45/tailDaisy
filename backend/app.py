from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/profile')
def profile():
    data = {"message":"My name is Tejas"}
    return data

if __name__ == "__main__":
    app.run(debug=True)
    
