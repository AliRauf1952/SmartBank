import React, { useContext } from 'react';
import { BalanceContext } from './BalanceContext';
import './TransactionHistory.css';

const TransactionHistory = () => {
  const { totalAmount, transactions } = useContext(BalanceContext);

  return (
    <div className="transaction-history-container">
      <h3>Transaction History</h3>
      <p className="total-balance">
        Total Balance: <span>${totalAmount.toFixed(2)}</span>
      </p>
      {transactions.length === 0 ? (
        <p className="no-transactions">No transactions found.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <li key={transaction.id} className={`transaction-item ${transaction.type.toLowerCase()}`}>
              <div className="transaction-details">
                <span className="transaction-date">{transaction.timestamp}</span> 
                <ul className="transaction-details-list">
                  <li><strong>Type:</strong> {transaction.type}</li>
                  <li><strong>Description:</strong> {transaction.description}</li>
                  <li><strong>Category:</strong> {transaction.category}</li>
                  <li><strong>Amount:</strong> ${transaction.amount.toFixed(2)}</li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;

