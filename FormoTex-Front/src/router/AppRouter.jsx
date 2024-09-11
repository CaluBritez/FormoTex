import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { Login } from '../pages/Login.jsx';
import { Register } from '../pages/Register.jsx';

export const AppRouter = () => {

  const authStatus = 'authenticated'

  return (

    <Routes>
      {

        ( authStatus === 'not-authenticated' )
          ?<Route path="/auth/*" element={<Login />} />
          :<Route path="/*" element={<Home />} />

      }
      <Route path="/auth/register" element={<Register />} />

      <Route path="/*" element={ <Navigate to="/auth/login" />} />



    </Routes>
  )
}
