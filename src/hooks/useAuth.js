import React from "react"
import {login as loginService, signup as signUpService} from "../api/services/auth.js"

export const useAuth = () => {
  
  const login = async (credentials) => {
    // try {
    //   const userData = await loginService(credentials);
    // }
  }

  const signUp = async (credentials) => {
    console.log(credentials)
    try {
      const res = await signUpService(credentials);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return {
    signUp
  }
}