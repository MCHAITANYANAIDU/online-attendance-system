const express = require('express');
const {
    markAttendance,
    getUserAttendance,
    getAttendanceSummary,
} = require('../controllers/attendanceController');
const router = express.Router();

router.post('/mark', markAttendance);
router.get('/user/:userId', getUserAttendance);
router.get('/summary', getAttendanceSummary);

module.exports = router;
