import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Get token from header
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Extract token from header
  const token = authHeader.split(" ")[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // `decoded` should contain the user id and any other relevant info
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    return res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
