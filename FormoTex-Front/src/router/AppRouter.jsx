import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { Login } from '../pages/Login.jsx';
import { Register } from '../pages/Register.jsx';

export const AppRouter = () => {
  
  const authStatus = 'not-authenticated'; // Cambia este valor para probar
  
  return (
    <Routes>
      { authStatus === 'not-authenticated' ? (
        <>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}
