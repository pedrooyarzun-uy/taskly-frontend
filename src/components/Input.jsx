import React from 'react'

export const Input = ({type = "text", placeholder, onChange, name, value}) => {
  return (
    <input name={name} type={type} className='w-full p-2 border-1 border-gray-400 rounded-md' placeholder={placeholder} onChange={onChange} value={value}/>
  )
}
