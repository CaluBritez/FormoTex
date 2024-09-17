import { useDispatch, useSelector } from 'react-redux';
import formotexApi from '../api/formotexApi.js';
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store/auth/authSlice.js';
import {clearProducts} from '../store/product/productSlice.js';


export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector( state => state.auth );
  
  const dispatch = useDispatch();

  const startLogin = async( {email, password} ) => {
    
    dispatch( onChecking() );

    try { 
      const { data } = await formotexApi.post('/auth/login', { email, password });


      localStorage.setItem('token', data.token );
      localStorage.setItem('token-init-date', new Date().getTime() );

      dispatch( onLogin({ name: data.name, uid: data.uid }) );
      
    
    } catch (error) {
      dispatch( onLogout('Credenciales incorrectas') );
      setTimeout(() => {
        dispatch( clearErrorMessage() );
      }, 10);
      
      
    }
  }
  // INICIAR REGISTRO
  const startRegister = async( {name, email, password} ) => {

    dispatch( onChecking() );

    try {
      const { data } = await formotexApi.post('/auth/register', { name, email, password });
      console.log(data);

      localStorage.setItem('token', data.token );
      localStorage.setItem('token-init-date', new Date().getTime() );
      dispatch( onLogin({ name: data.name, uid: data.uid }) );

    } catch (error) {
        dispatch( onLogout(error.response.data?.message ||error.response.data.errors.password?.msg || 'Error al registrar') );
        setTimeout(() => {
          dispatch( clearErrorMessage() );
        }, 10);
    }
  }

  // Chekear autenticación
  const checkAuthToken = async() => {
    const token = localStorage.getItem('token');
    if ( !token ) return dispatch( onLogout() );
    try {

      const { data } = await formotexApi.get('/auth/renew');

      localStorage.setItem('token', data.token );
      localStorage.setItem('token-init-date', new Date().getTime() );
      dispatch( onLogin({ name: data.name, uid: data.uid }) );

    } catch (error) {
      localStorage.clear();
      dispatch( onLogout() );
    }}
  
  // LOGOUT
  const startLogout = () => {
    localStorage.clear();
    console.log('Logout pasa por aqui');
    
    dispatch( onLogout() );
    dispatch( clearProducts() );  // Limpia los productos
  }


  return (
    {
      status,
      user,
      errorMessage,

      startLogin,
      startRegister,
      startLogout,
      checkAuthToken
    }
  )
}
