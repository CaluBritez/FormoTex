import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  uid: string;
  name: string;
}


export const validarJwt = (req: Request, res: Response, next: any) => {

  // --- Lo voy a pedir como x-token en los headers
  const token = req.header('x-token');
  
  if (!token) {
    return res.status(401).json({
      ok: false,
      message: 'No hay token en la petición'
    });
  }
  const secret = process.env.SECRET_JWT_SEED;
  if (!secret) {
    throw new Error('SECRET_JWT_SEED is not defined');
  }



  try {

    const payload = jwt.verify(token, secret) as JwtPayload;
    const { uid, name } = payload;

    req.uid = uid;
    req.name = name;


  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: 'Token no valido'
    });
  }

  next();
  
}
