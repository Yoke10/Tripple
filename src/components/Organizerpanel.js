import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Organizerpanel.css';

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState('');
  const [editText, setEditText] = useState('');
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [editingMessageId, setEditingMessageId] = useState(null);

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

  const sendReply = async () => {
    if (reply.trim() && selectedMessageId) {
      const message = {
        text: reply,
        sender: 'Organizer', // Admin sender
        timestamp: new Date(),
        isReply: true
      };
      try {
        await axios.post('http://localhost:8080/api/messages/reply', message);
        setReply('');
        setSelectedMessageId(null); // Close reply section after sending
        fetchMessages();
      } catch (error) {
        console.error('Error sending reply', error);
      }
    }
  };

  const editMessage = async () => {
    if (editText.trim() && editingMessageId) {
      const updatedMessage = {
        text: editText,
        sender: 'Organizer', // Admin sender
        isReply: false
      };
      try {
        await axios.put(`http://localhost:8080/api/messages/${editingMessageId}`, updatedMessage);
        setEditText('');
        setEditingMessageId(null); // Close edit section after updating
        fetchMessages();
      } catch (error) {
        console.error('Error editing message', error);
      }
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/messages/${id}`);
      fetchMessages();
    } catch (error) {
      console.error('Error deleting message', error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Organizer Panel</h2>
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.isReply ? 'reply' : ''}`}>
            <p><strong>{message.sender}</strong>: {message.text}</p>
            <div className="message-actions">
              {!message.isReply && (
                <>
                  <button onClick={() => setSelectedMessageId(message.id)}>Reply</button>
                  <button onClick={() => {
                    setEditingMessageId(message.id);
                    setEditText(message.text);
                  }}>Edit</button>
                  <button onClick={() => deleteMessage(message.id)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedMessageId && (
        <div className="reply-section">
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type your reply..."
          />
          <button onClick={sendReply}>Send Reply</button>
        </div>
      )}
      {editingMessageId && (
        <div className="edit-section">
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Edit your message..."
          />
          <button onClick={editMessage}>Update Message</button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
