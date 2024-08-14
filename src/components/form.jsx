import React, { useState, useEffect } from 'react';
import './PopupForm.css'; // Import the CSS file for styles

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay" role="dialog" aria-labelledby="popup-title" aria-modal="true">
          <div className="popup-content">
            <h2 id="popup-title" className="popup-title">Please Fill the Details to Proceed</h2>
            <form className="popup-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" className="form-input" />
              </div>
              <div className="form-group">
                <button className="submit-btn" type="submit">Submit</button>
              </div>
            </form>
            <button onClick={handleClose} className="close-button" aria-label="Close Popup">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
