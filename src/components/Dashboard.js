import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [editBooking, setEditBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/admin/bookings');
        setBookings(response.data);
      } catch (error) {
        setError("Error fetching bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleEdit = (booking) => {
    setEditBooking(booking.id);
    setFormData(booking);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/bookings/${id}`);
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (error) {
      setError("Error deleting booking.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/admin/bookings/${editBooking}`, formData);
      setBookings(bookings.map(booking => booking.id === editBooking ? response.data : booking));
      setEditBooking(null);
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
      });
    } catch (error) {
      setError("Error updating booking.");
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Tour Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.riderName}</td>
                <td>{booking.riderAge}</td>
                <td>{booking.riderGender}</td>
                <td>{booking.riderEmail}</td>
                <td>{booking.tourName}</td>
                <td>
                  <button onClick={() => handleEdit(booking)}>Edit</button>
                  <button onClick={() => handleDelete(booking.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editBooking && (
        <div className="edit-form">
          <h2>Edit Booking</h2>
          <form onSubmit={handleUpdate}>
            <label>
              Name:
              <input type="text" name="riderName" value={formData.riderName} onChange={handleChange} required />
            </label>
            <label>
              Age:
              <input type="number" name="riderAge" value={formData.riderAge} onChange={handleChange} required />
            </label>
            <label>
              Gender:
              <input type="text" name="riderGender" value={formData.riderGender} onChange={handleChange} required />
            </label>
            <label>
              Experience:
              <input type="text" name="riderExperience" value={formData.riderExperience} onChange={handleChange} />
            </label>
            <label>
              Contact:
              <input type="text" name="riderContact" value={formData.riderContact} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="riderEmail" value={formData.riderEmail} onChange={handleChange} required />
            </label>
            <label>
              Tour Name:
              <input type="text" name="tourName" value={formData.tourName} onChange={handleChange} required />
            </label>
            <label>
              Accommodation Type:
              <input type="text" name="accommodationType" value={formData.accommodationType} onChange={handleChange} />
            </label>
            <label>
              Number of Riders:
              <input type="number" name="numRiders" value={formData.numRiders} onChange={handleChange} />
            </label>
            <label>
              Trip Type:
              <input type="text" name="tripType" value={formData.tripType} onChange={handleChange} />
            </label>
            <label>
              Bike Type:
              <input type="text" name="bikeType" value={formData.bikeType} onChange={handleChange} />
            </label>
            <label>
              Bike Model:
              <input type="text" name="bikeModel" value={formData.bikeModel} onChange={handleChange} />
            </label>
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
