import { useDispatch, useSelector } from 'react-redux';
import formotexApi from '../api/formotexApi.js';


export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const startLogin = async( {email, password} ) => {
    console.log({email, password});

    try { 
      const response = await formotexApi.post('/auth/login', { email, password });
      console.log({response});
      
    
    } catch (error) {
      console.log({error});
      
      
    }
  }

  return (
    {
      status,
      user,
      errorMessage,

      startLogin
    }
  )
}
