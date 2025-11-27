import { obraSocialService } from "../services/obrasocial.service";

export const getObrasSociales = async (req: any, res: any) => {
  try {
    const obras = await obraSocialService.listar();
    res.json(obras);
  } catch (e) {
    res.status(500).json({ error: "Error listando obras sociales" });
  }
};

export const getObraSocial = async (req: any, res: any) => {
  try {
    const obra = await obraSocialService.obtener(Number(req.params.id));
    res.json(obra);
  } catch (e) {
    res.status(500).json({ error: "Error obteniendo obra social" });
  }
};

export const createObraSocial = async (req: any, res: any) => {
  try {
    const obra = await obraSocialService.crear(req.body);
    res.json(obra);
  } catch (e) {
    res.status(400).json({ error: "Error creando obra social" });
  }
};

export const updateObraSocial = async (req: any, res: any) => {
  try {
    const obra = await obraSocialService.actualizar(
      Number(req.params.id),
      req.body
    );
    res.json(obra);
  } catch (e) {
    res.status(400).json({ error: "Error actualizando obra social" });
  }
};

export const deleteObraSocial = async (req: any, res: any) => {
  try {
    await obraSocialService.eliminar(Number(req.params.id));
    res.json({ message: "Eliminada correctamente" });
  } catch (e) {
    res.status(400).json({ error: "Error eliminando obra social" });
  }
};
