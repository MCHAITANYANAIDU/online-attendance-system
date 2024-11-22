// attendanceController.js
const connection = require('../config');

const postAttendance = (req, res) => {
  const { user_id, date, status } = req.body;

  if (!user_id || !date || !status) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Insert attendance record into the database
  connection.query(
    'INSERT INTO attendance (user_id, date, status) VALUES (?, ?, ?)',
    [user_id, date, status],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Database query failed' });
      }
      res.status(201).json({ message: 'Attendance recorded successfully' });
    }
  );
};

module.exports = { postAttendance };
