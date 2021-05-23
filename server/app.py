from flask import Flask, request, jsonify, send_file
from ModelHandler import ModelHandler

app = Flask(__name__)

@app.route('/handlenews', methods=['POST'])
def handlenews():
    input_news = request.json['data']
    model_handler = ModelHandler(input_news)

    model_handler.load_model()
    pred = model_handler.get_prediction()
    prob = model_handler.get_probability()

    result = 'Förutsägelse: {} | Sannolikhet: {}'.format(pred, prob)

    return jsonify({"data": result})

@app.route('/download', methods=['GET'])
def download():
    return send_file('fakenews.pdf', as_attachment=True)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3001)
    