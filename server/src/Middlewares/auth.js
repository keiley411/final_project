import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// generate token with jwt
const SECRET_KEY = process.env.SECRET_KEY;
const generateToken = (user_id) => {
  const payload = {
    id: user_id,
  };
  const expiresIn = "1h";
  return jwt.sign(payload, SECRET_KEY, { expiresIn: 60 * 60  });
};

// verify token with jwt.verify
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to verify");
  }
};

// generateHashedPassword with bcrypt.hash then salt with bcrypt.gensalt
const generateHashedPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const HashedPassword = await bcrypt.hash(password, salt);
    return HashedPassword;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const comparePassword = async (password, HashedPassword) => {
  try {
    return await bcrypt.compare(password, HashedPassword);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export { generateToken, verifyToken, generateHashedPassword, comparePassword };
