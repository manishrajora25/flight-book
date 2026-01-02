import jwt from "jsonwebtoken";
import User from "../models/User.js";
import "dotenv/config";

export const checkAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.userToken; // cookie se token lo
    if (!token) {
      return res.status(401).json({ message: "No Token Found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }


    console.log("TOKEN FROM COOKIE:", req.cookies.userToken);
console.log("SECRET FROM ENV:", process.env.JWT_SECRET);


    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
