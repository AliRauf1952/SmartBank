import React, { useState, useContext } from 'react';
import { BalanceContext } from './BalanceContext';
import './Withdraw.css';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const { withdraw, totalAmount, addTransaction } = useContext(BalanceContext);

  const handleWithdraw = (e) => {
    e.preventDefault();
    const withdrawAmount = parseFloat(amount);
    if (withdrawAmount > 0 && withdrawAmount <= totalAmount) {
      withdraw(withdrawAmount);
      addTransaction({
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        type: 'Withdrawal',
        description,
        category,
        amount: withdrawAmount,
      });
      setAmount('');
      setDescription('');
      setCategory('');
    } else {
      alert('Please enter a valid amount. Ensure it does not exceed the total balance.');
    }
  };

  return (
    <div className="transaction-form-container">
      <h3>Withdraw Funds</h3>
      <p>Total Balance: ${totalAmount.toFixed(2)}</p>
      <form onSubmit={handleWithdraw}>
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
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Rent">Rent</option>
            <option value="Entertainment">Entertainment</option>
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
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
};

export default Withdraw;
