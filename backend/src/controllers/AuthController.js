import AuthService from "../services/AuthService.js";

class AuthController {
  static async register(req, res) {
    const { username, email, password, role, brandName, description } =
      req.body;
    const requesterId = req.userId; // Assume this is set by an authentication middleware

    try {
      const user = await AuthService.register(
        { username, email, password, role, brandName, description },
        requesterId
      );
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const { token, user } = await AuthService.login({ email, password });
      res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default AuthController;
