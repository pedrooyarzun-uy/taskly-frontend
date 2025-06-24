import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
  
  const { isAuthenticated } = useContext(AuthContext);
  
  return isAuthenticated ? children : <Navigate to="/login" replace/>
}
