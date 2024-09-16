import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '../pages/Home.jsx';
import { Login } from '../pages/Login.jsx';
import { Register } from '../pages/Register.jsx';
import { useAuthStore } from '../hooks/useAuthStore.js';

export const AppRouter = () => {
  
  //const authStatus = 'not-authenticated'; // Cambia este valor para probar

  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])
  

  if ( status === 'checking' ) {
    return <div>Loading...</div>;
  }
  
  
  return (
    <Routes>
      { status === 'not-authenticated' ? (
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
