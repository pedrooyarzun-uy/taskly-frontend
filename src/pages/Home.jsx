import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { EllipsisVertical, GripVertical, Plus } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { SettingsMenu } from '../components/SettingsMenu'
import { jwtDecode } from 'jwt-decode'
import { AddTaskModal } from '../components/modals/AddTaskModal'
import { useTasks } from '../hooks/useTasks'

export const Home = () => {

  const [name, setName] = useState("");
  const [isOpenTask, setIsOpenTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const {getPending, complete} = useTasks();

  useEffect(() => {
    if (localStorage.getItem("justLoggedIn")){
      toast.success("Welcome back! Pedro");
      localStorage.removeItem("justLoggedIn");
    }

    const res = jwtDecode(localStorage.getItem("credentials"));
    setName(res.name);

    const fetchTasks = async () => {
      const res = await getPending();

      if (res.success) {
        setTasks(res.tasks);
      }
    }
    
    fetchTasks();

  }, [isOpenTask]);

  const changeCheckbox = (e) => {
    const div = e.target.parentElement;
    if (e.target.checked) {
      div.classList.add("bg-gray-200", "border-1", "border-gray-300", "line-through", "text-gray-400");

      const completeTask = async () => {
        const res = await complete(e.target.id);

        if (res.success) {
          toast.success("Task completed! 🥳");
          return
        }

        toast.error(res.message);
      }

      completeTask();

    } else {
      div.classList.remove("bg-gray-200", "border-1", "border-gray-300", "line-through", "text-gray-400");
    }
  }

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
          <Plus color='black' strokeWidth={2}/> 
          <div className='ml-4'>Add Task</div>
        </div>

        {tasks.map((category) => (
          <div key={`category-${category.category_id}`} className='mb-4'>
            <h2 className='text-lg font-semibold mb-2'>{category.category_name} <span className='bg-gray-200 pr-1 pl-1 rounded-md group-hover:bg-white'>{category.tasks.length}</span></h2>
            
            {category.tasks.map((task) => (
              <div
                id={`task-${task.id}`}
                key={`task-${task.id}`}
                className='flex items-center p-1 rounded mt-1 border border-transparent'
              >
                <GripVertical color='#dbdbdd' className='mr-2' />
                <input
                  id={task.id}
                  type="checkbox"
                  className='w-5 h-5 accent-black rounded-full cursor-pointer'
                  onClick={(e) => changeCheckbox(e)}
                />
                <p className='ml-2'>{task.title}</p>
                <EllipsisVertical color='#dbdbdd' className='ml-auto'/>
              </div>
            ))}
          </div>
        ))}
        <AddTaskModal isOpen={isOpenTask} onClose={() => {setIsOpenTask(false)}}/>
      </div>
    </div>
  )
}
