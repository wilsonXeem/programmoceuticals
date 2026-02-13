import { Router } from "express";
import { authRequired } from "../middleware/auth.js";
import { updateAccount } from "../controllers/accountController.js";

const router = Router();

router.use(authRequired);
router.put("/", updateAccount);

export default router;
