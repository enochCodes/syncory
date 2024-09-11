import jwt from "jsonwebtoken";
import User from "../models/user.js";

const RoleCheckMiddleware = (requiredRole) => {
  return async (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

      const user = await User.findByPk(decoded.id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Attach the user role to the request object
      req.userRole = user.role;

      // Check if the user has the required role
      if (requiredRole && user.role !== requiredRole) {
        return res
          .status(403)
          .json({ message: "Access denied: Insufficient privileges" });
      }

      // Attach user info to the request
      req.user = user;

      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to authenticate token" });
    }
  };
};

export default RoleCheckMiddleware;
