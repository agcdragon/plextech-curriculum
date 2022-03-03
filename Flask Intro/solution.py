from flask import Flask, request

app = Flask(__name__)
@app.route('/hello')
def index():
    args = request.args
    if 'name' in args:
        name = args['name']
        return f"Hello {name}", 200

@app.route("/hello-json")
def hello_json():
    return {"text": "Hello World from Dictionary"}, 200

@app.route("/hello-html")
def hello_html():
    return "<h1>Hello World</h1><p>Subtext</p>", 200

@app.route("/hello-html-error")
def hello_html_error():
    return "<h1>Hello World</h1><p>Subtext</p>", 404

@app.route('/hello/<name>')
def whatevername(name):
   return 'Hello ' + str(name), 200

@app.route('/hello/<name>/change/<cost>')
def change(name, cost):
    return f'Hello {name}, your change is {10-int(cost)}', 200

@app.route('/reflect', methods = ['POST'])
def reflect():
    return f"Hello {request.data.decode()}"

@app.route('/reflect/plex', methods=["POST"])
def json_payload():
    data = request.json
    out = {}
    for d in data:
        if type(data[d]) == str:
            out["plex_" + d] = "plex_" + data[d]
        else:
            out["plex_" + d] = data[d]
    return out

@app.route('reflect/plex/form')
def form_payload():
    data = request.form

app.run(host='0.0.0.0', port=81, debug=True)