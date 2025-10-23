import express from "express"

// Creo una instancia

const app = express()

const pacientes = [
        {
        id: 1,
        paciente: "...",
        turno: "..."
        },
        {
        id: 2,
        paciente: "...",
        turno: "..."
        }
    ];

    res.json(pacientes)

// petición y respuesta

app.get("/", (req,res) =>{

    res.send("<h1>Cita programada</h1>")

})

app.get("/paciente", (req,res) => {
    
       // llamar a base de datos que no fue creado
    // se crea un array de objetos
    const pacientes = [
        {
        id: 1,
        paciente: "...",
        turno: "..."
        },
        {
        id: 2,
        paciente: "...",
        turno: "..."
        }
    ];

    res.json(pacientes)

})

//Mismo procedimiento anterior para obtener pacientes por id

app.get("/paciente/:id", (req,res) => {
    const pacienteId = req.params.id
    console.log(typeof pacienteId)

    //método para buscar


})


// valor constante del host

const PORT = 3001

// Se "escucha" nuestra aplicación

app.listen(PORT, () => {
      console.log("Escuchando en https://localhost:3001")
})