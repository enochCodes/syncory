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
// POST /categories - Add a new category
router.post("/categories", authMiddleware, RoleCheckMiddleware('organizer'), UserController.addCategories);

// GET /categories - Get all categories
router.get("/categories", authMiddleware, UserController.getCategories);

// GET /categories/:id - Get a category by ID
router.get("/categories/:id", authMiddleware, UserController.getCategoryById);

// PUT /categories/:id - Update a category by ID
router.put("/categories/:id", authMiddleware, RoleCheckMiddleware('organizer'), UserController.updateCategory);

// DELETE /categories/:id - Delete a category by ID
router.delete("/categories/:id", authMiddleware, RoleCheckMiddleware('organizer'), UserController.deleteCategory);

// GET /organizers - get all organizer
router.get("/organizers", authMiddleware, UserController.getOrganizers);

// GET /organizers/:id - get organizer by id
router.get("/organizers/:id", authMiddleware, UserController.getOrganizerById);


export default router;
