import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading

  // Handle sending message
  const sendMessage = async () => {
    if (!input.trim() || loading) return; // Prevent sending if input is empty or already loading

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]); // Add user message to chat
    setLoading(true); // Set loading state to true

    try {
      // Send request to the backend
      const response = await axios.post('http://localhost:8080/api/ai/chat', { query: input });
      const botMessage = { sender: 'bot', text: response.data };

      setMessages((prevMessages) => [...prevMessages, botMessage]); // Add bot response to chat
    } catch (error) {
      console.error('Error communicating with the chatbot:', error);
      const errorMessage = { sender: 'bot', text: 'Error communicating with the server.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false); // Reset loading state after the request completes
    }

    setInput('');
  };

  // Handle pressing Enter to send message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">AI Customer Service</h2>
      <div style={styles.chatContainer}>
        <div style={styles.chatWindow}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`alert ${message.sender === 'user' ? 'alert-primary text-end' : 'alert-secondary text-start'}`}
              role="alert"
              style={message.sender === 'user' ? styles.userMessage : styles.botMessage}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-group mt-3" style={styles.inputArea}>
          <input
            type="text"
            className="form-control rounded-pill"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            style={styles.input}
          />
          <button
            className="btn btn-primary ms-2 rounded-pill"
            onClick={sendMessage}
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Sending...' : 'Send'} {/* Change button text when loading */}
          </button>
        </div>
      </div>
    </div>
  );
};

// Styling adjustments for specific message alignments and container layout
const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #dee2e6',
    borderRadius: '0.25rem',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
    margin: '0 auto',
  },
  chatWindow: {
    width: '100%',
    height: '400px',
    overflowY: 'scroll',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #dee2e6',
    borderRadius: '0.25rem',
    backgroundColor: '#f8f9fa',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  botMessage: {
    alignSelf: 'flex-start',
  },
  inputArea: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    borderRadius: '20px', // Makes the input field rounded
    padding: '10px 15px',
  },
};

export default ChatBot;
