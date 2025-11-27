import { Router } from "express";
import {
  getMedicos,
  getMedico,
  crearMedico,
  actualizarMedico,
  eliminarMedico,
  loginMedico
} from "../controllers/medico.controller";

const router = Router();

router.get("/", getMedicos);
router.get("/:id", getMedico);
router.post("/", crearMedico);
router.put("/:id", actualizarMedico);
router.delete("/:id", eliminarMedico);

router.post("/login", loginMedico);

export default router;
