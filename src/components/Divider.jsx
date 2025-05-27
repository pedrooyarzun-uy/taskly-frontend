import React from 'react'

export const Divider = ({text}) => {
  return (
    <div className='flex items-center'>
      <div class="flex-grow border-t border-black"></div>
      <span class="flex-shrink mx-4 text-black text-xs">{text}</span>
      <div class="flex-grow border-t border-black"></div>
    </div>
  )
}
