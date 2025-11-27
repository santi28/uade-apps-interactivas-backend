import { pacienteService } from "../services/paciente.service";

export const getPacientes = async (req: any, res: any) => {
  try {
    const pacientes = await pacienteService.listar();
    res.json(pacientes);
  } catch (e) {
    res.status(500).json({ error: "Error listando pacientes" });
  }
};

export const getPaciente = async (req: any, res: any) => {
  try {
    const paciente = await pacienteService.obtener(Number(req.params.id));
    res.json(paciente);
  } catch (e) {
    res.status(500).json({ error: "Error obteniendo paciente" });
  }
};

export const createPaciente = async (req: any, res: any) => {
  try {
    const paciente = await pacienteService.crear(req.body);
    res.json(paciente);
  } catch (e) {
    res.status(400).json({ error: "Error creando paciente" });
  }
};

export const updatePaciente = async (req: any, res: any) => {
  try {
    const paciente = await pacienteService.actualizar(
      Number(req.params.id),
      req.body
    );
    res.json(paciente);
  } catch (e) {
    res.status(400).json({ error: "Error actualizando paciente" });
  }
};

export const deletePaciente = async (req: any, res: any) => {
  try {
    await pacienteService.eliminar(Number(req.params.id));
    res.json({ message: "Paciente eliminado correctamente" });
  } catch (e) {
    res.status(400).json({ error: "Error eliminando paciente" });
  }
};
