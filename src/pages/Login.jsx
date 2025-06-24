import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { MadeWith } from '../components/MadeWith'
import { InputPassword } from '../components/InputPassword'
import { Divider } from '../components/Divider'
import { Link, Navigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast'

export const Login = () => {
  
  const {signIn} = useAuth()
  const [form, setForm] = useState({email: '', password: ''});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const errorToast = (message) => toast.error(message)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn(form);
    console.log(res);
    if (!res.success){
      errorToast(res.message);
      return
    }
  }
  
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-zinc-50'>
        <div className='bg-white text-black p-6 rounded-xl shadow-lg shadow-gray-300 w-96'>
          <h1 className='text-2xl font-bold mb-4 text-center'>Sign in</h1>
          <div className='flex-col mb-2'>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <Input placeholder="Email" onChange={handleChange} name="email" value={form.email}/>
              </div>
              <div className='mb-4'>
                <InputPassword text="Password" name='password' onChange={handleChange} value={form.password}/>
              </div>
              <Button color="bg-green-400" text="Sign in"/>
            </form>
          </div>
          <p className='text-sm text-gray-500'>Don't have an account yet? Sign-up <Link to="/sign-up" className="text-sky-900 underline hover:cursor-pointer">here</Link></p>
          <div className="py-4">
            <Divider text="OR"/>
          </div>
          <Button color="bg-blue-600" text="Sign in with Google"/>
        </div>
        <div className='fixed bottom-6'>
          <MadeWith/>
        </div>
      </div>
      <Toaster/>
    </>
  )
}
