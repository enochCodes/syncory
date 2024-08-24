import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // `decoded` should contain the user id and any other relevant info
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
