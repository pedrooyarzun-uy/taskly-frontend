import React, { useContext } from "react"
import { api } from "../api/axios/client.js"
import { AuthContext } from "../contexts/AuthProvider.jsx"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {

  const {setIsAuthenticated, setToken} = useContext(AuthContext);
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
        setToken(res.data.token)
        localStorage.setItem("credentials", res.data.token);
        localStorage.setItem("justLoggedIn", true);
        navigate("/home", {state: {
          loggedIn: true
        }});
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