import './css/Home.css'

import { useAuthStore } from '../hooks/useAuthStore.js';

export const Home = () => {

  const {user, startLogout} = useAuthStore();

  return (
    <>
    <div id='box-body'>
      <div id='box-onlogin'>
        <h1>Bienvenido {user.name}</h1>
        <button className="boton-rosa" onClick={startLogout}>Cerrar sesión</button>
      </div>
      <div id='box-container-products'>
        <div id='box-add-product'>
          <button className="boton-rosa">Crear Producto</button>
        </div>
        <div id='box-products'>
          <div id='box-product'>
            <p>name</p>
            <p>code</p>
            <p>estado</p>
            <p>ubicacion</p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
