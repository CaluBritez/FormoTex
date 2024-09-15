import './css/Register.css'


export const Register = () => {
  return (
    <>
      <div className='box-body-main'>
        <div className='box-main-login-register'>

          <div className='box-logo'>
            <h2>FormoTex</h2>
          </div>
          <div className='div-box-form'>
            <h3>Registrarse</h3>
            <form id='form-register' className='box-form' action="">
              <div className='box-inputs'>

                <input
                  type="text"
                  placeholder='Ingrese su nombre'
                  required
                  id="name"
                />

                  <input
                    type="email"
                    placeholder='Ingresa tu email, ejemplo: random@gmail.com'
                    required
                    id="email"
                  />

                  <input
                    type="password"
                    placeholder='Ingrese tu Contraseña'
                    required
                    id="password"
                  />

                  <input
                    type="password"
                    placeholder='Repita su Contraseña'
                    required
                    id="password-repeat"
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
