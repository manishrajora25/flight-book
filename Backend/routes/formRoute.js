

// import express from "express";
// import { addForm, getForms } from "../controllers/formController.js";

// const router = express.Router();

// router.post("/add", addForm);
// router.get("/", getForms);

// export default router;





import express from "express";
import { addForm, getForms } from "../controllers/formController.js";
import { checkAdmin } from "../middleware/checkToken.js";

const router = express.Router();

router.post("/add", checkAdmin, addForm); // ✅ only logged in user can book
router.get("/", checkAdmin, getForms);    // ✅ only logged in user can see his bookings

export default router;
