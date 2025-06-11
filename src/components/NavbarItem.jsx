import { Grid3X3, GripVertical } from 'lucide-react'
import React from 'react'

export const NavbarItem = ({text, totalItems}) => {
  return (
    <div className='flex justify-between hover:bg-gray-200 rounded-md group cursor-pointer p-2 mb-0.5 mt-0.5'>
      <div className='flex justify-start'>
        <GripVertical color='#dbdbdd'/>
        <span>{text}</span>
      </div>
      <span className='bg-gray-200 pr-1 pl-1 rounded-md group-hover:bg-white'>{totalItems}</span>
    </div>
  )
}
