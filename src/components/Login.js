import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginSignup({ onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setLoginFailed(false);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activeTab === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      try {
        const response = await axios.post('http://localhost:8080/api/tripples', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmpassword: formData.confirmPassword,
        });

        if (response.status === 201 || response.status === 200) {
          alert('Signup successful!');
          setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('Signup failed!');
      }
    }

    if (activeTab === 'login') {
      try {
        const response = await axios.post('http://localhost:8080/api/tripples/login', {
          email: formData.email,
          password: formData.password,
        });

        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data));
          alert('Login successful!');
          onLoginSuccess();
          navigate('/');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setLoginFailed(true);
        alert('Login failed! Please check your credentials.');
      }
    }
  };

  return (
    <div className="login-signup-page">
      <div className="content-wrapper">
        <h1 className="company-title">Tripple</h1>
        <div className="tab-container">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabClick('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => handleTabClick('signup')}
          >
            Signup
          </button>
        </div>

        <div className="form-container">
          {activeTab === 'login' && (
            <div className="form-content">
              <h2>Login</h2>
              {!loginFailed ? (
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                    value={formData.password}
                  />
                  <button type="submit" className="submit-btn">Login</button>
                </form>
              ) : (
                <div>Login failed! Please check your credentials.</div>
              )}
              <div className="social-login">
                <a href="/auth/google" className="social-btn google">
                  <div className="logo">
                    <FontAwesomeIcon icon={faGoogle} />
                  </div>
                  Login with Google
                </a>
                <a href="/auth/facebook" className="social-btn facebook">
                  <div className="logo">
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                  Login with Facebook
                </a>
              </div>
            </div>
          )}

          {activeTab === 'signup' && (
            <div className="form-content">
              <h2>Signup</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                  value={formData.name}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  value={formData.password}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  onChange={handleChange}
                  value={formData.confirmPassword}
                />
                <button type="submit" className="submit-btn">Signup</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
