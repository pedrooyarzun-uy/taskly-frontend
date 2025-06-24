import React, { useContext } from "react"
import { api } from "../api/axios/client.js"
import { AuthContext } from "../contexts/AuthProvider.jsx"
import { useNavigate } from "react-router-dom";

export const useAuth = () => {

  const {setIsAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

  const signUp = async (credentials) => {
    try {
      const res = await api.post("/sign-up", credentials)
      if (res.status == 200) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  const signIn = async(credentials) => {
    try {
      const res = await api.post("/sign-in", credentials);

      if (res.status == 200){
        setIsAuthenticated(true);
        navigate("/home")
        return {
          success: true,
          message: res.data.message
        };
      } else {
        return {
          success: false, 
          message: res.data.message
        };
      }

    } catch (err) {
      return {
        success: false,
        message: err.status == 401 ? (err.response?.data?.error) : "Something went wrong"
      };
    }
  }

  return {
    signUp,
    signIn
  }
}