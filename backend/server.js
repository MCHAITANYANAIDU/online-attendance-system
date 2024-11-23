const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',                // MySQL username
  password: '2001',   // Replace with your MySQL password
  database: 'attendance_system' // The name of the database you want to use
});

// Connect to the MySQL database
db.connect(err => {
  if (err) {
    console.error('Database connection error: ', err);
  } else {
    console.log('Database connected');
  }
});

// Example route for user registration (saving data to the database)
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Query to insert user data into the 'users' table
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';

  db.query(query, [username, password], (err, result) => {
    if (err) {
      res.status(500).send('Error registering user');
    } else {
      res.status(200).send('Registration successful');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
