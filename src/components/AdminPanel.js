import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';
import organi from './images/organi.jpg';
import hacker from './images/hacker.jpg';

function LeadPanel() {
    const navigate = useNavigate();

    const handleOrganizerClick = () => {
        navigate('/Organizer-panel'); // Navigates to Organizer Panel
    };

    const handleAdminClick = () => {
        navigate('/dashboard-panel'); // Navigates to Admin Panel
    };

    return (
        <div className="lead-page-container lead-panel-page">
            <header className="lead-panel-header">
                <h1>Lead Panels</h1>
            </header>

            <div className="lead-panel-cards">
                <div className="lead-panel-card" onClick={handleOrganizerClick}>
                    <img src={organi} alt="Organizer Panel" />
                    <h3>Organizer Panel</h3>
                    <p>Manage and organize chats ease.</p>
                </div>

                <div className="lead-panel-card" onClick={handleAdminClick}>
                    <img src={hacker} alt="Admin Panel" />
                    <h3>Admin Panel</h3>
                    <p>Control and oversee the entire system.</p>
                </div>
            </div>
        </div>
    );
}

export default LeadPanel;
