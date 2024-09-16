import { Request, Response } from 'express';
import { Product } from '../models/model.product';

// -------  CREAR PRODUCTO  ---------------
export const crearProducto = async(req: Request, res: Response) => {

  try {

    const product = new Product(req.body);

    await product.save();

    res.status(201).json(
      { 
        ok: true,
        name: product.name,
        description: product.description
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

// -------  MOSTRAR PRODUCTOS  ---------------
export const mostrarProductos = async(req: Request, res: Response) => {

  try {
    const products = await Product.find();
    res.json(products);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};