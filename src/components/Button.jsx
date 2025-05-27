import React from 'react'

export const Button = ({color, text, onClick = null}) => {
  return (
    <button onClick={onClick} className={`w-full ${color} rounded-md border-1 text-white font-bold h-8 hover:cursor-pointer`}>{text}</button>
  )
}
