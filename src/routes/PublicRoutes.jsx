import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';

export const PublicRoutes = ({children}) => {

  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to='/home'/> : children
}
