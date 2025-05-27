import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from '../contexts/AuthProvider'
import { Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';

export const PrivateRoutes = ({children}) => {
  
  const { isAuthenticated } = useContext(AuthContext);
  
  if (!isAuthenticated){
    console.log(isAuthenticated);
    return <Navigate to="/"/>
  }

  return children;
}
