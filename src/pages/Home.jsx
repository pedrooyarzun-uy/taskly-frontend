import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { SettingsMenu } from '../components/SettingsMenu'
import { jwtDecode } from 'jwt-decode'
import { AddTaskModal } from '../components/AddTaskModal'

export const Home = () => {

  const [name, setName] = useState("");
  const [isOpenTask, setIsOpenTask] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("justLoggedIn")){
      toast.success("Welcome back! Pedro");
      localStorage.removeItem("justLoggedIn");
    }

    const res = jwtDecode(localStorage.getItem("credentials"));
    setName(res.name);
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-[minmax(220px,300px)_1fr] h-screen bg-[#ffffff]'>
      <Navbar />
      <div className='flex flex-col gap-4 mt-4 ml-8 mr-8'>
        <div className='flex flex-row justify-between items-start'>
          <div>
            <p className='text-2xl font-bold'>Welcome Back, {name} 🤩</p>
            <p className='text-sm text-gray-400'>It's {new Date().toDateString()} </p>
          </div>
          <SettingsMenu/>
          
        </div>

        <div className='flex flex-row justify-start bg-[#f9f9f9] p-4 rounded mt-4 border-dashed border-1 border-gray-300 hover:bg-gray-200 cursor-pointer hover:border-gray-500' onClick={() => {setIsOpenTask(true)}}>
          <Plus color='black'/> 
          <div className='ml-4'>Add Task</div>
        </div>

        <AddTaskModal isOpen={isOpenTask} onClose={() => {setIsOpenTask(false)}}/>

      </div>
    </div>
  )
}
