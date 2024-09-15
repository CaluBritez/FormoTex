import './css/Login.css'

export const Login = () => {
  return (
    <>
      <div id='box-body-main'>
        <div id='box-main-login'>
          <div id='box-logo'>
            <h2>FormoTex</h2>
          </div>
          <div id='box-form'>
            <form id='form-login' action="">
              <div id='box-inputs'>
                <label htmlFor="usuario">Email</label>
                <input
                  type="email"
                  placeholder='tuEmail@gmail.com'
                  required
                  id="usuario"
                />
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  placeholder='Ingrese su Contraseña'
                  required
                  id="password"
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
