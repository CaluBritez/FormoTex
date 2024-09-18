import { Router } from 'express';

import { crearProducto, mostrarProductos, eliminarProducto } from '../controllers/controllers.product';

const productRouter = Router();

productRouter.post('/create', crearProducto);
productRouter.get('/getProducts', mostrarProductos);
productRouter.delete('/delete/:id', eliminarProducto);

export { productRouter }