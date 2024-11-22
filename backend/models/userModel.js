const db = require('../config');

const createUser = (userData, callback) => {
    const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(query, [userData.name, userData.email, userData.password, userData.role], callback);
};

const getUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
};

module.exports = { createUser, getUserByEmail };
