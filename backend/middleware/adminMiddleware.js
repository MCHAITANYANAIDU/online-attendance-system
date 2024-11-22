// middleware/adminMiddleware.js
const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Check if user is admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }

    req.user = decoded; // Add user info to request
    next();
  });
};

module.exports = isAdmin;
