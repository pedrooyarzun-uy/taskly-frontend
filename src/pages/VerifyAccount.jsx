import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

export const VerifyAccount = () => {
  
  const {verifyUser} = useAuth();
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();



  useEffect(() => {

    const verify =  async () => {
      const token = searchParams.get("token");

      const res = await verifyUser(token);

      res.success ? setError(true) : setError(false);

      console.log(res);
    }

    verify();

    

  }, []);
  
  return (
    <>
    
      {
        error && (
          <div className='text-center mt-4'>
            <p className='text-2xl font-bold'>Your account has been successfully verified ✅</p>
            <p>You can now log in and start using your account.</p>
          </div>
        )
      }

      {
        !error && (
          <div className='text-center mt-4'>
            <p className='text-2xl font-bold text-red-600'>Verification failed ❌</p>
            <p>The verification link is invalid or has expired. Please try again or request a new verification email.</p>
          </div>
        )
      }
    </>
    
  )
}
