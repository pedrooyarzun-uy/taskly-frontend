import {SquarePen, Trash2} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTasks } from '../hooks/useTasks';
import toast from 'react-hot-toast';

export const SettingsTask = ({id, onDeleteSuccess}) => {

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const {deleteTask} = useTasks()
  
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

  const handleDelete = (e) => {

    const id = e.currentTarget.id.split("-")[1];

    const deletePetition = async () => {
      const res = await deleteTask(id);

      if(res.success) {
        toast.success('Task deleted successfully! 🗑️');
        onDeleteSuccess?.();
        return
      }

      toast.error(res.message);
    }

    deletePetition();
  }

  return (
    <div ref={menuRef} className='flex flex-row'>
      <Trash2 className='hover:cursor-pointer mr-2 sm:mr-4' color='red' id={`trash-${id}`} onClick={(e) => {handleDelete(e)}}/>
      <SquarePen className='hover:cursor-pointer' color='gray' id={`square-${id}`} />
    </div>
  )
}
