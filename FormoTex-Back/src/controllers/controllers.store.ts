import { Request, Response } from 'express';
import { Store } from '../models/model.store';

// -------  CREAR STORE  ---------------
export const crearAlmacen = async(req: Request, res: Response) => {

  try {

    const store = new Store(req.body);

    await store.save();

    res.status(201).json(
      { 
        ok: true,
        name: store.name,
        location: store.location
      });
    
  } catch (error) {
    
    res.status(500).json(
      { 
        ok: false,
        message: 'Error al crear Almacen',
        error
      }
    );
  }
}