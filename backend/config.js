const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config(); // To load environment variables

// Database configuration
const poolPromise = new sql.ConnectionPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST, // Usually localhost
    database: process.env.DB_NAME, // Your database name
    port: process.env.DB_PORT || 1433, // Default SQL Server port is 1433
    options: {
        encrypt: true, // Use encryption for secure connections (recommended)
        trustServerCertificate: true, // Allows self-signed certificates (only for local dev)
    },
})
.connect()
.then(pool => {
    console.log('Connected to SQL Server');
    return pool;
})
.catch(err => {
    console.error('Database connection failed: ', err);
    process.exit(1); // Exit if connection fails
});

module.exports = poolPromise;

