import { Request, Response, Router } from 'express';
import { authRouter } from './routes.auth';
import { productRouter } from './routes.product';

import { mostrarUsuarios } from '../controllers/controllers.auth';
import { crearRol } from '../controllers/controllers.rol';
import { crearAlmacen } from '../controllers/controllers.store';

const router = Router();

router.get('/', (req:Request, res:Response) => res.send('Hello World'));

// Autenticacion y Usuarios
router.use('/auth', authRouter);
router.get('/users', mostrarUsuarios);

// Roles
router.post('/rolCreate', crearRol);
// Almacenes
router.post('/storeCreate', crearAlmacen);

// Productos
router.use('/product', productRouter);

export { router }