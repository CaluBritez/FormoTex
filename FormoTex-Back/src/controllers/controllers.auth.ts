import { Request, Response } from 'express';
import { User } from '../models/model.user';
import bcrypt from 'bcryptjs';
import { generateJWT } from '../helpers/jwt';

export const crearUsuario = async(req: Request, res: Response) => {

  const { email, password } = req.body;

  try {

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json(
        { 
          ok: false,
          message: 'El email ya existe',
          error: 'El email ya existe'
        }
      );
    }
    user = new User(req.body);

    // Encriptar contrasena
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    // Generar el JWT
    const token = await generateJWT(user.id, user.name);


    res.status(201).json(
      { 
        ok: true,
        uid: user._id,
        name: user.name,
        token: token
      });
    
  } catch (error) {
    
    res.status(500).json(
      { 
        ok: false,
        message: 'Error al crear el usuario',
        error
      }
    );
  }
}

export const loginUsuario = async(req: Request, res: Response) => {

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json(
        { 
          ok: false,
          message: 'El usuario no existe',
          error: 'El usuario no existe'
        }
      );
    }

    // Revisar si el password es correcto
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json(
        { 
          ok: false,
          message: 'Password incorrecto',
          error: 'Password incorrecto'
        }
      );
    }

    // Generar el JWT
    const token = await generateJWT(user.id, user.name);

    res.json(
      { 
        ok: true,
        uid: user._id,
        name: user.name,
        token: token

      });
    
  } catch (error) {
    console.log(error);
    res.status(500).json(
      { 
        ok: false,
        message: 'Error al intentar logearte',
        error
      }
    );
  }

}

export const revalidarToken = (req: Request, res: Response) => {

  res.json(
    { 
      ok: true,
      message: 'renew'
    });
}