import { citasDAO } from "../dao/citas.dao";
import {
  CrearCitaDTO,
  ActualizarCitaDTO,
} from "../dto/citas.dto";

export const citasService = {
  listar: () => citasDAO.findAll(),

  obtener: (id: number) => citasDAO.findById(id),

  crear: (data: CrearCitaDTO) =>
    citasDAO.create({
      ...data,
      fecha: new Date(data.fecha), // convertir string → Date
    }),

  actualizar: (id: number, data: ActualizarCitaDTO) =>
    citasDAO.update(id, {
      ...data,
      fecha: data.fecha ? new Date(data.fecha) : undefined,
    }),

  eliminar: (id: number) => citasDAO.delete(id),
};
