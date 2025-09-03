// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import formRoutes from "./routes/formRoute.js";
// import flightRoutes from "./routes/flightRoute.js"; 
// import amadeusRoute from "./routes/amadeusRoute.js";// ⬅️ .js extension zaruri hai

// dotenv.config();

// const app = express();


// app.use(cors());
// app.use(express.json());


// connectDB();

// app.use("/api/form", formRoutes);
// app.use("/api/flights", flightRoutes);
// app.use("/api/amadeus", amadeusRoute);

// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





// index.js
import "dotenv/config.js";  
import dotenv from "dotenv";           // <-- ensures process.env is populated before other imports
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

// Connect DB (you can await if you make connectDB return a promise)
connectDB();

// Routes
app.use("/api/form", formRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/amadeus", amadeusRoute);

// quick health check
app.get("/", (req, res) => res.send("API is running 🚀"));

// error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack || err);
  res.status(err.statusCode || 500).json({ success: false, message: err.message || "Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
