import React from 'react'

export const Input = ({type = "text", placeholder}) => {
  return (
    <input type={type} className='w-full p-2 border-1 border-gray-400 rounded-md' placeholder={placeholder}/>
  )
}
