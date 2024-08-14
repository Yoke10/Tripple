import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [sender, ] = useState('User'); // Default sender

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages', error);
    }
  };

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        sender: sender,
        timestamp: new Date(),
        isReply: false
      };
      try {
        await axios.post('http://localhost:8080/api/messages', newMessage);
        setMessage('');
        fetchMessages();
      } catch (error) {
        console.error('Error sending message', error);
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="header">
        <div className="user-details">
          <div className="user-info">
            <h5>{sender}</h5>
            <p>Active</p>
          </div>
        </div>
      </div>
      <div className="body">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-box ${msg.sender === sender ? 'receiver' : 'sender'}`}>
            <p>{msg.text}</p>
            <span className="status">{new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
