import UserService from "../services/userService.js";
import { body, validationResult } from "express-validator";

class UserController {
  async getProfile(req, res) {
    try {
      const user = await UserService.getUserProfile(req.user.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  }

  async updateProfile(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, brandName, description, password } = req.body;

    try {
      const user = await UserService.updateUserProfile(req.user.id, {
        username,
        email,
        brandName,
        description,
        password,
      });
      return res
        .status(200)
        .json({ message: "Profile updated successfully", user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  }

  async addCategories(req, res) {
    const { name, description } = req.body;

    try {
      const user = await UserService.addCategories(req.user.id, {
        name,
        description,
      });
      return res
        .status(200)
        .json({ message: "Category added successfully", user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  }

  async getCategories(__, res) {
    try {
      const categories = await UserService.getCategories();
      return res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "An error occurred while fetching the categories",
        error,
      });
    }
  }

  async getCategoryById(req, res) {
    try {
      const CategoriesId = req.params.id;
      const categories = await UserService.getCategoriesById(CategoriesId);
      if (!categories) {
        return res.status(404).json({ message: "Categories not found" });
      }
      return res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "An error occurred while fetching the category",
        error,
      });
    }
  }

  async updateCategory(req, res) {
    try {
      const CategoriesId = req.params.id;
      const { name, description } = req.body;
      const categories = await UserService.UpdateCategory(CategoriesId, {
        name,
        description,
      });
      return res
        .status(200)
        .json({ message: "Category updated successfully", categories });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "An error occurred while updating the category",
        error,
      });
    }
  }

  async deleteCategory(req, res) {
    try {
      const CategoriesId = req.params.id;
      await UserService.deleteCategory(CategoriesId);
      return res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "An error occurred while deleting the category",
        error,
      });
    }
  }
}

export default new UserController();
