import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import './UserProfile.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogoutRedirect = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <NavBar />
      <div className="user-profile-container">
        <h3>User Profile</h3>
        {userData ? (
          <div className="user-profile-details">
            <p><strong>First Name:</strong> {userData.firstName}</p>
            <p><strong>Last Name:</strong> {userData.lastName}</p>
            <p><strong>Date of Birth:</strong> {userData.dateOfBirth}</p>
            <p><strong>Address:</strong> {userData.address}</p>
            <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <br />
            <button onClick={handleLogoutRedirect}>Logout</button>
          </div>
        ) : (
          <p>No user information available.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
