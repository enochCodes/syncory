import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const router = express.Router();

// Registration route
router.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create New User
    if (role === undefined) {
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        role: "attendee",
      });
      return res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } else if (role === "organizer") {
      const { brandName, description } = req.body;
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        role,
        brandName,
        description,
      });
      return res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

export default router;
