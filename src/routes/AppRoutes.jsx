import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignUp } from '../pages/SignUp'
import { Login } from '../pages/Login'
import { PrivateRoutes } from './PrivateRoutes'
import { CheckEmail } from '../pages/CheckEmail'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/test' element={<Home/>}/>
      <Route path='/check-email' element={<CheckEmail/>}/>
      <Route path='/home' element={
        <PrivateRoutes>
          <Home/>
        </PrivateRoutes>
      }/>
    </Routes>
  )
}
