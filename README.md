# SmartBank Application
## Overview
SmartBank is a sophisticated web application designed to provide users with a seamless banking experience. The application features are allowing Visitors ,users and administrators to access various banking services and manage their accounts efficiently. Built with React, the application utilizes React Router for navigation and provides a user-friendly interface with clear options for visitors ,users and administrators.
## Features
- **User-Friendly Navigation**:
  - The layout of left navigation part contains:
    - **Logo**
    - Four pages: **Products**, **Guide**, **News**, and **About Us**.
    - The four pages described are shown as full pages one by one with details.
  - On the right side, there are two options:
    - **Language**
    - **Multilingual Support**: Users can select their preferred language from a dropdown menu.
    - **Online Banking Options**: A dedicated section for online banking, which includes:
    - **User Login**: Access to user functionalities including:
    - **Login**: Users can log in to their accounts.
    - **Registration**: Users should register himself/herself ,if not registered before .
    - **After Successfull Login User can do Fallowing Features**
     - **Deposit**: A feature to deposit money online.
     - **Withdraw**: A feature to withdraw money from accounts.
     - **Transaction History**: View detailed transaction records.
     - **Online Pay**: Multiple payment options for users.
    - **Admin Login**: Access for administrators to manage user accounts.
    - When the admin clicks on the admin login and after verification, they will be redirected to the dashboard. The dashboard contains two parts:
      - **Managing Existing Users**: Administrators can view and manage previous users.
      - **Adding New Users**: Administrators can add new users to the system.
## How to Run the SmartBank Application
### Backend Setup
1. **Install Node.js**
   Ensure you have Node.js installed. You can check by running the following command in your terminal:
   ```bash
   node -v
   ```
   If it's not installed, download and install it from [nodejs.org](https://nodejs.org/).
2. **Navigate to the backend directory**
   In your terminal, navigate to the backend folder where `server.js` and `users.json` are located:
   ```bash
   cd backend/user-auth-backend
   ```
3. **Install dependencies**
   Run the following command to install the required dependencies (Express, CORS, Body-Parser, etc.):
   ```bash
   npm install
   ```
4. **Start the server**
   Once the dependencies are installed, start the backend server using the following command:
   ```bash
   node server.js
   ```
   The server should now be running on `http://localhost:3001`.
---
### Frontend Setup
1. **Navigate to the frontend directory**
   In a new terminal window or tab, navigate to the frontend folder where your React app is located:
   ```bash
   cd frontend
   ```
2. **Install dependencies**
   Run the following command to install the required dependencies for the frontend (React, React Router, etc.):
   ```bash
   npm install
   ```
3. **Start the React application**
   After the dependencies are installed, start the frontend with the following command:
   ```bash
   npm run dev
   ```
---
---
### If you have any Questions, you can contact us.
## Authors Information
- **Name**:Ali Rauf
- **Email**:alirauf368@gmail.com
---
- **Name**: Hassan Barghouth
- **Email**: hassan.b994@gmail.com
