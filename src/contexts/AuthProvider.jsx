import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem("credentials"));

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);
      
      if(decoded.exp > now){
        setIsAuthenticated(true);
        localStorage.setItem("credentials", token);

        const timeout = (decoded.exp - now) * 1000;

        const timer = setTimeout(() => {
          setIsAuthenticated(false);
          setToken(null);
          localStorage.removeItem("credentials");
          toast.error("Your session has expired. Please login again");
        }, timeout)

        return () => clearTimeout(timer);

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
