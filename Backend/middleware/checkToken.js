// import jwt from "jsonwebtoken";
// import 'dotenv/config';


// export const checkAdmin = (req, res, next) => {
//   console.log(" hekwjw manish")
//   try {
//     const token = req.cookies.userToken;
//     if (!token) return res.status(401).json({ message: "No Token Found" });
//   // console.log(token)
//       const decoded = jwt.verify(token, process.env.jWT_SECRET);
//       req.user = decoded;
//       // req.role = decoded;
//       console.log( decoded)
//       next();
//     } catch (err) {
//       res.status(401).json({ message: "Invalid Token" });
//     }
//   };
  







import jwt from "jsonwebtoken";
import User from "../models/User.js";
import "dotenv/config";

export const checkAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.userToken;
    if (!token) {
      return res.status(401).json({ message: "No Token Found" });
    }

    const decoded = jwt.verify(token, process.env.jWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
