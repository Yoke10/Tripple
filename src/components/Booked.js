import React, { useState } from 'react';
import axios from 'axios';
import './Booked.css'; // Import the CSS file

const Booked = () => {
  const [formData, setFormData] = useState({
    riderName: '',
    riderAge: '',
    riderGender: '',
    riderExperience: '',
    riderContact: '',
    riderEmail: '',
    tourName: '',
    accommodationType: '',
    numRiders: '',
    tripType: '',
    bikeType: '',
    bikeModel: '',
    authentication: '',
    license: null // For file input, initialize as null
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/extended-tripples', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('Form submitted successfully');
        // Show the popup
        setIsPopupVisible(true);
        // Clear form data
        setFormData({
          riderName: '',
          riderAge: '',
          riderGender: '',
          riderExperience: '',
          riderContact: '',
          riderEmail: '',
          tourName: '',
          accommodationType: '',
          numRiders: '',
          tripType: '',
          bikeType: '',
          bikeModel: '',
          authentication: '',
          license: null // Reset file input
        });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className='form-page'>
      <div className="form-container">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            {/* Riders Information */}
            <fieldset className="form-section">
              <legend>Riders Information</legend>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="riderName">Name:</label>
                  <input
                    type="text"
                    id="riderName"
                    name="riderName"
                    value={formData.riderName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="riderAge">Age:</label>
                  <input
                    type="number"
                    id="riderAge"
                    name="riderAge"
                    value={formData.riderAge}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="riderGender">Gender:</label>
                  <select
                    id="riderGender"
                    name="riderGender"
                    value={formData.riderGender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="riderExperience">Riders Experience:</label>
                  <select
                    id="riderExperience"
                    name="riderExperience"
                    value={formData.riderExperience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Experienced">Experienced</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="riderContact">Contact Number:</label>
                  <input
                    type="tel"
                    id="riderContact"
                    name="riderContact"
                    value={formData.riderContact}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="riderEmail">Email:</label>
                  <input
                    type="email"
                    id="riderEmail"
                    name="riderEmail"
                    value={formData.riderEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </fieldset>

            {/* Trip Details */}
            <fieldset className="form-section">
              <legend>Trip Details</legend>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="tourName">Tour Name:</label>
                  <input
                    type="text"
                    id="tourName"
                    name="tourName"
                    value={formData.tourName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="accommodationType">Accommodation Type:</label>
                  <select
                    id="accommodationType"
                    name="accommodationType"
                    value={formData.accommodationType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Twin">Twin</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="numRiders">Number of Riders:</label>
                  <input
                    type="number"
                    id="numRiders"
                    name="numRiders"
                    value={formData.numRiders}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tripType">Trip Type:</label>
                  <select
                    id="tripType"
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Customized">Customized</option>
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Bikes Information */}
            <fieldset className="form-section">
              <legend>Bikes Information</legend>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="bikeType">Bike Type:</label>
                  <input
                    type="text"
                    id="bikeType"
                    name="bikeType"
                    value={formData.bikeType}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bikeModel">Bike Model:</label>
                  <input
                    type="text"
                    id="bikeModel"
                    name="bikeModel"
                    value={formData.bikeModel}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </fieldset>

            {/* Footer with Submit Button */}
            <div className="form-footer">
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>

          {/* Popup for Submission Success */}
          {isPopupVisible && (
            <div className="popup-overlay">
              <div className="popup">
                <h2>Success!</h2>
                <p>Your form has been submitted successfully.</p>
                <button onClick={closePopup} className="close-button">Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booked;
