import './css/Login.css'
import { useForm } from '../hooks/useForm.js';
import {useAuthStore} from '../hooks/useAuthStore.js';

const loginForm = {
  email: '',
  password:''
}

export const Login = () => {

  const { email, password, onInputChange } = useForm(loginForm);
  const { status, user, errorMessage, startLogin} = useAuthStore();


  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email:email, password:password });
  }

  

  return (
    <>
      <div id='box-body-main'>
        <div id='box-main-login'>
          <div id='box-logo'>
            <h2>FormoTex</h2>
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
                <p>¿No tienes cuenta? <a href="/register">Crear cuenta</a></p>
                
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
