export interface CrearObraSocialDTO {
  nombre: string;
  codigoInterno?: string | null;
}

export interface ActualizarObraSocialDTO {
  nombre?: string;
  codigoInterno?: string | null;
  activo?: boolean;
}
