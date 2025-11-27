export interface CrearPacienteDTO {
  nombre: string;
  apellido: string;
  dni: string;
  telefono?: string;
  email?: string;
}

export interface ActualizarPacienteDTO {
  nombre?: string;
  apellido?: string;
  dni?: string;
  telefono?: string;
  email?: string;
  activo?: boolean;
}
