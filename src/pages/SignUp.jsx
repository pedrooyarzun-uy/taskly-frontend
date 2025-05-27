import React from 'react'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { InputPassword } from '../components/InputPassword'
import { Button } from '../components/Button'
import { Divider } from '../components/Divider'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-zinc-50'>
      <Card>
        <h1 className='text-2xl font-bold text-center mb-4'>Sign Up</h1>
        <div className='mb-4'>
          <Input placeholder="Name"/>
        </div>
        <div className='mb-4'>
          <Input placeholder="Email"/>
        </div>
        <div className="mb-4">
          <InputPassword text="Password"/>
        </div>
        <div className="mb-4">
          <InputPassword text="Repeat password"/>
        </div>
        <Button color="bg-blue-500" text="Sign Up"/>
        <div className="py-3">
          <Divider text="O"/>
        </div>
        <p className='text-sm text-gray-500'>Have an account? Sign-in <Link to="sign-up" className="text-sky-900 underline hover:cursor-pointer">here</Link></p>
      </Card>
    </div>
  )
}
