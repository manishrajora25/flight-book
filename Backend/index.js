import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import formRoutes from "./routes/formRoute.js";
import flightRoutes from "./routes/flightRoute.js";
import amadeusRoute from "./routes/amadeusRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();

// ✅ CORS — COOKIE SAFE VERSION
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:5173",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/form", formRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/amadeus", amadeusRoute);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ❌ Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ success: false, message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
