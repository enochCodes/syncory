import User from "../models/user.js";
import bcrypt from "bcryptjs";
import Categories from "../models/categories.js";

class UserService {
  async getUserProfile(userId) {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });
    return user;
  }

  async updateUserProfile(userId, { username, email, brandName, description, password }) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }

    if (email && email !== user.email) {
      const emailExists = await User.findOne({ where: { email } });
      if (emailExists) {
        throw new Error("Email is already in use");
      }
    }

    if (user.role === "organizer" && (!brandName || !description)) {
      throw new Error("Brand name and description are required for organizers");
    }

    user.username = username;
    user.email = email;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    return user;
  }

  async addCategories(userId, { name, description }) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }

    if (user.role !== "organizer") {
      throw new Error("Only organizers can add categories");
    }

    return await Categories.create({ name, description });
  }

  async getCategories() {
    return await Categories.findAll();
  }

  async getCategoryById(id) {
    return await Categories.findByPk(id);
  }

  async updateCategory(id, { name, description }) {
    const category = await Categories.findByPk(id);
    if (!category) {
      throw new Error("Category not found");
    }

    category.name = name;
    category.description = description;

    await category.save();

    return category;
  }

  async deleteCategory(id) {
    const category = await Categories.findByPk(id);
    if (!category) {
      throw new Error("Category not found");
    }

    await category.destroy();

    return category;
  }
}

export default new UserService();
