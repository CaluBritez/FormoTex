import { Request, Response } from 'express';
import { User } from '../models/model.user';

export const crearUsuario = async(req: Request, res: Response) => {

  const user = new User(req.body);

  await user.save();

  res.status(201).json(
    { 
      ok: true,
      message: 'Se ha creado el usuario',
      user
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