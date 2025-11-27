import { pacienteDAO } from "../dao/paciente.dao";
import {
  CrearPacienteDTO,
  ActualizarPacienteDTO,
} from "../dto/paciente.dto";

export const pacienteService = {
  listar: () => pacienteDAO.findAll(),

  obtener: (id: number) => pacienteDAO.findById(id),

  crear: (data: CrearPacienteDTO) =>
    pacienteDAO.create(data),

  actualizar: (id: number, data: ActualizarPacienteDTO) =>
    pacienteDAO.update(id, data),

  eliminar: (id: number) => pacienteDAO.delete(id),
};
