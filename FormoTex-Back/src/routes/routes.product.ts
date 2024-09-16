import { Router } from 'express';

import { crearProducto, mostrarProductos } from '../controllers/controllers.product';

const productRouter = Router();

productRouter.post('/create', crearProducto);
productRouter.get('/getProducts', mostrarProductos);

export { productRouter }