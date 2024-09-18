import { Router } from 'express';

import { crearProducto, mostrarProductos, eliminarProducto , editarProducto} from '../controllers/controllers.product';

const productRouter = Router();

productRouter.post('/create', crearProducto);
productRouter.get('/getProducts', mostrarProductos);
productRouter.delete('/delete/:id', eliminarProducto);
productRouter.put('/edit/:id', editarProducto);

export { productRouter }