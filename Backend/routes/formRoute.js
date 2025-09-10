





import express from "express";
import { addForm, getForms } from "../controllers/formController.js";
import { checkAdmin } from "../middleware/checkToken.js";

const router = express.Router();

router.post("/add", checkAdmin, addForm);
router.get("/", checkAdmin, getForms);    // ✅ only logged in user can see his bookings

export default router;
