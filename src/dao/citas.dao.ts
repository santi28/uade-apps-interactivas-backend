let citas = [
  { id: 1, paciente: "Juan Pérez", fecha: "2025-10-27", estado: "Solicitada" },
  { id: 2, paciente: "Laura Díaz", fecha: "2025-10-29", estado: "Solicitada" },
];

export const getAllCitas = () => citas;

export const updateCitaStatus = (id, nuevoEstado) => {
  const cita = citas.find((c) => c.id === id);
  if (cita) cita.estado = nuevoEstado;
  return cita;
};
