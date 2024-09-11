import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import AuthRoutes from "./routes/authRoutes.js";
import UserRoutes from "./routes/userRoutes.js";
import EventRoutes from "./routes/eventRoutes.js";
import sequelize from "./config/database.js"; // Assuming you have a sequelize instance
import cors from "cors";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Test database connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
}

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Define routes
app.use("/api/v1/auth/users", AuthRoutes);
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/", EventRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  testDatabaseConnection();
});
