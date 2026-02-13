import { Router } from "express";
import { authRequired } from "../middleware/auth.js";
import { createPaymentRequest } from "../controllers/adminController.js";

const router = Router();

router.use(authRequired);
router.post("/", createPaymentRequest);

export default router;
