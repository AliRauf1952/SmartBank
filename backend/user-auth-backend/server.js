const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3001;

// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

// Path to the users.json file
const usersFilePath = path.join(__dirname, "users.json");

// Register endpoint
app.post("/api/register", (req, res) => {
  const newUser = req.body;

  // Read existing users from users.json
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading users file" });
    }

    let users = [];
    if (data) {
      users = JSON.parse(data);
    }

    // Check if user already exists
    const userExists = users.some((user) => user.email === newUser.email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Add new user to the array
    users.push(newUser);

    // Write updated users array back to users.json
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing to users file" });
      }
      res.status(201).json({ message: "User registered successfully!" });
    });
  });
});

// Login endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Read users from users.json
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading users file" });
    }

    let users = [];
    if (data) {
      users = JSON.parse(data);
    }

    // Check if the user exists and the password matches
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Successful login
    res.status(200).json({ message: "Login successful", user });
  });
});

// Admin login endpoint
app.post("/api/adminlogin", (req, res) => {
  const { email, password } = req.body;
  const admins = [{ email: "admin@example.com", password: "admin123" }]; // Hardcoded admin credentials

  const admin = admins.find(
    (admin) => admin.email === email && admin.password === password
  );
  if (admin) {
    res.json({ message: "Admin logged in", isAdmin: true });
  } else {
    res.status(403).json({ message: "Invalid admin credentials" });
  }
});

// Get all users (for AdminDashboard)
app.get("/api/users", (req, res) => {
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading users file" });
    }

    const users = JSON.parse(data);
    res.json(users);
  });
});

// Add a user (for AdminDashboard)
app.post("/api/adduser", (req, res) => {
  const newUser = req.body;

  // Read existing users from users.json
  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading users file" });
    }

    let users = [];
    if (data) {
      users = JSON.parse(data);
    }

    // Check if user already exists
    const userExists = users.some((user) => user.email === newUser.email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Add new user to the array
    users.push(newUser);

    // Write updated users array back to users.json
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing to users file" });
      }
      res.status(201).json(newUser);
    });
  });
});

// Delete a user (for AdminDashboard)
app.delete("/api/deleteuser/:email", (req, res) => {
  const emailToDelete = req.params.email;

  fs.readFile(usersFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading users file" });
    }

    let users = [];
    if (data) {
      users = JSON.parse(data);
    }

    // Filter out the user to delete
    const filteredUsers = users.filter((user) => user.email !== emailToDelete);

    // Write updated users array back to users.json
    fs.writeFile(
      usersFilePath,
      JSON.stringify(filteredUsers, null, 2),
      (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error writing to users file" });
        }
        res.status(200).json({ message: "User deleted successfully" });
      }
    );
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
