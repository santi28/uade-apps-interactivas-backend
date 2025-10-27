import { obtenerMedico, autenticarMedico } from "../services/medico.service.js";

export const getMedico = (req, res) => {
  const medico = obtenerMedico();
  res.json(medico);
};

export const loginMedico = (req, res) => {
  const { usuario, password } = req.body;
  const autenticado = autenticarMedico(usuario, password);

  if (autenticado) {
    res.json({ mensaje: "Login exitoso" });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
};
