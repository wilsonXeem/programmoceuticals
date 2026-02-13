import { Router } from "express";
import { authRequired, adminRequired } from "../middleware/auth.js";
import {
  listUsers,
  updateUserTier,
  addExportCredits,
  listPaymentRequests,
  updatePaymentRequest,
  listPaymentLogs,
  sendEmailToUsers,
  previewEmailTemplate
} from "../controllers/adminController.js";

const router = Router();

router.use(authRequired);
router.use(adminRequired);

router.get("/users", listUsers);
router.post("/users/tier", updateUserTier);
router.post("/users/credits", addExportCredits);
router.get("/payment-requests", listPaymentRequests);
router.get("/payment-logs", listPaymentLogs);
router.put("/payment-requests/:id", updatePaymentRequest);
router.post("/emails/preview", previewEmailTemplate);
router.post("/emails/send", sendEmailToUsers);

export default router;
