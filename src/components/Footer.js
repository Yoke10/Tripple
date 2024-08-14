import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5 className="footer-title">About Us</h5>
          <p className="footer-description">
            Through our commitment to quality and sustainability, we aim to create travel experiences that leave a lasting positive impact on both travelers and the communities they visit.
          </p>
        </div>
        <div className="footer-section">
          <h5 className="footer-title">Follow Us</h5>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h5 className="footer-title">Contact Us</h5>
          <div className="contact-info">
            <p><FaPhone className="contact-icon" /> (123) 456-7890</p>
            <p><FaEnvelope className="contact-icon" /> contact@tripples.com</p>
            <p><FaMapMarkerAlt className="contact-icon" /> Tripple anywhere anytime</p>
          </div>
        </div>
        <div className="footer-section">
          <h5 className="footer-title">Quick Links</h5>
          <ul className="quick-links">
            <li><a href="/" className="quick-link">Home</a></li>
            <li><a href="/about" className="quick-link">About Us</a></li>
            <li><a href="/community" className="quick-link">Community</a></li>
            <li><a href="/faq" className="quick-link">FAQ</a></li>
            <li><a href="/admin-password" className="quick-link">Admin</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        &copy; 2024 Tripples. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
