import express from "express";
import { body } from "express-validator";
import authMiddleware from "../middlewares/authMiddleware.js";
import UserController from "../controllers/userController.js";
import RoleCheckMiddleware from "../middlewares/RoleCheckMiddleware.js";

/**
 * Express router for handling user routes.
 * @type {import('express').Router}
 */
const router = express.Router();

// GET /profile - Get user profile
router.get("/profile", authMiddleware, UserController.getProfile);

// PUT /profile - Update user profile
router.put(
  "/profile",
  authMiddleware,
  [
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("username").notEmpty().withMessage("Username is required"),
  ],
  UserController.updateProfile
);

// for Organizer Users categories endpoints
router.post("/categories", authMiddleware, RoleCheckMiddleware('organizer'), UserController.addCategories);

router.get("/categories", authMiddleware, RoleCheckMiddleware('organizer'), UserController.getCategories);

router.get("/categories/:id", authMiddleware, RoleCheckMiddleware('organizer'), UserController.getCategoryById);

router.put("/categories/:id", authMiddleware, RoleCheckMiddleware('organizer'), UserController.updateCategory);

router.delete("/categories/:id", authMiddleware, RoleCheckMiddleware('organizer'), UserController.deleteCategory);

export default router;
