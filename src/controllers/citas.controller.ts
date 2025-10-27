import { obtenerCitas, actualizarCita } from "../services/citas.service.js";

export const getCitas = (req, res) => {
  const citas = obtenerCitas();
  res.json(citas);
};

export const confirmarCita = (req, res) => {
  const { id } = req.params;
  const cita = actualizarCita(parseInt(id), "Confirmada");
  res.json({ mensaje: "Cita confirmada", cita });
};
