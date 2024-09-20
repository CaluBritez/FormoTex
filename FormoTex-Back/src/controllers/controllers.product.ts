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
        code_product: product.code_product,
        description: product.description,
        state: product.state,
        starting_date: product.starting_date,
        store: product.store
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

// -------  ELIMINAR PRODUCTO  ---------------
export const eliminarProducto = async(req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ ok: false, message: 'Producto no encontrado' });
    }

    await Product.findByIdAndDelete(id);
    
    res.status(200).json({ 
      ok: true,
      message: 'Producto eliminado correctamente'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
};

// -------  EDITAR PRODUCTO  ---------------
export const editarProducto = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Buscamos el producto por su ID
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ ok: false, message: 'Producto no encontrado' });
    }

    // Actualizamos los campos del producto con los datos que vienen en el body de la petición
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({
      ok: true,
      message: 'Producto actualizado correctamente',
      product: updatedProduct, // Devolvemos el producto actualizado
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: 'Error al actualizar el producto' });
  }
};
// -------  OBTENER PRODUCTO POR ID  ---------------
export const obtenerProductoPorId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Buscamos el producto por su ID
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ ok: false, message: 'Producto no encontrado' });
    }

    // Devolvemos la información del producto encontrado
    res.status(200).json({
      ok: true,
      product
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, message: 'Error al obtener el producto' });
  }
};