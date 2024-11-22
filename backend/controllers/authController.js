// authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../config');

// Handle user login
const login = (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    // Compare password with hash stored in database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Error comparing password' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },  // Include role in the token
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token });
    });
  });
};

module.exports = { login };
