import { Request, Response } from 'express';
import { Rol } from '../models/model.rol';

// -------  CREAR ROL  ---------------
export const crearRol = async(req: Request, res: Response) => {

  try {

    const rol = new Rol(req.body);

    await rol.save();

    res.status(201).json(
      { 
        ok: true,
        name: rol.rol,
        description: rol.description
      });
    
  } catch (error) {
    
    res.status(500).json(
      { 
        ok: false,
        message: 'Error al crear rol',
        error
      }
    );
  }
}