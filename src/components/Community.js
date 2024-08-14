import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewCommunity.css'; // Updated the CSS import
import RaceBike from './images/Race Bike.jpg';
import ReBike from './images/Re Bike.jpg';
import RxBike from './images/Rx bikes.jpg';
import DirtBike from './images/dirt-bikes.jpg';
import axios from 'axios';
import { useJoinedCommunities } from './JoinedCommunitiesContext';

function Community() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const { addCommunity } = useJoinedCommunities();
    const navigate = useNavigate();

    const communities = [
        {
            id: 1,
            image: RxBike,
            title: "Rx Bikes",
            content: "Hey RX Bikers, what upcoming rides or events are you excited about? Share your plans and let’s gear up for some thrilling adventures together!",
            rating: "★★★★☆"
        },
        {
            id: 2,
            image: ReBike,
            title: "Re Bikes",
            content: "Join the Royal Enfield community and ride with fellow enthusiasts! Discover new adventures, share experiences, and enjoy the thrill of the open road together.",
            rating: "★★★☆☆"
        },
        {
            id: 3,
            image: RaceBike,
            title: "Off-Road Rides",
            content: "Join the Off-Road Riders community what upcoming rides or events are you excited about? Share your plans and let’s gear up for some thrilling adventures together!",
            rating: "★★★★★"
        },
        {
            id: 4,
            image: DirtBike,
            title: "Dirt Race",
            content: "Join the Dirtrace community and fuel your passion for off-road adventures!",
            rating: "★★★★☆"
        }
    ];

    const filteredCommunities = communities.filter(community =>
        community.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleJoinClick = async (community) => {
        setSelectedCommunity(community);
        setPopupVisible(true);

        try {
            await axios.post('http://localhost:8080/api/join-community', community);
            addCommunity(community);
        } catch (error) {
            console.error('Error joining community', error);
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
        setSelectedCommunity(null);
        navigate('/joined-communities');
    };

    return (
        <div className="new-page-container">
            <header className="new-about-us-header">
                <h1>Community</h1>
                <input
                    type="text"
                    placeholder="Search for a community..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="new-search-bar"
                />
            </header>

            <div className="new-trip-cards">
                {filteredCommunities.map((community) => (
                    <div className="new-trip-card" key={community.id}>
                        <img src={community.image} alt={`Community ${community.id}`} />
                        <h3>{community.title}</h3>
                        <p>{community.content}</p>
                        <p>Rating: {community.rating}</p>
                        <button onClick={() => handleJoinClick(community)}>Join Now</button>
                    </div>
                ))}
            </div>

            {popupVisible && (
                <div className="new-popup-overlay">
                    <div className="new-popup">
                        <button className="new-close-button" onClick={closePopup}>X</button>
                        <h2>Successfully Joined!</h2>
                        <p>You have joined the {selectedCommunity.title} community.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Community;
