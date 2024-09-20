import { Router } from 'express';

import { crearProducto, mostrarProductos, eliminarProducto , editarProducto, obtenerProductoPorId} from '../controllers/controllers.product';

const productRouter = Router();

productRouter.post('/create', crearProducto);
productRouter.get('/getProducts', mostrarProductos);
productRouter.delete('/delete/:id', eliminarProducto);
productRouter.put('/edit/:id', editarProducto);
productRouter.get('/get/:id', obtenerProductoPorId);

export { productRouter }