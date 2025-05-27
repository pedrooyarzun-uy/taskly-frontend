import React from 'react'

export const Button = ({color, text}) => {
  return (
    <button className={`w-full ${color} rounded-md border-1 text-white font-bold h-8 hover:cursor-pointer`}>{text}</button>
  )
}
