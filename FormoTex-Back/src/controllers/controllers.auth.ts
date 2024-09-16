import { Request, Response } from 'express';
import { User } from '../models/model.user';
import bcrypt from 'bcryptjs';
import { generateJWT } from '../helpers/jwt';

// -------  CREAR USUARIO  ---------------
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

    // Encriptar contraseña
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

// -------  LOGEAR USUARIO  ---------------
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

// -------  REVALIDAR TOKEN  ---------------
export const revalidarToken =  async(req: Request, res: Response) => {

  const uid = req.uid as string;
  const name = req.name as string;

  console.log('uid: ', uid);
  console.log('name: ', name);
  

  // Generar el JWT
  
  const token = await generateJWT(uid, name)
  console.log('token: ', token);
  

  res.json(
    { 
      ok: true,
      uid: uid,
      name: name,
      token: token
    });
};

// -------  MOSTRAR USUARIOS  ---------------

export const mostrarUsuarios = async(req: Request, res: Response) => {

  try {
    const usuarios = await User.find();
    res.json(usuarios);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};