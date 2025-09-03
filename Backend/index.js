import "dotenv/config.js";  
import dotenv from "dotenv";          
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import formRoutes from "./routes/formRoute.js";
import flightRoutes from "./routes/flightRoute.js";
import amadeusRoute from "./routes/amadeusRoute.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());


connectDB();


app.use("/api/form", formRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/amadeus", amadeusRoute);


app.get("/", (req, res) => res.send("API is running 🚀"));


app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack || err);
  res.status(err.statusCode || 500).json({ success: false, message: err.message || "Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
