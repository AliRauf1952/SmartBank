import React, { useState, useContext } from 'react';
import { BalanceContext } from './BalanceContext';
import './Deposit.css';

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const { deposit, totalAmount, addTransaction } = useContext(BalanceContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > 0) {
      const depositAmount = parseFloat(amount);
      deposit(depositAmount);
      addTransaction({
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        type: 'Deposit',
        description,
        category,
        amount: depositAmount,
      });
      setAmount('');
      setDescription('');
      setCategory('');
    }
  };

  return (
    <div className="transaction-form-container">
      <h3>Deposit Funds</h3>
      <p>Total Balance: ${totalAmount.toFixed(2)}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
          />
        </div>
   
        <div>
          <label>Category:</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required
          >
            <option value="">Select Category</option>
            <option value="Salary">Salary</option>
            <option value="Gift">Gift</option>
            <option value="Investment">Investment</option>
            <option value="Bonus">Bonus</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
            placeholder="Enter description here..."
          />
        </div>
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
};

export default Deposit;
