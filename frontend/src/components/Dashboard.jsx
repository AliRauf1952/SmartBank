import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="dashboard-container">
        <h2>Welcome to your Dashboard</h2>
        <div className="dashboard-options">
          <Link to="/user-profile" className="dashboard-option">User Profile</Link>
          <Link to="/transaction" className="dashboard-option">Transaction</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
