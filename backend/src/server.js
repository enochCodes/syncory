import 'dotenv/config';
import express from 'express';
import sequelize from './config/database.js';
import AuthRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test database connection
async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

// Define a route
app.use('/api/auth/users', AuthRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    testDatabaseConnection();
});
