from openai import OpenAI
from flask import Flask, request, jsonify
import os
import logging
from flask_cors import CORS  # Import CORS
from dotenv import load_dotenv  # Import dotenv to load environment variables

logging.basicConfig(level=logging.INFO)

# Read API key from environment variable
api_key = os.getenv("OPENAI_API_KEY")

# Check if the API key is loaded correctly
if not api_key:
    raise ValueError("API key is missing from environment variables")

client = OpenAI(
  api_key=api_key
)

# Load prompt from file
prompt_file = "prompt.txt"
if os.path.exists(prompt_file):
    with open(prompt_file, "r", encoding="utf-8") as file:
        prompt = file.read()
else:
    raise FileNotFoundError(f"Prompt file '{prompt_file}' not found.")

app = Flask(__name__)

# Enable CORS for the entire application
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    app.logger.info(f"Received data: {user_message}")

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    try:
        response = client.chat.completions.create(
        model="gpt-4o-mini",
        store=True,
        messages=[
            {"role": "developer", "content": prompt},
            {
            "role": "user",
            "content": user_message
            }
        ])

        # Read the chatbot's response
        chatbot_response = response.choices[0].message.content

        return jsonify({"response": chatbot_response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
