import { Router } from "express";
import { authRequired } from "../middleware/auth.js";
import { initializePayment, listPaymentPackages, verifyPayment } from "../controllers/paymentController.js";

const router = Router();

router.use(authRequired);
router.get("/packages", listPaymentPackages);
router.post("/initialize", initializePayment);
router.get("/verify/:reference", verifyPayment);

export default router;
