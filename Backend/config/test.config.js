// database.config.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Create a pool (auto handles connections) — no async needed
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
});

export default pool;