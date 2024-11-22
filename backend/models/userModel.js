const poolPromise = require('../config');

// Get user by email
const getUserByEmail = async (email) => {
    const pool = await poolPromise;
    const result = await pool.request()
        .input('email', sql.NVarChar, email)
        .query('SELECT * FROM users WHERE email = @email');
    return result.recordset[0]; // Return the first user found (if any)
};

// Create new user
const createUser = async (user) => {
    const pool = await poolPromise;
    const result = await pool.request()
        .input('name', sql.NVarChar, user.name)
        .input('email', sql.NVarChar, user.email)
        .input('password', sql.NVarChar, user.password)
        .query('INSERT INTO users (name, email, password) VALUES (@name, @email, @password)');
    return result.rowsAffected[0]; // Return the number of affected rows
};

module.exports = { getUserByEmail, createUser };
