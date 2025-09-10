


import express from "express";
import { getflight, searchFlights } from "../controllers/flightController.js";

const router = express.Router();


router.post("/search", searchFlights);
router.get("/" ,getflight)

export default router;
