import { LogOut, Settings } from 'lucide-react';
import React, { useRef, useEffect } from 'react'
import { useState } from 'react'

export const SettingsMenu = () => {
  
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <div className='bg-gray-200 p-2 rounded hover:bg-gray-100 cursor-pointer transition-opacity duration-500' onClick={() => setOpen(!open)}>
        <Settings color='black' />
      </div>
      {open && (
        <div className="absolute right-8 mt-2 w-40 bg-white border rounded shadow-lg z-50">
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
            Profile
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer hover:text-red-500">
            <div className='flex flex-row justify-between'>
              Sign Out
              <LogOut/>
            </div>
          </button>
        </div>
      )}
    </div>
  )
}
