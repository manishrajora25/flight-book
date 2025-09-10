

// routes/flightRoute.js
import express from "express";
import { getflight, searchFlights } from "../controllers/flightController.js";

const router = express.Router();

// POST /api/flights/search  <-- uses request body (recommended)
router.post("/search", searchFlights);
router.get("/" ,getflight)

export default router;
