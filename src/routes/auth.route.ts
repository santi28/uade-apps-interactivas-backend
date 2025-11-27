import express from "express";

const router = express.Router();

router.post('/login', (req: any, res: any) => {
  res.json({
    jwt: 'JSON Web Token'
  })
})

export default router;