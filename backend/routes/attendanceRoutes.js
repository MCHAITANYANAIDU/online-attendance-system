// routes/attendanceRoutes.js
const express = require('express');
const { postAttendance } = require('../controllers/attendanceController');
const isAdmin = require('../middleware/adminMiddleware');

const router = express.Router();

// POST attendance (only accessible to admins)
router.post('/attendance', isAdmin, postAttendance);

module.exports = router;
