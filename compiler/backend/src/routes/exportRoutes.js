import { Router } from "express";
import { authRequired } from "../middleware/auth.js";
import { requestExport } from "../controllers/exportController.js";

const router = Router();

router.use(authRequired);
router.post("/", requestExport);

export default router;
