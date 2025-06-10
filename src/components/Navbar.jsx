import React from 'react'
import { Divider } from './Divider'
import { House, LayoutList, User, UserCog } from 'lucide-react'

export const Navbar = () => {
  return (
    <div className='bg-[#4DA8DA] text-white h-full font-bold'>
      <div className='text-center'>
        <div className="p-4">
          <p className='text-2xl font-bold'>Hola! Pedro</p>
        </div>
        <div className='pr-4 pl-4'>
          <Divider text='O'/>
        </div>
        <div className='pr-4 pl-4 pt-2 pb-2 flex flex-row justify-left'>
          <House fill='white'/>
          <span className='ml-1'>Home</span>
        </div>
        <div className='pr-4 pl-4 pt-2 pb-2 flex flex-row justify-left'>
          <UserCog fill='white'/>
          <span className='ml-1'>User Settings</span>
        </div>
        <div className='pr-4 pl-4 pt-2 pb-2 flex flex-row justify-left'>
          <LayoutList fill='white'/>
          <span className='ml-1'>All tasks</span>
        </div>
      </div>
    </div>
  )
}
