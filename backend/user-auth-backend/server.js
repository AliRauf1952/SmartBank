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

// Register endpoint
app.post("/api/register", (req, res) => {
  const newUser = req.body;

  // Read existing users from users.json
  const usersFilePath = path.join(__dirname, "users.json");
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
