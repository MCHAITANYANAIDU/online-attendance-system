const db = require('../config');

const markAttendance = (attendanceData, callback) => {
    const query = `
        INSERT INTO attendance (user_id, date, status)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE status = ?
    `;
    db.query(query, [attendanceData.userId, attendanceData.date, attendanceData.status, attendanceData.status], callback);
};

const getAttendanceByUserId = (userId, callback) => {
    const query = 'SELECT * FROM attendance WHERE user_id = ?';
    db.query(query, [userId], callback);
};

module.exports = { markAttendance, getAttendanceByUserId };
