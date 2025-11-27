import { medicoService } from "../services/medico.service";

export const getMedicos = async (req: any, res: any) => {
  res.json(await medicoService.listar());
};

export const getMedico = async (req: any, res: any) => {
  res.json(await medicoService.obtener(Number(req.params.id)));
};

export const crearMedico = async (req: any, res: any) => {
  res.json(await medicoService.crear(req.body));
};

export const actualizarMedico = async (req: any, res: any) => {
  res.json(
    await medicoService.actualizar(Number(req.params.id), req.body)
  );
};

export const eliminarMedico = async (req: any, res: any) => {
  await medicoService.eliminar(Number(req.params.id));
  res.json({ message: "Eliminado" });
};

export const loginMedico = async (req: any, res: any) => {
  const { usuario, password } = req.body;
  const medico = await medicoService.login(usuario, password);

  if (!medico) return res.status(401).json({ error: "Credenciales inválidas" });

  res.json({ message: "Login exitoso", medico });
};
