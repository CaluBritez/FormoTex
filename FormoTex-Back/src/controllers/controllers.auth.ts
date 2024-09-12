import { Request, Response } from 'express';
import { User } from '../models/model.user';

export const crearUsuario = async(req: Request, res: Response) => {

  const { email, password } = req.body;

  try {

    //const user = new User(req.body);
    //await user.save();

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json(
        { 
          ok: false,
          message: 'El email ya existe',
          error: 'El email ya existe'
        }
      );
    }
    user = new User(req.body);
    await user.save();

    res.status(201).json(
      { 
        ok: true,
        message: 'Se ha creado el usuario',
        user
      });
    
  } catch (error) {
    
    res.status(500).json(
      { 
        ok: false,
        message: 'Error al crear el usuario',
        error
      }
    );
  }
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