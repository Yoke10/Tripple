import React, { useState } from 'react';
import './Trips.css';
import mountain from "./images/hikee.jpeg";
import safari from "./images/desert.jpeg";
import beach from "./images/g8.jpeg";
import forest from "./images/g9.jpeg";
import city from "./images/g10.jpeg";
import jas from "./images/g11.jpeg";
import great from "./images/great.jpeg";
import amal from "./images/amalfi.jpeg";
import coast from "./images/coast.jpeg";
import { Link } from 'react-router-dom';

const tripsData = [
  { id: 1, title: 'Mountain Adventure', location: 'Alps', duration: '5 days', bestTime: 'June to September', temperature: '15-25°C', distance: '500 km', departure: '2024-08-12', rating: '★★★★☆', img: mountain },
  { id: 2, title: 'Desert Safari', location: 'Sahara', duration: '3 days', bestTime: 'November to March', temperature: '20-30°C', distance: '300 km', departure: '2024-09-05', rating: '★★★☆☆', img: safari },
  { id: 3, title: 'Tropical Beach Getaway', location: 'Maldives', duration: '7 days', bestTime: 'December to April', temperature: '25-30°C', distance: '800 km', departure: '2024-12-20', rating: '★★★★★', img: beach },
  { id: 4, title: 'Rainforest Expedition', location: 'Amazon', duration: '6 days', bestTime: 'June to August', temperature: '22-28°C', distance: '600 km', departure: '2024-07-15', rating: '★★★★☆', img: forest },
  { id: 5, title: 'Urban Exploration', location: 'New York City', duration: '4 days', bestTime: 'April to October', temperature: '10-25°C', distance: '200 km', departure: '2024-10-01', rating: '★★★★☆', img: city },
  { id: 6, title: 'Jammu & Kashmir', location: 'Leh-Ladakh, Jammu & Kashmir', duration: '3 days', bestTime: 'May to October', temperature: '11-25°C', distance: '250 km', departure: '2024-10-07', rating: '★★★★☆', img: jas },
  { id: 7, title: 'Great Ocean Gateway', location: 'Amazon', duration: '3 days', bestTime: 'July to August', temperature: '20-28°C', distance: '690 km', departure: '2024-07-07', rating: '★★★★☆', img: great },
  { id: 8, title: 'Amalfi Coast, Italy', location: 'Italy', duration: '2 days', bestTime: 'April to August', temperature: '22-26°C', distance: '800 km', departure: '2024-04-15', rating: '★★★★☆', img: amal },
  { id: 9, title: 'Coastal Cruise', location: 'Mediterranean', duration: '5 days', bestTime: 'March to August', temperature: '22-28°C', distance: '670 km', departure: '2024-03-15', rating: '★★★★☆', img: coast },
];

function Trips() {
  const [showUpcoming, setShowUpcoming] = useState(true);

  const today = new Date().toISOString().split('T')[0];

  const upcomingTrips = tripsData.filter(trip => trip.departure >= today);
  const completedTrips = tripsData.filter(trip => trip.departure < today);

  return (
    <div className="page-container trips-page">
      <header className="trips-header">
        <h1>Trips</h1>
      </header>
      <div className="trip-buttons">
        <button onClick={() => setShowUpcoming(true)} className={showUpcoming ? 'active' : ''}>Upcoming Trips</button>
        <button onClick={() => setShowUpcoming(false)} className={!showUpcoming ? 'active' : ''}>Completed Trips</button>
      </div>
      <div className="trip-cards">
        {(showUpcoming ? upcomingTrips : completedTrips).map(trip => (
          <div key={trip.id} className="trip-card">
            <img src={trip.img} alt={trip.title} />
            <h3>{trip.title}</h3>
            <p>Location: {trip.location}</p>
            <p>Duration: {trip.duration}</p>
            <p>Best Time: {trip.bestTime}</p>
            <p>Temperature: {trip.temperature}</p>
            <p>Distance: {trip.distance}</p>
            <p>{showUpcoming ? `Upcoming Departure: ${trip.departure}` : `Completed on: ${trip.departure}`}</p>
            <p>Rating: {trip.rating}</p>
            {showUpcoming && (
              <Link to="/booked">
                <button>Book Now</button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;
