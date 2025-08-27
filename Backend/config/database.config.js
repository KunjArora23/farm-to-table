const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

let connection;

async function setupConnection() {
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: process.env.PASSWORD,
            database: process.env.DATABASE_NAME,
        });

        console.log('The MySQL database is connected');
        return connection;
    } catch (err) {
        console.error('An error occurred while connecting to MySQL:', err);
        throw err; // Ensure errors are propagated
    }
}



module.exports = { setupConnection, connection };
