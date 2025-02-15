import { useState } from 'react';
import { Card, Button, Input, Typography } from 'antd';
import { marked } from 'marked';
import '../App.css';

const { Text } = Typography;

export default function LanguageLearningApp() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]); // Chat history
  const [loading, setLoading] = useState(false); // Loading state for the button

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Check if the pressed key is "Enter"
      handleSendMessage(); // Call the send message function
    }
  };

  const handleSendMessage = async () => {
    if (!message) return;

    const tempMessage = message;

    setMessage(''); // Reset user message

    // Disable the button while waiting for the backend response
    setLoading(true);

    // Add user message to chat history
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { text: message, type: 'user' },
    ]);

    try {
      // Send message to the backend
      const response = await fetch('http://16.171.21.44:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (data.error) {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { text: data.error, type: 'bot' },
        ]);
      } else {
        // Add chatbot response to chat history
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { text: marked(data.response), type: 'bot' },
        ]);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        {
          text: 'Sorry, something went wrong. Please try again later. Error: {error}',
          type: 'bot',
        },
      ]);
    }

    // Reset user message and enable the button
    setMessage(''); // Reset user message
    setLoading(false); // Re-enable the button
  };

  return (
    <div className="app-container">
      <Card title="Language Learning Chatbot" className="chat-card">
        {/* Chat History Section */}
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${
                message.type === 'user' ? 'user-message' : 'bot-message'
              }`}
              dangerouslySetInnerHTML={{ __html: message.text }} // Render Markdown as HTML
            />
          ))}
        </div>

        {/* Input and Send Button */}
        <div className="input-container">
          <Input
            placeholder="Ask something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="chat-input"
            onKeyDown={handleKeyDown} // Add event handler for key down
          />
          <Button
            type="primary"
            onClick={handleSendMessage}
            className="custom-button"
            loading={loading} // Show a loading spinner on the button
            disabled={loading} // Disable the button while loading
          >
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
}
