import { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Plus, Settings } from 'lucide-react'
import { toast } from 'react-hot-toast'

export const Home = () => {

  useEffect(() => {
    if (localStorage.getItem("justLoggedIn")){
      toast.success("Welcome back! Pedro");
      localStorage.removeItem("justLoggedIn");
    }
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-[minmax(220px,300px)_1fr] h-screen bg-[#ffffff]'>
      <Navbar />
      <div className='flex flex-col gap-4 mt-4 ml-8 mr-8'>
        <div className='flex flex-row justify-between items-start'>
          <div>
            <p className='text-2xl font-bold'>Welcome Back, Pedro 🤩</p>
            <p className='text-sm text-gray-400'>Some informative text</p>
          </div>
          <div className='bg-gray-200 p-2 rounded hover:bg-gray-100 cursor-pointer transition-opacity duration-500'>
            <Settings color='black' />
          </div>
        </div>

        <div className='flex flex-row justify-start bg-[#f9f9f9] p-4 rounded mt-4 border-dashed border-1 border-gray-300 hover:bg-gray-200 cursor-pointer hover:border-gray-500'>
              <Plus color='black'/> 
              <div className='ml-4'>Add Task</div>
        </div>
      </div>
    </div>
  )
}
