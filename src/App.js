import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { JoinedCommunitiesProvider } from './components/JoinedCommunitiesContext';
import logo from './components/images/logo1.png';
import Home from './components/Home';
import Trips from './components/Trips';
import Gallery from './components/Gallery';
import Booked from './components/Booked';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Community from './components/Community';
import MyProfile from './components/MyProfile';
import JoinedCommunity from './components/JoinedCommunity';
import LoginSignup from './components/Login';
import FAQ from './components/FAQ';
import Chat from './components/Chat';
import Organizerpanel from './components/Organizerpanel';
import AdminPassword from './components/AdminPassword';
import AdminPanel from './components/AdminPanel';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('user'));
  const [userRole, setUserRole] = useState(localStorage.getItem('role'));
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  const handleLoginSuccess = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setUserRole(null);
  };

  const handleAdminAccess = (isGranted) => {
    setIsAdminPanelOpen(isGranted);
  };

  return (
    <JoinedCommunitiesProvider>
      <Router>
        <div className="App">
          {isAuthenticated && (
            <nav>
              <div className="logo-container">
                <img src={logo} alt="Tripple Logo" className="logo" />
              </div>
              <button className="menu-toggle" onClick={toggleMenu}>☰</button>
              <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/trips" onClick={toggleMenu}>Trips</Link></li>
                <li><Link to="/community" onClick={toggleMenu}>Community</Link></li>
                <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
                <li><Link to="/booked" onClick={toggleMenu}>Book Now</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                <li><Link to="/joined-communities" onClick={toggleMenu}>Joined Communities</Link></li>
                {userRole === 'admin' && (
                  <li>
                    <Link to="/admin-password" onClick={toggleMenu}>Admin Panel</Link>
                  </li>
                )}
              </ul>
              <MyProfile onLogout={handleLogout} />
            </nav>
          )}
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/trips" element={isAuthenticated ? <Trips /> : <Navigate to="/login" />} />
            <Route path="/gallery" element={isAuthenticated ? <Gallery /> : <Navigate to="/login" />} />
            <Route path="/booked" element={isAuthenticated ? <Booked /> : <Navigate to="/login" />} />
            <Route path="/about" element={isAuthenticated ? <AboutUs /> : <Navigate to="/login" />} />
            <Route path="/community" element={isAuthenticated ? <Community /> : <Navigate to="/login" />} />
            <Route path="/my-profile" element={isAuthenticated ? <MyProfile onLogout={handleLogout} /> : <Navigate to="/login" />} />
            <Route path="/joined-communities" element={isAuthenticated ? <JoinedCommunity /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginSignup onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/faq" element={isAuthenticated ? <FAQ /> : <Navigate to="/login" />} />
            <Route path="/chat" element={isAuthenticated ? <Chat /> : <Navigate to="/login" />} />
            <Route path="/admin-password" element={isAuthenticated ? <AdminPassword onAccessGranted={handleAdminAccess} /> : <Navigate to="/login" />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            {isAdminPanelOpen && (
              <Route path="/organizer-panel" element={<Organizerpanel />} />
            )}
            {isAdminPanelOpen && (
              <Route path="/dashboard-panel" element={<Dashboard />} />
            )}
          </Routes>
          {isAuthenticated && <Footer />}
        </div>
      </Router>
    </JoinedCommunitiesProvider>
  );
}

export default App;
