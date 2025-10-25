import { getMedicoData } from "../dao/medico.dao.js";

export const obtenerMedico = () => {
  return getMedicoData();
};

export const autenticarMedico = (usuario, password) => {
  const medico = getMedicoData();
  return usuario === medico.usuario && password === medico.password;
};
