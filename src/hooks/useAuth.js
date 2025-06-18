import React from "react"
import { api } from "../api/axios/client.js"

export const useAuth = () => {

  const signUp = async (credentials) => {
    console.log(credentials)
    try {
      const res = await api.post("/sign-up", credentials)
      if (res.status == 200) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  return {
    signUp
  }
}