const db = require('../config');

const markAttendance = (req, res) => {
    const { userId, date, status } = req.body;

    const query = `
        INSERT INTO attendance (user_id, date, status)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE status = ?
    `;

    db.query(query, [userId, date, status, status], (err, results) => {
        if (err) {
            console.error('Error marking attendance:', err);
            return res.status(500).send('Server error while marking attendance.');
        }
        res.send('Attendance marked successfully.');
    });
};

const getUserAttendance = (req, res) => {
    const { userId } = req.params;

    const query = `
        SELECT * FROM attendance
        WHERE user_id = ?
    `;

    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching attendance:', err);
            return res.status(500).send('Server error while fetching attendance.');
        }
        res.send(results);
    });
};

const getAttendanceSummary = (req, res) => {
    const query = `
        SELECT user_id, COUNT(*) AS total_days, 
               SUM(CASE WHEN status = 'present' THEN 1 ELSE 0 END) AS present_days,
               SUM(CASE WHEN status = 'absent' THEN 1 ELSE 0 END) AS absent_days
        FROM attendance
        GROUP BY user_id
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching attendance summary:', err);
            return res.status(500).send('Server error while fetching attendance summary.');
        }
        res.send(results);
    });
};

module.exports = {
    markAttendance,
    getUserAttendance,
    getAttendanceSummary,
};
