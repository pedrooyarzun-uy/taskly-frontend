import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './contexts/AuthProvider'
import { Toaster } from 'react-hot-toast'

export const App = () => {
  
  

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes/>
        <Toaster/>
      </AuthProvider>
    </BrowserRouter>
  )
}

