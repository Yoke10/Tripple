import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPassword.css';

const AdminPassword = ({ onAccessGranted }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Define the correct password (ideally encrypted or stored securely)
  const correctPassword = "admin123"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      onAccessGranted(true);
      navigate('/admin-panel');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="admin-password">
      <h2>Admin Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
    
  );
};

export default AdminPassword;
