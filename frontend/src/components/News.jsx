import React, { useState } from "react";
import "./News.css";


const News = () => {
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: "SmartBank Launches New Savings Account with High Interest Rates",
      date: "October 1, 2024",
      description:
        "SmartBank is excited to announce a new savings account option with some of the highest interest rates in the market. Customers can now save more while enjoying the flexibility of easy withdrawals.",
      image: "/src/assets/image.png",
    },
    {
      id: 2,
      title: "Special Loan Offer for Home Buyers",
      date: "September 25, 2024",
      description:
        "Looking to buy your dream home? SmartBank is offering a limited-time loan package with reduced interest rates for home buyers. This offer is valid until December 31, 2024.",
        image: "/src/assets/image2.png",
    },
    {
      id: 3,
      title: "SmartBank Mobile App Update",
      date: "September 20, 2024",
      description:
        "We’ve updated our mobile app with new features, including a more intuitive user interface and enhanced security features to keep your accounts safe.",
        image: "/src/assets/image3.png",
    },
    {
      id: 4,
      title: "Exclusive Offers for Business Accounts",
      date: "September 10, 2024",
      description:
        "SmartBank is introducing exclusive offers for small and medium business accounts. These include waived fees for the first year, lower transaction costs, and more.",
        image: "/src/assets/image4.png",
    },
  ]);

  return (
    <div className="news-container">
      <h1>Latest News</h1>
      <div className="news-list">
        {newsList.map((newsItem) => (
          <div key={newsItem.id} className="news-item">
            <img src={newsItem.image} alt={newsItem.title} className="news-image" />
            <div className="news-content">
              <h2>{newsItem.title}</h2>
              <p className="news-date">{newsItem.date}</p>
              <p>{newsItem.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="back-to-top">
        <a href="#top">⬆ Back to Top</a>
      </div>
    </div>
  );
};

export default News;
