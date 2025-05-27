import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignUp } from '../pages/SignUp'
import { Login } from '../pages/Login'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/home' element={
        <PrivateRoutes>
          <Home/>
        </PrivateRoutes>
      }/>
    </Routes>
  )
}
