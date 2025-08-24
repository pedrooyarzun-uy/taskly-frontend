import { Modal } from '../Modal'
import { Input } from '../Input'
import { Button } from '../Button'
import { useEffect, useState } from 'react'
import { useCategories } from '../../hooks/useCategories'
import { useTasks } from '../../hooks/useTasks'
import toast from 'react-hot-toast'
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";
import moment from "moment"

export const AddTaskModal = ({isOpen, onClose}) => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  const [form, setForm] = useState({title: '', dueDate: '', category: 0});

  const {getAllCategories} = useCategories();
  const {create} = useTasks();
  
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getAllCategories();
      if (res.success) {
        setCategories(res.categories);
      }
    }
    
    fetchCategories();
  }, []);
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!form.title || !form.dueDate || !form.category ){
      toast.error("All fields must be completed");
      return
    }

    const res = await create({
      title: form.title, 
      dueDate: form.dueDate,
      category: form.category
    });

    if (res.success) {
      onClose();
      setForm({});
      toast.success("Task succesfully created! 🙌🏽");
      return
    }

    toast.error(res.message);
  }
  
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='p-4 w-full'>
        <div className='flex flex-row justify-center mb-4'>
          <p className='font-bold'>Add task</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <div className='mb-4'>
              <Input placeholder="Task name..." onChange={handleChange} value={form.title} name="title"/>
            </div>
            <div className='mb-4'>
              <Datetime
                onChange={(date) => {
                  setForm({
                    ...form,
                    dueDate: date && date.toISOString()
                  });
                }}
                value={form.dueDate ? moment(form.dueDate) : null}
                dateFormat='YYYY/MM/DD'
                timeFormat='HH:mm'
                inputProps={{
                  placeholder: "Select a due date...",
                  className: "w-full p-2 border border-gray-400 rounded-md focus:outline-none"
                }}
                renderDay={(props, currentDate, selectedDate) => {
                  const today = moment(); 
                  const isToday = currentDate.isSame(today, "day");

                  return <td {...props} className={`p-2 text-black rounded hover:bg-gray-200 ${isToday ? "border-dashed border-1 border-gray-300 bg-gray-200 cursor-pointer hover:border-gray-500" : ""} `} >{currentDate.date()}</td>;
                }}
              />
            </div>
            <div className='mb-4'>
              <select name="category" className={`w-full border-1 border-gray-400 rounded-md p-2 focus:outline-gray-400 ${selected ? "text-black" : "text-gray-400"}`} onChange={(e) => {
                setSelected(e.target.value);
                handleChange(e); 
              }}
              value={form.category}
              >
                <option value="">Category...</option>
                {categories.map((cat) => (
                  <option key={cat.Id} value={cat.Id}>
                    {cat.Name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Button color="bg-green-400" text="Create task"/>
        </form>
      </div>
      
    </Modal>
  )
}
