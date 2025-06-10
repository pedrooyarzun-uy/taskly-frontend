import React from 'react'

export const Button = ({type = "", color, text, onClick = null}) => {
  return (
    <button type={type} onClick={onClick} className={`w-full ${color} rounded-md border-1 text-white font-bold h-8 hover:cursor-pointer`}>{text}</button>
  )
}
