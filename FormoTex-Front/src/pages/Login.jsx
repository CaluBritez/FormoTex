import { useEffect } from 'react';
import './css/Login.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { useForm } from '../hooks/useForm.js';
import {useAuthStore} from '../hooks/useAuthStore.js';

const loginForm = {
  email: '',
  password:''
}

export const Login = () => {

  const { email, password, onInputChange } = useForm(loginForm);
  const { errorMessage, startLogin} = useAuthStore();


  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email:email, password:password });
  }

  useEffect(() => {
    if(errorMessage !== undefined){
      Swal.fire('Error en la autenticación', errorMessage, 'error')
    }
  
  }, [errorMessage])
  

  return (
    <>
      <div id='box-body-main'>
        <div id='box-main-login'>
          <div id='box-logo'>
            <Link to="/auth/login">
              <h2>FormoTex</h2>
            </Link>
          </div>
          <div id='box-form'>
            <form id='form-login' action="" onSubmit={loginSubmit}>
              <div id='box-inputs'>
                <label htmlFor="usuario">Email</label>
                <input
                  type="email"
                  placeholder='tuEmail@gmail.com'
                  required
                  name='email'
                  value={email}
                  onChange={onInputChange}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  placeholder='Ingrese su Contraseña'
                  required
                  name='password'
                  value={password}
                  onChange={onInputChange}
                />
              </div>
              <div id='box-registrarse'>
                <p>¿No tienes cuenta? <Link to="/auth/register">Crear cuenta</Link></p>
                
              </div>
              <div id='box-form-button'>
                <button className='boton-rosa'>Ingresar</button>
              </div>
            </form>
          </div>

        </div>
        
      </div>
    </>
  )
}
