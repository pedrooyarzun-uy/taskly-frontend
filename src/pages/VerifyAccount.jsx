import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

export const VerifyAccount = () => {
  
  const [error, setError] = useState();
  const [counter, setCounter] = useState(5);
  const {verifyUser} = useAuth();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();



  useEffect(() => {

    const verify =  async () => {
      const token = searchParams.get("token");

      const res = await verifyUser(token);

      res.success ? setError(true) : setError(false);
    }

    verify();

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if(prevCounter == 1) {
          clearInterval(interval);
          navigate("/login")
          return;
        }

        return prevCounter - 1;
      });
    }, 1000);

    return () => clearInterval(interval);

  }, []);
  
  return (
    <div className='min-h-screen flex flex-col bg-zinc-50'>
      {
        error && (
          <div className='text-center mt-8'>
            <p className='text-2xl font-bold'>Your account has been successfully verified ✅</p>
            <p>You can now log in and start using your account.</p>
            <p>You will be redirected in {counter} second{counter !== 1 ? 's' : ''}.</p>
          </div>
        )
      }

      {
        !error && (
          <div className='text-center mt-8'>
            <p className='text-2xl font-bold text-red-600'>Verification failed ❌</p>
            <p>The verification link is invalid or has expired. Please try again or request a new verification email.</p>
            <p>You will be redirected to login in {counter} second{counter !== 1 ? 's' : ''}.</p>
          </div>
        )
      }
    </div>
    
  )
}
