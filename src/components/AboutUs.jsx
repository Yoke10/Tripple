import React, { useState } from 'react';
import './AboutUs.css'; // Import the CSS file for styling
import team from './images/i10.jpg';
import team1 from './images/logo.jpg';

const AboutUs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
    togglePopup(); // Close popup after submission
  };

  return (
    <div className="about-us-page">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Get to know more about our mission and team.</p>
      </header>

      <section className='whatweare-section'>
        <div className='whatweare-section-inner'>
        <div className='whatweare-section-content '>
          <h2>What Are We </h2>
          <p>We are a dynamic travel platform dedicated to making travel accessible, enjoyable, and memorable for everyone. By connecting travelers with local guides and organizers, we provide authentic experiences and seamless trips. Our team of passionate travel enthusiasts and professionals works tirelessly to offer the best trips and services, ensuring every journey is unique and enriching. Through our commitment to quality and sustainability, we aim to create travel experiences that leave a lasting positive impact on both travelers and the communities they visit.</p>
        </div>
        </div>
       
      </section>

      <section className="about-us-section">
        <div className="about-us-content">
          <div className="about-us-image-container">
            <img src={team} alt="Our Team" className="about-us-image" />
          </div>
          <div className="about-us-text">
            <h2>Our Mission</h2>
            <p>
              We are dedicated to making travel accessible, enjoyable, and memorable for everyone. Our platform connects travelers with local guides and organizers to provide authentic experiences and seamless trips.
            </p>
            <p>
              Our team consists of passionate travel enthusiasts and professionals who work tirelessly to bring you the best trips and services.
            </p>
            <a href="#contact" className="know-more-link" onClick={togglePopup}>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-us-content">
         
          <div className="about-us-text">
            <h2>Our Vision</h2>
            <p>
            To become the leading platform for transformative travel experiences, where every journey fosters deeper connections, cultural understanding, and unforgettable memories. We aim to revolutionize the way people explore the world by empowering local guides and organizers, ensuring that every traveler experiences the true essence of their destinations in a sustainable and meaningful way.
            </p>
            
            <a href="#contact" className="know-more-link" onClick={togglePopup}>
              Contact Us
            </a>
          </div>
          <div className="about-us-image-container">
            <img src={team1} alt="Our Team" className="about-us-image" />
          </div>
        </div>
      </section>

      <section className="about-us-stats">
        <div>
          <h3>200+</h3>
          <p>Destinations</p>
        </div>
        <div>
          <h3>5000+</h3>
          <p>Happy Travelers</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Local Guides</p>
        </div>
        <div>
          <h3>100+</h3>
          <p>Organized Trips</p>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="popup-close" onClick={togglePopup}>×</button>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required />

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
