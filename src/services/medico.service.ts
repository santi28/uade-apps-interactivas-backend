import { medicoDAO } from "../dao/medico.dao";
import { CrearMedicoDTO, ActualizarMedicoDTO } from "../dto/medico.dto";

export const medicoService = {
  listar: () => medicoDAO.findAll(),
  obtener: (id: number) => medicoDAO.findById(id),
  crear: (data: CrearMedicoDTO) => medicoDAO.create(data),
  actualizar: (id: number, data: ActualizarMedicoDTO) =>
    medicoDAO.update(id, data),
  eliminar: (id: number) => medicoDAO.delete(id),

  login: async (usuario: string, password: string) => {
    const medico = await medicoDAO.findByUsuario(usuario);
    if (!medico) return null;
    return medico.password === password ? medico : null;
  },
};
