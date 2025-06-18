import React, { useState } from 'react'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { InputPassword } from '../components/InputPassword'
import { Button } from '../components/Button'
import { Divider } from '../components/Divider'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast'

export const SignUp = () => {

  const { signUp } = useAuth()
  const [form, setForm] = useState({email: '', password: '', name: ''})
  const [disabled, setDisabled] = useState(false)


  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate();

  const errorToast = () => toast.error("Something went wrong 😩")

  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    const res = await signUp(form)
    res ? navigate('/check-email') : errorToast()
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-zinc-50'>
      <Card>
        <h1 className='text-2xl font-bold text-center mb-4'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <Input placeholder="Name" onChange={handleChange} name="name" value={form.name}/>
          </div>
          <div className='mb-4'>
            <Input placeholder="Email" onChange={handleChange} name="email" value={form.email}/>
          </div>
          <div className="mb-4">
            <InputPassword text="Password" onChange={handleChange} name="password" value={form.password}/>
          </div>
          <div className="mb-4">
            <InputPassword text="Repeat password"/>
          </div>
          <Button color="bg-blue-500 hover:bg-blue-600" text="Sign Up" type='submit' disabled={disabled}/>
          <div className="py-3">
            <Divider text="O"/>
          </div>
          <p className='text-sm text-gray-500'>Have an account? Sign-in <Link to="/" className="text-sky-900 underline hover:cursor-pointer">here</Link></p>
        </form>
      </Card>
      <Toaster/>
    </div>
  )
}
