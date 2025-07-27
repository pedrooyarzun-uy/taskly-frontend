import { X } from "lucide-react"

export const Modal = ({children, isOpen, onClose}) => {
  
  return (
    <>
      {isOpen && 
        <div className='fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center'>

          <div className='bg-white rounded-md flex flex-col justify-center items-center w-[25vw]'>
            <div className='flex flex-row justify-end w-full pt-2 pl-2 pr-2'>
              <X onClick={onClose} className="hover:cursor-pointer"/>
            </div>
            {children}
          </div>
        </div>
      }
      
    </>
  )
}
