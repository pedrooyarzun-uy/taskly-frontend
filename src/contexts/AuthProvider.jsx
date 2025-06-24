import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem("credentials"));

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      
      if(decoded.exp > Math.floor(Date.now() / 1000)){
        setIsAuthenticated(true);
        localStorage.setItem("credentials", token);
      } else {
        setIsAuthenticated(false);
        setToken(null);
        localStorage.removeItem("credentials");
      }
    }
    
  }, [token]);


  
  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, setToken}}>
      {children}
    </AuthContext.Provider>
  )
}
