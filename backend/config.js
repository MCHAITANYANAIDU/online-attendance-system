// config.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;

