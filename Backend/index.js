// import "dotenv/config.js";  
// import dotenv from "dotenv";          
// import express from "express";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import formRoutes from "./routes/formRoute.js";
// import flightRoutes from "./routes/flightRoute.js";
// import amadeusRoute from "./routes/amadeusRoute.js";

// const app = express();

// dotenv.config();

// app.use(cors());
// app.use(express.json());


// connectDB();


// app.use("/api/form", formRoutes);
// app.use("/api/flights", flightRoutes);
// app.use("/api/amadeus", amadeusRoute);


// app.get("/", (req, res) => res.send("API is running 🚀"));


// app.use((err, req, res, next) => {
//   console.error("❌ Error:", err.stack || err);
//   res.status(err.statusCode || 500).json({ success: false, message: err.message || "Server Error" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));






// import "dotenv/config.js";  
// import dotenv from "dotenv";          
// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import connectDB from "./config/db.js";
// import formRoutes from "./routes/formRoute.js";
// import flightRoutes from "./routes/flightRoute.js";
// import amadeusRoute from "./routes/amadeusRoute.js";
// import userRrouter from "./routes/userRoute.js";
// // import router from "./routes/formRoute.js";


// const app = express();

// dotenv.config();

// // Allowed origins
// const allowedOrigins = [
//   process.env.FRONTEND_URL,
//   "http://localhost:5173", 
  
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true, 
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// connectDB();

// app.use("/api/form", formRoutes);
// app.use("/api/flights", flightRoutes);
// app.use("/api/amadeus", amadeusRoute);

// app.use("/user", userRrouter);

// app.get("/", (req, res) => res.send("API is running 🚀"));

// app.use((err, req, res, next) => {
//   console.error("❌ Error:", err.stack || err);
//   res.status(err.statusCode || 500).json({ success: false, message: err.message || "Server Error" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));










import "dotenv/config.js";  
import dotenv from "dotenv";          
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import formRoutes from "./routes/formRoute.js";
import flightRoutes from "./routes/flightRoute.js";
import amadeusRoute from "./routes/amadeusRoute.js";
import userRrouter from "./routes/userRoute.js";

const app = express();

dotenv.config();

// Allowed origins
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173", 
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());   // ✅ Add this line

connectDB();

app.use("/api/form", formRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/amadeus", amadeusRoute);
app.use("/user", userRrouter);

app.get("/", (req, res) => res.send("API is running 🚀"));

app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack || err);
  res.status(err.statusCode || 500).json({ success: false, message: err.message || "Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
