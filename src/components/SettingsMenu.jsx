import { Settings } from 'lucide-react';
import React from 'react'
import { useState } from 'react'

export const SettingsMenu = () => {
  
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div className='bg-gray-200 p-2 rounded hover:bg-gray-100 cursor-pointer transition-opacity duration-500' onClick={() => setOpen(!open)}>
        <Settings color='black' />
      </div>
      {open && (
        <div className="absolute right-8 mt-12 w-40 bg-white border rounded shadow-lg z-50">
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
            Perfil
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
            Cerrar sesión
          </button>
        </div>
      )}
    </>
  )
}
