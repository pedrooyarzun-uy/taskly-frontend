import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from '../contexts/AuthProvider'
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
  
  const { isAuthenticated } = useContext(AuthContext);
  
  return isAuthenticated ? children : <Navigate to="/" replace/>
}
