import express from "express";
import pacienteRoutes from "./routes/paciente.routes.js";
import medicoRoutes from "./routes/medico.routes.js";
import citasRoutes from "./routes/citas.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Registrar rutas
app.use("/paciente", pacienteRoutes);
app.use("/medico", medicoRoutes);
app.use("/citas", citasRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
