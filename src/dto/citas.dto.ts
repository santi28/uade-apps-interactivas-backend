export interface CrearCitaDTO {
  fecha: string;      // ISO 8601 string desde el front
  motivo: string;
  pacienteId: number;
  medicoId: number;
}

export interface ActualizarCitaDTO {
  fecha?: string;
  motivo?: string;
  pacienteId?: number;
  medicoId?: number;
}
