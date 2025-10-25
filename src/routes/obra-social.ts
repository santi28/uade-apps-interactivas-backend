import express from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// CURD
// Create, Read, Update, Delete

// /api/obra-social -> Listado de obras sociales (prefix se fija en el app.js)

// Listar todas las obras sociales
router.get('/', (req, res) => {
  res.json({
    message: 'Retorna el listado de todas las obras sociales en el sistema'
  })
});

// Crear una nueva obra social
router.post('/', async (req, res) => {
  const { name } = req.body;
  
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'El nombre es obligatorio' });

  const insuranceCode = name.toUpperCase().substring(0, 3); // Código de seguro generado automáticamente
  const isActive = true; // Valor por defecto

  const obraSocial = await prisma.obraSocial.create({
    data: {
      nombre: name,
      codigoInterno: insuranceCode,
      activo: isActive
    }
  })

  res.json({
    data: obraSocial,
  })
});

// Modificar una obra social existente
router.put('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Modifica la obra social con id: ${id} en el sistema`
  })
});
// router.patch(); -> Indica que se modifica solo una parte del objeto (casi ni se usa en la vida real xD)

// Eliminar una obra social
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Elimina la obra social con id: ${id} del sistema`
  })
  
});

export default router;