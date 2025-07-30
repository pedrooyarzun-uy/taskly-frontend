import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignUp } from '../pages/SignUp'
import { Login } from '../pages/Login'
import { PrivateRoutes } from './PrivateRoutes'
import { CheckEmail } from '../pages/CheckEmail'
import { PublicRoutes } from './PublicRoutes'
import { VerifyAccount } from '../pages/VerifyAccount'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={
        <Navigate to="/login"/>
      }/>
      <Route path='/login' element={
        <PublicRoutes>
          <Login/>
        </PublicRoutes>
      }/>
      <Route path='/sign-up' element={
        <PublicRoutes>
          <SignUp/>
        </PublicRoutes>
      }/>
      <Route path='/check-email' element={
        <PublicRoutes>
          <CheckEmail/>
        </PublicRoutes>
      }/>
      <Route path='/verify-account' element={
        <PublicRoutes>
          <VerifyAccount/>
        </PublicRoutes>
      }>

      </Route>
      <Route path='/home' element={
        <PrivateRoutes>
          <Home/>
        </PrivateRoutes>
      }/>
    </Routes>
  )
}
