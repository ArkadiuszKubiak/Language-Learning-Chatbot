# Language Learning Application

This project is a **Language Learning Application** that helps users improve their proficiency in a target language. It allows users to practice vocabulary, pronunciation, grammar, and conversation skills with the assistance of an AI-powered chatbot using the OpenAI GPT-4o-mini model.

## Technologies Used

- **Frontend**: React
- **Backend**: Python (Flask)
- **Language Model**: OpenAI GPT-4o-mini
- **Styling**: CSS (with Ant Design for UI components)

## Features

- **Vocabulary Assistance**: Suggests relevant vocabulary words based on the user's level and interests.
- **Pronunciation Feedback**: Provides pronunciation tips for words.
- **Grammar Guidance**: Offers explanations of grammar rules and provides exercises.
- **Conversation Practice**: Engages in structured or casual conversations with the user.
- **Personalized Feedback**: Adapts the responses based on the user’s progress.
- **Exercises & Quizzes**: Provides challenges to reinforce vocabulary and grammar learning.

## Getting Started

Follow the instructions below to set up and run the application locally.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (for running the React frontend)
- [Python](https://www.python.org/) (for running the Flask backend)
- [pip](https://pip.pypa.io/en/stable/) (Python package manager)

You will also need an **OpenAI API key** to interact with the GPT-4o-mini model. You can get your API key from [OpenAI](https://platform.openai.com/signup).

### Setup Backend (Flask + OpenAI)

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Create and activate a Python virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. Install the required Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Adding an Environment Variable (OPENAI_API_KEY) Available on Every System Start

   To set an environment variable that will be available each time your system restarts, follow these steps depending on your operating system. Below are the instruction for **Linux**.

   To make an environment variable available after every system restart, you need to update your shell's configuration file (e.g., `.bashrc`, `.zshrc`, or `.profile`) based on the shell you're using.

   1. Open your terminal and edit the appropriate configuration file:

      - If you're using **bash**, edit the `.bashrc` file:

        ```bash
        nano ~/.bashrc
        ```

      - If you're using **zsh**, edit the `.zshrc` file:
        ```bash
        nano ~/.zshrc
        ```

   2. Add the environment variable at the end of the file. For example:

      ```bash
      export OPENAI_API_KEY="your_api_key_here"
      ```

   3. Save the changes (In `nano`, press `Ctrl+O` and then `Enter`).

   4. Reload the configuration file to apply the changes:

      - For **bash**:

        ```bash
        source ~/.bashrc
        ```

      - For **zsh**:
        ```bash
        source ~/.zshrc
        ```

   5. Verify that the environment variable has been correctly added by running:

      ```bash
      echo $OPENAI_API_KEY
      ```

      The variable should now be available every time you open a new terminal session or restart your system.

   This will make the `OPENAI_API_KEY` available globally for your user, ensuring it is accessible in applications and scripts that require it.

5. Run the Flask backend:

   ```bash
   python app.py
   ```

   Your backend will be running at `http://localhost:5000`.

### Setup Frontend (React)

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the required Node.js dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will be running at `http://localhost:3000`.

### Test the Application

1. Open your browser and navigate to `http://localhost:3000`.
2. You can now interact with the chatbot and start learning a new language!

## Folder Structure

```
.
├── app.py              # Main Flask application
├── .env                # Environment variables (for OpenAI API key)
├── requirements.txt    # Python dependencies
├── frontend/           # React frontend
│   ├── src/            # React source files
│   ├── public/         # Public assets
│   └── package.json    # Node.js dependencies
└── README.md           # Project documentation
```

## Example Interaction

Here’s an example of how the chatbot might interact with the user:

- **User**: "How do you say 'hello' in Polish?"
- **AI**: "In Polish, 'hello' is 'cześć'. It's a common greeting used during the day. Would you like to practice using it in a sentence?"

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions, suggestions, or feedback are always welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Author

- Arkadiusz Kubiak
  https://github.com/ArkadiuszKubiak
  a.j.kubiak93@gmail.com
