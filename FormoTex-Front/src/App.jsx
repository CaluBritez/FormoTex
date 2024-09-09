import './App.css'

function App() {


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
              <div id='box-form-button'>
                <button>Ingresar</button>
              </div>
            </form>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
