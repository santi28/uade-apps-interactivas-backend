import { Router } from "express";
import {
  getObrasSociales,
  getObraSocial,
  createObraSocial,
  updateObraSocial,
 deleteObraSocial,
} from "../controllers/obrasocial.controller";

const router = Router();

router.get("/", getObrasSociales);
router.get("/:id", getObraSocial);
router.post("/", createObraSocial);
router.put("/:id", updateObraSocial);
router.delete("/:id", deleteObraSocial);

export default router;
