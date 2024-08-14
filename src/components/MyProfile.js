import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './MyProfile.css'; // Ensure to import the correct CSS file

function MyProfile({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch user data from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleProfile = () => {
    // Toggle the visibility of the profile dropdown
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleLogout = () => {
    // Call the logout function passed as a prop
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="profile-container">
      <FontAwesomeIcon
        icon={faUserCircle}
        className="profile-icon"
        onClick={toggleProfile}
      />
      {isOpen && (
        <div className="profile-dropdown">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default MyProfile;
