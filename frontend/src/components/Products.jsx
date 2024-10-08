import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <section className="product-section">
        <h2>Bank Accounts</h2>
        <p>
          SmartBank offers a range of personal and business accounts that fit
          your financial needs. Whether you're saving for the future, managing
          daily expenses, or running a business, we have the right account for
          you.
        </p>
        <ul>
          <li>Savings Accounts</li>
          <li>Current Accounts</li>
          <li>Business Accounts</li>
          <li>Student Accounts</li>
        </ul>
      </section>

      <section className="product-section">
        <h2>Loans</h2>
        <p>
          We provide a variety of loan products to help you achieve your goals.
          Our loan options are flexible and affordable, tailored to meet your
          specific needs.
        </p>
        <ul>
          <li>Personal Loans</li>
          <li>Home Loans</li>
          <li>Car Loans</li>
          <li>Business Loans</li>
        </ul>
      </section>

      <section className="product-section">
        <h2>Credit Cards</h2>
        <p>
          Enjoy the convenience and benefits of SmartBank's credit cards. From
          low interest rates to exclusive rewards, we offer a card that matches
          your spending style.
        </p>
        <ul>
          <li>Standard Credit Card</li>
          <li>Platinum Credit Card</li>
          <li>Business Credit Card</li>
          <li>Rewards Credit Card</li>
        </ul>
      </section>

      <section className="product-section">
        <h2>Investment Solutions</h2>
        <p>
          Maximize your wealth with SmartBank's investment options. Our experts
          will help you make informed decisions to grow your financial
          portfolio.
        </p>
        <ul>
          <li>Mutual Funds</li>
          <li>Fixed Deposits</li>
          <li>Retirement Plans</li>
          <li>Stock Market Investments</li>
        </ul>
      </section>

      <section className="product-section">
        <h2>Insurance Services</h2>
        <p>
          Protect what matters most with SmartBank's comprehensive insurance
          solutions. We offer coverage for your health, vehicle, home, and
          business.
        </p>
        <ul>
          <li>Health Insurance</li>
          <li>Car Insurance</li>
          <li>Home Insurance</li>
          <li>Business Insurance</li>
        </ul>
      </section>
      <div className="back-to-top">
        <a href="#top">⬆ Back to Top</a>
      </div>
    </div>
  );
};

export default Products;
