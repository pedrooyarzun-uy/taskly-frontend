import { EllipsisVertical, SquarePen, Trash2} from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

export const SettingsTask = () => {

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
    <div ref={menuRef} className=' flex flex-row ml-auto'>
      <Trash2 className='hover:cursor-pointer mr-4' color='red'/>
      <SquarePen className='hover:cursor-pointer' color='gray'/>
    </div>
  )
}
