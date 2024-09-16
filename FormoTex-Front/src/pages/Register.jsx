import './css/Register.css'
import Swal from 'sweetalert2';
import { useEffect } from 'react';

import { useForm } from '../hooks/useForm.js';
import {useAuthStore} from '../hooks/useAuthStore.js';


const registerForm = {
  name: '',
  email: '',
  password:'',
  passwordRepeat:''
}


export const Register = () => {

  const { name, email, password, passwordRepeat, onInputChange } = useForm(registerForm);
  const { errorMessage, startRegister} = useAuthStore();

  const registerSubmit = (event) => {

    event.preventDefault();

    if(password !== passwordRepeat){
      Swal.fire('Error en la autenticación', 'Las contraseñas no son iguales', 'error')
      return;
    }
    startRegister({ name: name, email: email, password: password });
  }
  useEffect(() => {
    if(errorMessage !== undefined){
      Swal.fire('Error al intentar registrar', errorMessage, 'error')
    }
  
  }, [errorMessage])

  return (
    <>
      <div className='box-body-main'>
        <div className='box-main-login-register'>

          <div className='box-logo'>
            <h2>FormoTex</h2>
          </div>
          <div className='div-box-form'>
            <h3>Registrarse</h3>
            <form id='form-register' className='box-form' action="" onSubmit={registerSubmit}>
              <div className='box-inputs'>

                <input
                  type="text"
                  placeholder='Ingrese su nombre'
                  required
                  name='name'
                  value={name}
                  onChange={onInputChange}  
                />

                  <input
                    type="email"
                    placeholder='Ingresa tu email, ejemplo: random@gmail.com'
                    required
                    name='email'
                    value={email}
                    onChange={onInputChange}
                  />

                  <input
                    type="password"
                    placeholder='Ingrese tu Contraseña'
                    required
                    name='password'
                    value={password}
                    onChange={onInputChange}
                  />

                  <input
                    type="password"
                    placeholder='Repita su Contraseña'
                    required
                    name='passwordRepeat'
                    value={passwordRepeat}
                    onChange={onInputChange}
                  />


                </div>
                <div className='box-form-button'>
                  <button className='boton-rosa'>Registrarse</button>
                </div>
            </form>
          </div>

        </div>
        
      </div>
    </>
  )
}
