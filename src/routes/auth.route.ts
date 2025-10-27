import express from "express";

const router = express.Router();

router.post('/login', (req, res) => {
  res.json({
    jwt: 'JSON Web Token'
  })
})

export default router;