import { Request, Response } from 'express';

export const crearUsuario = (req: Request, res: Response) => {

  const { name, email, password } = req.body;

  res.status(201).json(
    { 
      ok: true,
      message: 'Se ha creado el usuario',
      name,
      email,
      password
    });
  
}

export const loginUsuario = (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.json(
    { 
      ok: true,
      message: 'Se ha logueado el usuario',
      email,
      password
    });
}