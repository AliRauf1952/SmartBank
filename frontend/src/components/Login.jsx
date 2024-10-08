// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log(data); // Handle the successful login response
      navigate("/dashboard"); // Navigate to dashboard on success
    } catch (error) {
      setErrorMessage(error.message); // Set error message for display
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back one step in the history
  };

  const handleRegister = () => {
    navigate("/registration");
  };

  return (
    <div>
      <NavBar />
      <div className="login-container">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button onClick={handleRegister} className="register-button">
          Register
        </button>
        <button onClick={handleBack} className="back-button">
          Back
        </button>
      </div>
    </div>
  );
};

export default Login;
