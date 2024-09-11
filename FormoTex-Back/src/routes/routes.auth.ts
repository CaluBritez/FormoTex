import { Router } from 'express';

import { crearUsuario, loginUsuario } from '../controllers/controllers.auth';

const authRouter = Router();

authRouter.post('/register', crearUsuario);
authRouter.post('/login', loginUsuario);

export { authRouter }