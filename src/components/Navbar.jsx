import React from 'react'
import { Divider } from './Divider'
import { House, LayoutList, User, UserCog } from 'lucide-react'
import { NavbarItem } from './NavbarItem'

export const Navbar = () => {
  return (
    <div className='bg-[#f9f9f9] text-black h-full'>
      <div className='text-left'>
        <div className="p-4 flex justify-start">
          <div className='w-10 h-10 rounded-full bg-blue-500'></div>
          <div className='text-2xl font-bold ml-2'>DoIT - ToDo</div>
        </div>
        <br />
        <div className='mr-4 ml-4'>
          <p className='font-bold mb-2'>Categories</p>
          <div>
            <NavbarItem text='🏠 Home' totalItems='1'/>
            <NavbarItem text='✅ Completed' totalItems='1'/>
            <NavbarItem text='🗓️ Today' totalItems='1'/>
            <NavbarItem text='👤 Personal' totalItems='1'/>
            <NavbarItem text='💼 Work' totalItems='1'/>
          </div>
        </div>
      </div>
    </div>
  )
}
