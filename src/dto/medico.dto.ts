export interface CrearMedicoDTO {
  nombre: string;
  especialidad: string;
  usuario: string;
  password: string;
  email: string;
}

export interface ActualizarMedicoDTO {
  nombre?: string;
  especialidad?: string;
  usuario?: string;
  password?: string;
  email?: string;
}
