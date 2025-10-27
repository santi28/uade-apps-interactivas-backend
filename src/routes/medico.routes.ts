import express from "express";
import { getMedico, loginMedico } from "../controllers/medico.controller.js";

const router = express.Router();

// Ver perfil del médico
router.get("/", getMedico);

// Login médico / secretaria
router.post("/login", loginMedico);

export default router;
