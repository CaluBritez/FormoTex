import { Router } from 'express';
import { validateRegister, validateLogin } from '../models/schema/schema.user';

import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/controllers.auth';

import { validarJwt } from '../middlewares/validar-jwt';

const authRouter = Router();

authRouter.post('/register', validateRegister, crearUsuario);
authRouter.post('/login', validateLogin, loginUsuario);
authRouter.get('/renew', validarJwt, revalidarToken);


export { authRouter }