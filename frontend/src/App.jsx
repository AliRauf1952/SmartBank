import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Products';
import News from './components/News';
import Guide from './components/Guide';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Registration from './components/Registration';
import UserProfile from "./components/UserProfile";
import Transaction from "./components/Transaction";
import Dashboard from './components/Dashboard';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard'; 
import { BalanceProvider } from './components/BalanceContext';
import './App.css';

const App = () => {
  return (
    <BalanceProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <NavBar />
                <div id="products" className="section">
                  <Products />
                </div>
                <div id="news" className="section">
                  <News />
                </div>
                <div id="guide" className="section">
                  <Guide />
                </div>
                <div id="about-us" className="section">
                  <AboutUs />
                </div>
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/transaction/*" element={<Transaction />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} /> {/* Add AdminDashboard Route */}
          </Routes>
        </div>
      </Router>
    </BalanceProvider>
  );
};

export default App;
