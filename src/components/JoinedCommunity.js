import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './OldJoinedCommunity.css'; // Updated CSS file name

function JoinedCommunity() {
    const [joinedCommunities, setJoinedCommunities] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchJoinedCommunities();
    }, []);

    // Fetch joined communities from the API
    const fetchJoinedCommunities = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/joined-communities');
            setJoinedCommunities(response.data);
        } catch (error) {
            console.error('Error fetching joined communities', error);
            setError('Failed to load communities.');
        }
    };

    // Handle card click to navigate to chat
    const handleCardClick = (communityId) => {
        navigate(`/chat?communityId=${communityId}`);
    };

    return (
        <div className="old-page-container old-trips-page">
            <header className="old-about-us-header">
                <h1>Joined Communities</h1>
            </header>

            <div className="old-trip-cards old-community-cards">
                {error && <p className="old-error-message">{error}</p>}
                {joinedCommunities.length > 0 ? (
                    joinedCommunities.map((community) => (
                        <div
                            className="old-trip-card"
                            key={community.id}
                            onClick={() => handleCardClick(community.id)}
                        >
                            <img src={community.image} alt={`Community ${community.id}`} />
                            <h3>{community.title}</h3>
                            <p>{community.content}</p>
                            <p>Rating: {community.rating}</p>
                        </div>
                    ))
                ) : (
                    <p>No joined communities yet.</p>
                )}
            </div>
        </div>
    );
}

export default JoinedCommunity;
