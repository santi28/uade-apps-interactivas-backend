import express from "express";
// import pacienteRoutes from "./routes/paciente.routes.js";
// import medicoRoutes from "./routes/medico.routes.js";
// import citasRoutes from "./routes/citas.routes.js";

import obraSocialRoutes from "./routes/obra-social";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos de formularios

// Registrar rutas
app.use('/obra-social', obraSocialRoutes);

// app.use("/paciente", pacienteRoutes);
// app.use("/medico", medicoRoutes);
// app.use("/citas", citasRoutes);

// establece una respuesta en json --> 2 valores (Status y tiempo de vida)
app.get('/health', (req, res) => {
  res.json({
    status: 'alive',
  })
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
