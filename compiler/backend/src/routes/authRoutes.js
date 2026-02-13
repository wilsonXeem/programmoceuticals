import { Router } from "express";
import { signIn, signUp, me } from "../controllers/authController.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/me", authRequired, me);

export default router;
