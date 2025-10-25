import { pacienteService } from "../services/paciente.service.js";

export const getPacientes = (req, res) => {
  const pacientes = pacienteService.obtenerPacientes();
  res.json(pacientes);
};

export const getPacienteById = (req, res) => {
  const id = parseInt(req.params.id);
  const paciente = pacienteService.obtenerPacientePorId(id);

  if (paciente) {
    res.json(paciente);
  } else {
    res.status(404).json({ message: "Paciente no encontrado" });
  }
};
