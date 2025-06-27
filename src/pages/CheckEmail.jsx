import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const CheckEmail = () => {
  
  const [counter, setCounter] = useState(5)
  const navigate = useNavigate();


  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if(prevCounter == 1) {
          clearInterval(interval);
          navigate("/login")
          return;
        }

        return prevCounter - 1;
      });
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-zinc-50 text-center'>
      <div className='mt-8'>
        <p className='text-2xl font-bold'>Registration successful 🎉!</p>
        <p>We have sent a confirmation email to the address you provided. Please check your inbox to verify your account.</p>
        <p>You will be redirected to login in {counter} second{counter !== 1 ? 's' : ''}.</p>
      </div>
    </div>

  )
}
