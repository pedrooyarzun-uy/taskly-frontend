import React from "react"
import { api } from "../api/axios/client.js"

export const useAuth = () => {

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
        message: 'Something went wrong'
      };
    }
  }

  return {
    signUp,
    signIn
  }
}