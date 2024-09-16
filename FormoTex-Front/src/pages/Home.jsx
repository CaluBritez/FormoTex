import { useAuthStore } from '../hooks/useAuthStore.js';


export const Home = () => {

  const {user, startLogout} = useAuthStore();

  return (
    <>

    <div>
      <h1>Bienvenido {user.name}</h1>
      <button className="boton-rosa" onClick={startLogout}>Cerrar sesión</button>
    </div>




    </>
  )
}
