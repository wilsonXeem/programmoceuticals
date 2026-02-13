import { Router } from "express";
import { authRequired } from "../middleware/auth.js";
import { listDossiers, getDossier, createDossier, updateDossier } from "../controllers/dossierController.js";

const router = Router();

router.use(authRequired);
router.get("/", listDossiers);
router.post("/", createDossier);
router.get("/:id", getDossier);
router.put("/:id", updateDossier);

export default router;
