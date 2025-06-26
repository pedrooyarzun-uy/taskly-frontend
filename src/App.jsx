import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './contexts/AuthProvider'
import { Toaster } from 'react-hot-toast'

export const App = () => {
  
  console.log(import.meta.env.VITE_BACKEND_URL);

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes/>
        <Toaster/>
      </AuthProvider>
    </BrowserRouter>
  )
}

