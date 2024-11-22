const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);  // User registration route

module.exports = router;
