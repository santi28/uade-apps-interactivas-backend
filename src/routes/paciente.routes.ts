import { Router } from "express";
import { getPacientes, getPacienteById } from "../controllers/paciente.controller.js";

const router = Router();

// GET /paciente
router.get("/", getPacientes);

// GET /paciente/:id
router.get("/:id", getPacienteById);

export default router;
