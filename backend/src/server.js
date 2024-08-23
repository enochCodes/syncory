import 'dotenv/config';
import express from 'express';
import sequelize from './config/database.js'; // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Test database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
// Define a route

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});