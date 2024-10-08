import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import TransactionHistory from './TransactionHistory';
import OnlinePay from './OnlinePay';
import './Transaction.css';

const Transaction = () => {
  const navigate = useNavigate();

  const handleLogoutRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="transaction-container">
      <h2>Transaction Management</h2>
      <nav>
        <Link to="deposit">Deposit</Link>
        <Link to="withdraw">Withdraw</Link>
        <Link to="history">Transaction History</Link>
        <Link to="online-pay">Online Pay</Link>
      </nav>
     
      <Routes>
        <Route path="deposit" element={<Deposit />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="history" element={<TransactionHistory />} />
        <Route path="online-pay" element={<OnlinePay />} />
      </Routes>
      <br />
      <button className="transaction-button" onClick={handleLogoutRedirect}>Logout</button>
    </div>
  );
};

export default Transaction;
