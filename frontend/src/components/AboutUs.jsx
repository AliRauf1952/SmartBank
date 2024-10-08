import React, { useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "suggestion",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
      type: "suggestion",
    });
  };

  return (
    <div className="about-container">
      <section className="about-section">
        <h1>About SmartBank</h1>
        <p>
          At SmartBank, we believe in making banking simple, secure, and
          accessible for everyone. Our mission is to provide innovative financial services
          that empower our customers to achieve their financial goals.
        </p>

        <h2>Our Vision</h2>
        <p>
          Our vision is to be a leading digital bank, offering world-class
          services and products that meet the evolving needs of our clients.
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to revolutionize the banking experience through cutting-edge technology,
          user-friendly interfaces, and personalized services.
        </p>
      </section>

      <section className="social-media-section">
        <h2>Connect With Us</h2>
        <p>Follow us on social media to stay updated:</p>
        <div className="social-links">
          <a href="https://facebook.com/smartbank" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/fb.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/smartbank" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/X.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com/company/smartbank" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/In.png" alt="LinkedIn" />
          </a>
        </div>
      </section>

      <section className="form-section">
        <h2>Suggestions & Complaints</h2>
        {formSubmitted ? (
          <p className="success-message">Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Feedback Type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="suggestion">Suggestion</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        )}
      </section>
      <div className="back-to-top">
        <a href="#top">⬆ Back to Top</a>
      </div>
    </div>
  );
};

export default AboutUs;
