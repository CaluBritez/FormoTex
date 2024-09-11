import { body} from 'express-validator';
import { validarCampos } from '../../middlewares/validar-campos';


export const validateRegister = [
    body('name')
        .exists().withMessage('El nombre debe existir')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isString().withMessage('El nombre no es válido'),

    body('email')
        .exists().withMessage('El email debe existir')
        .notEmpty().withMessage("El email no puede estar vacío")
        .isEmail().withMessage("El email no es válido"),
        
    body('password')
        .exists().withMessage('La contraseña debe existir')
        .notEmpty().withMessage("La contraseña no puede estar vacío")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
        .isString().withMessage('La contraseña no es válida'),

    validarCampos
]

export const validateLogin = [
    body('email')
        .exists().withMessage('El email debe existir')
        .notEmpty().withMessage("El email no puede estar vacío")
        .isEmail().withMessage("El email no es válido"),
        
    body('password')
        .exists().withMessage('La contraseña debe existir')
        .notEmpty().withMessage("La contraseña no puede estar vacío")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
        .isString().withMessage('La contraseña no es válida'),
        
    validarCampos
]