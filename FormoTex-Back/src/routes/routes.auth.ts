import { Router } from 'express';
import { validateRegister, validateLogin } from '../models/schema/schema.user';

import { crearUsuario, loginUsuario } from '../controllers/controllers.auth';

const authRouter = Router();

authRouter.post('/register',validateRegister , crearUsuario);
authRouter.post('/login',validateLogin ,loginUsuario);


export { authRouter }