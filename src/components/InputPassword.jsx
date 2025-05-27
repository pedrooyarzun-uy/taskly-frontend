import { Eye } from 'lucide-react'
import { useState } from 'react'

export const InputPassword = ({text}) => {
  const [type, setType] = useState("password")
  
  return (
    <>
        <div className='relative'>
          <input type={type} className='w-full p-2 border-1 border-gray-400 rounded-md bg-transparent' placeholder={text}/>
          <Eye className='absolute right-1 top-2 hover:cursor-pointer ' onClick={ () => type === "text" ? setType("password") : setType("text")}/>
        </div>
    </>
  )
}
