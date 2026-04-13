from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({"status": "ok", "message": "SpiderDex API is running"}), 200

@app.route('/api/identify', methods=['POST'])
def identify():
    # Placeholder for the identification logic
    return jsonify({"message": "Identification endpoint ready"}), 200

if __name__ == '__main__':
    app.run(port=5328, debug=True)
