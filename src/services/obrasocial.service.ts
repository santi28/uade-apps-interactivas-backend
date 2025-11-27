import { obraSocialDAO } from "../dao/obrasocial.dao";
import {
  CrearObraSocialDTO,
  ActualizarObraSocialDTO,
} from "../dto/obrasocial.dto";

export const obraSocialService = {
  listar: () => obraSocialDAO.findAll(),

  obtener: (id: number) => obraSocialDAO.findById(id),

  crear: (data: CrearObraSocialDTO) => obraSocialDAO.create(data),

  actualizar: (id: number, data: ActualizarObraSocialDTO) =>
    obraSocialDAO.update(id, data),

  eliminar: (id: number) => obraSocialDAO.delete(id),
};
