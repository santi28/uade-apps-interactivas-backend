import express from "express";
import { getCitas, confirmarCita } from "../controllers/citas.controller.ts";

const router = express.Router();

// Obtener todas las citas
router.get("/", getCitas);

// Confirmar una cita
router.put("/:id/confirmar", confirmarCita);

export default router;
