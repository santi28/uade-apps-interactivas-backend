import 'dotenv/config'
import express from "express";
import obraSocialRoutes from "./routes/obrasocial.routes";
import medicoRoutes from "./routes/medico.routes";
import pacienteRoutes from "./routes/paciente.routes";
import citaRoutes from "./routes/citas.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales del sistema
app.use("/obra-social", obraSocialRoutes);
app.use("/medico", medicoRoutes);
app.use("/paciente", pacienteRoutes);
app.use("/cita", citaRoutes);

// Endpoint de salud
app.get("/health", (_req, res) => {
  res.json({ status: "alive" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
