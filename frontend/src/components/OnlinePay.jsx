import React, { useState, useContext } from 'react';
import { BalanceContext } from './BalanceContext';
import './OnlinePay.css';

const OnlinePay = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Utilities');
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const { totalAmount, addTransaction, withdraw } = useContext(BalanceContext);

  const categories = [
    'Utilities',
    'Shopping',
    'Entertainment',
    'Travel',
    'Subscription',
    'Education',
  ];

  const handlePayment = (e) => {
    e.preventDefault();
    if (amount > 0) {
      const paymentAmount = parseFloat(amount);
      const transaction = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        type: getPaymentType(),
        description,
        category,
        amount: paymentAmount,
      };

      addTransaction(transaction);
      withdraw(paymentAmount);

      setAmount('');
      setDescription('');
      setCategory('Utilities');
      resetPaymentFields();
    }
  };

  const getPaymentType = () => {
    switch (paymentMethod) {
      case 'card':
        return 'Card Payment';
      case 'bank':
        return 'Bank Transfer';
      case 'mobile':
        return 'Mobile Payment';
      default:
        return 'Online Pay';
    }
  };

  const resetPaymentFields = () => {
    if (paymentMethod === 'card') {
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    } else if (paymentMethod === 'bank') {
      setBankAccount('');
    } else if (paymentMethod === 'mobile') {
      setMobileNumber('');
    }
  };

  return (
    <div className="online-pay-container">
      <h3>Online Payment</h3>
      <p>Total Balance: ${totalAmount.toFixed(2)}</p>

      <form onSubmit={handlePayment}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0.01"
            step="0.01"
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter payment details here..."
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="online">Online Payment</option>
            <option value="card">Card Payment</option>
            <option value="bank">Bank Transfer</option>
            <option value="mobile">Mobile Payment</option>
          </select>
        </div>

        {paymentMethod === 'card' && (
          <div className="card-payment-fields">
            <div>
              <label>Card Number:</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                placeholder="Enter card number"
                maxLength="16"
              />
            </div>
            <div>
              <label>Expiry Date:</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                placeholder="MM/YY"
                maxLength="5"
              />
            </div>
            <div>
              <label>CVV:</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                placeholder="CVV"
                maxLength="3"
              />
            </div>
          </div>
        )}

        {paymentMethod === 'bank' && (
          <div className="bank-transfer-fields">
            <div>
              <label>Bank Account Number:</label>
              <input
                type="text"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                required
                placeholder="Enter bank account number"
              />
            </div>
          </div>
        )}

        {paymentMethod === 'mobile' && (
          <div className="mobile-payment-fields">
            <div>
              <label>Mobile Number:</label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
                placeholder="Enter mobile number"
              />
            </div>
          </div>
        )}

        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default OnlinePay;
