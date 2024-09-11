import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

export const generateToken = (userId) => jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
