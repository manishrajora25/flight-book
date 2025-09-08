import express from "express";

import { loginUser,logoutUser,registerUser } from "../controllers/userController.js";


import { checkAdmin } from "../middleware/checkToken.js";

const router = express.Router();
router.post("/login", loginUser);
router.post("/register", registerUser);

router.get("/checkToken", checkAdmin, (req, res) => {
  console.log("hello sir")
    res.json({ User: req.user });
  });
  

router.post("/logout", logoutUser);


export default router;  






// import express from "express";
// import { loginUser, logoutUser, registerUser } from "../controllers/userController.js";
// import { checkAdmin } from "../middleware/checkToken.js";

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);

// router.get("/checkToken", checkAdmin, (req, res) => {
//   res.json({ User: req.user });
// });

// export default router;
