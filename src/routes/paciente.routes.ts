import { Router } from "express";
import {
  getPacientes,
  getPaciente,
  createPaciente,
  updatePaciente,
  deletePaciente,
} from "../controllers/paciente.controller";

const router = Router();

router.get("/", getPacientes);
router.get("/:id", getPaciente);
router.post("/", createPaciente);
router.put("/:id", updatePaciente);
router.delete("/:id", deletePaciente);

export default router;
