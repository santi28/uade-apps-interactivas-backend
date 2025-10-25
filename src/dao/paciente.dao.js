const pacientes = [
  { id: 1, paciente: "Juan Pérez", turno: "Lunes 10:00" },
  { id: 2, paciente: "Ana Gómez", turno: "Martes 14:00" },
];

export const pacienteDAO = {
  listarPacientes: () => pacientes,
  buscarPorId: (id) => pacientes.find((p) => p.id === id),
};
