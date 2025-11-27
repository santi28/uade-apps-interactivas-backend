import { citasService } from "../services/citas.service";

export const getCitas = async (req: any, res: any) => {
  try {
    const citas = await citasService.listar();
    res.json(citas);
  } catch (e) {
    res.status(500).json({ error: "Error listando citas" });
  }
};

export const getCita = async (req: any, res: any) => {
  try {
    const cita = await citasService.obtener(Number(req.params.id));
    res.json(cita);
  } catch (e) {
    res.status(500).json({ error: "Error obteniendo cita" });
  }
};

export const createCita = async (req: any, res: any) => {
  try {
    const cita = await citasService.crear(req.body);
    res.json(cita);
  } catch (e) {
    res.status(400).json({ error: "Error creando cita" });
  }
};

export const updateCita = async (req: any, res: any) => {
  try {
    const cita = await citasService.actualizar(
      Number(req.params.id),
      req.body
    );
    res.json(cita);
  } catch (e) {
    res.status(400).json({ error: "Error actualizando cita" });
  }
};

export const deleteCita = async (req: any, res: any) => {
  try {
    await citasService.eliminar(Number(req.params.id));
    res.json({ message: "Cita eliminada correctamente" });
  } catch (e) {
    res.status(400).json({ error: "Error eliminando cita" });
  }
};
