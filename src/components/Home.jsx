import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import hikeimage from './images/hikee.jpeg';
import desert from './images/desert.jpeg';
import coast from './images/coast.jpeg';
import aboutUsImage from './images/tripple.jpg';
import org1 from './images/org1.jpg';
import org2 from './images/org2.jpg';
import beach from './images/g8.jpeg';
import './AboutUs.css';

function Home() {
  const [stats, setStats] = useState({
    experienceYears: '17+',
    teamMembers: '200+',
    tripsOrganized: '1000+',
    countriesVisited: '50+',
  });

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2024-09-05T00:00:00'); // Set the target date here

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    setTimeRemaining({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, );

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / maxScroll) * 100;

    setStats({
      experienceYears: Math.min(17 + Math.floor(scrollPercent / 10), 25) + '+',
      teamMembers: Math.min(200 + Math.floor(scrollPercent * 5), 500) + '+',
      tripsOrganized: Math.min(1000 + Math.floor(scrollPercent * 10), 2000) + '+',
      countriesVisited: Math.min(50 + Math.floor(scrollPercent / 2), 100) + '+',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <div className='h1title'>
          <h2>Welcome to</h2>
          <h1>TRIPPLE</h1>
          <p>Ride. Roam. Repeat</p>
        </div>
      </header>

      <section className='make-trip-section'>
        <div className='make-trip-head'>
          <h2>Make Your Trip </h2>
        </div>
        <div className='make-trip-container'>
          <div className='make-trip-item'>
            <p className='date'>{timeRemaining.days}</p>
            <p className='date-text'>days</p>
          </div>
          <div className='make-trip-item'>
            <p className='date'>{timeRemaining.hours}</p>
            <p className='date-text'>hours</p>
          </div>
          <div className='make-trip-item'>
            <p className='date'>{timeRemaining.minutes}</p>
            <p className='date-text'>minutes</p>
          </div>
          <div className='make-trip-item'>
            <p className='date'>{timeRemaining.seconds}</p>
            <p className='date-text'>seconds</p>
          </div>
        </div>
        <div className='make-trip-caption'>
          <p>Get Ready to explore the world</p>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-us-content">
          <div className="about-us-image-container">
            <img src={aboutUsImage} alt="About Us" className="about-us-image" />
          </div>
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              At TRIPPLE, we connect adventure enthusiasts who love to explore
              the world on two wheels. Whether you're a seasoned rider or a
              newbie, join us to make unforgettable memories and friendships.
            </p>
            <div className="about-us-stats">
              <div>
                <h3>{stats.experienceYears}</h3>
                <p>Years of Experience</p>
              </div>
              <div>
                <h3>{stats.teamMembers}</h3>
                <p>Members in Team</p>
              </div>
              <div>
                <h3>{stats.tripsOrganized}</h3>
                <p>Total Trips Organized</p>
              </div>
              <div>
                <h3>{stats.countriesVisited}</h3>
                <p>Countries Visited</p>
              </div>
            </div>
            <a href="/about" className="know-more-link">
              Know More
            </a>
          </div>
        </div>
      </section>

      <section className="trips-section">
        <h2>Trips</h2>
        <div className="trips-cards">
          <div className="trip-card">
            <img src={hikeimage} alt="Trip 1" />
            <h3>Mountain Adventure</h3>
            <p>Explore the breathtaking mountain trails.</p>
            <Link to="/trips">
              <button>Explore More</button>
            </Link>
          </div>
          <div className="trip-card">
            <img src={desert} alt="Trip 2" />
            <h3>Desert Safari</h3>
            <p>Experience the thrill of desert riding.</p>
            <Link to="/trips">
              <button>Explore More</button>
            </Link>
          </div>
          <div className="trip-card">
            <img src={coast} alt="Trip 3" />
            <h3>Coastal Cruise</h3>
            <p>Ride along the beautiful coastline.</p>
            <Link to="/trips">
              <button>Explore More</button>
            </Link>
          </div>
          <div className="trip-card">
            <img src={beach} alt="Trip 4" />
            <h3>Tropical Beach Getaway</h3>
            <p>The scenery is blissful.</p>
            <Link to="/trips">
              <button>Explore More</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="organizers-section">
        <h2>Our Trip Organizers</h2>
        <div className="organizers">
          <div className="organizer-card">
            <img src={org1} alt="Organizer 1" />
            <h3>John Doe</h3>
            <p>Expert mountain guide with 10+ years of experience.</p>
          </div>
          <div className="organizer-card">
            <img src={org2} alt="Organizer 2" />
            <h3>Jane Smith</h3>
            <p>Desert explorer and adventure lover.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
