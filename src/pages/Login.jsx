import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { MadeWith } from '../components/MadeWith'
import { InputPassword } from '../components/InputPassword'
import { Divider } from '../components/Divider'
import { Link, Navigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export const Login = () => {

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-zinc-50'>
        <div className='bg-white text-black p-6 rounded-xl shadow-lg shadow-gray-300 w-96'>
          <h1 className='text-2xl font-bold mb-4 text-center'>Sign in</h1>
          <div className='flex-col mb-2'>
            <div className='mb-4'>
              <Input type='text' placeholder="Email"/>
            </div>
            <div className='mb-4'>
              <InputPassword text="Password"/>
            </div>
            <Button color="bg-green-400" text="Sign in"/>
          </div>
          <p className='text-sm text-gray-500'>Don't have an account yet? Sign-up <Link to="sign-up" className="text-sky-900 underline hover:cursor-pointer">here</Link></p>
          <div className="py-4">
            <Divider text="OR"/>
          </div>
          <Button color="bg-blue-600" text="Sign in with Google"/>
        </div>
        <div className='fixed bottom-6'>
          <MadeWith/>
        </div>
      </div>
    </>
  )
}
