import { pacienteDAO } from "../dao/paciente.dao.js";

export const pacienteService = {
  obtenerPacientes: () => pacienteDAO.listarPacientes(),

  obtenerPacientePorId: (id) => pacienteDAO.buscarPorId(id),
};
