import React from 'react'
import { Login } from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './contexts/AuthProvider'

export const App = () => {
  
  

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </BrowserRouter>
  )
}

