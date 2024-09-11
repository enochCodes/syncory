import User from "../models/user.js";
import {
  hashPassword,
  comparePassword,
  generateToken,
} from "../utils/auth.js";

class AuthService {
  static async register(
    { username, email, password, role, brandName, description },
    requesterId
  ) {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(password);

    if (role === "attendee") {
      return await User.create({
        username,
        email,
        password: hashedPassword,
        role,
      });
    } else if (role === "organizer") {
      return await User.create({
        username,
        email,
        password: hashedPassword,
        role,
        brandName,
        description,
      });
    } else if (role === "admin") {
      const requester = await User.findByPk(requesterId);
      if (!requester || requester.role !== "admin") {
        throw new Error("Forbidden: Insufficient privileges");
      }

      // return await User.create({
      //   username,
      //   email,
      //   password: hashedPassword,
      //   role,
      // });
    }
  }

  static async login({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(user.id);
    return { token, user };
  }
}

export default AuthService;
