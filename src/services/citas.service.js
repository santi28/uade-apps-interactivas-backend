import { getAllCitas, updateCitaStatus } from "../dao/citas.dao.js";

export const obtenerCitas = () => {
  return getAllCitas();
};

export const actualizarCita = (id, estado) => {
  return updateCitaStatus(id, estado);
};
