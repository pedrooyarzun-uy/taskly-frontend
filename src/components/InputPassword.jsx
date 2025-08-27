import { Eye } from 'lucide-react'
import { useState } from 'react'

export const InputPassword = ({text, onChange, name, value}) => {
  const [type, setType] = useState("password")
  
  return (
    <>
        <div className='relative'>
          <input name={name} type={type} className='w-full p-2 border-1 border-gray-400 rounded-md focus:outline-gray-400 placeholder-gray-400' placeholder={text} onChange={onChange} value={value}/>
          <Eye className='absolute right-1 top-2 hover:cursor-pointer ' onClick={ () => type === "text" ? setType("password") : setType("text")}/>
        </div>
    </>
  )
}
