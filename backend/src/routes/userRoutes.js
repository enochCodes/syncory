import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// GET /profile - Get user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

// PUT /profile - Update user profie
router.put(
  "/profile",
  authMiddleware,
  // Input validation using express-validator
  [
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("username").notEmpty().withMessage("Username is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, brandName, description } = req.body;

    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if email is already taken by another user
      if (email && email !== user.email) {
        const emailExists = await User.findOne({ where: { email } });
        if (emailExists) {
          return res.status(400).json({ message: "Email is already in use" });
        }
      }

      user.username = username;
      user.email = email;
      user.brandName = brandName;
      user.description = description;

      await user.save();

      return res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  }
);

export default router;
