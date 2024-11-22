const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config');

const login = (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) return res.status(500).send(err);
        if (!results.length) return res.status(401).send('User not found');

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (isMatch) {
                const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key');
                res.send({ token, user });
            } else {
                res.status(401).send('Invalid credentials');
            }
        });
    });
};

const signup = (req, res) => {
    const { name, email, password, role } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
        db.query(query, [name, email, hashedPassword, role], (err, results) => {
            if (err) return res.status(500).send(err);
            res.send('User registered successfully');
        });
    });
};

module.exports = { login, signup };
