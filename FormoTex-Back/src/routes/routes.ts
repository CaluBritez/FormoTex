import { Request, Response, Router } from 'express';
import { authRouter } from './routes.auth';

const router = Router();

router.get('/', (req:Request, res:Response) => res.send('Hello World'));

router.use('/auth', authRouter);

export { router }