import React from 'react'

export const Card = ({children}) => {
  return (
    <div className='bg-white text-black p-6 rounded-xl shadow-lg shadow-gray-300 w-96'>
      {children}
    </div>
  )
}
