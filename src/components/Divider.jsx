import React from 'react'

export const Divider = ({text}) => {
  return (
    <div className='flex items-center'>
      <div className="flex-grow border-t border-black"></div>
      <span className="flex-shrink mx-4 text-black text-xs">{text}</span>
      <div className="flex-grow border-t border-black"></div>
    </div>
  )
}
