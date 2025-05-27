import React from 'react'
import { Login } from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUp } from './pages/SignUp'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

