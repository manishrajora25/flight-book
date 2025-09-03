

import express from "express";
import { addForm, getForms } from "../controllers/formController.js";

const router = express.Router();

router.post("/add", addForm);
router.get("/", getForms);

export default router;
