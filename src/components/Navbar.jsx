import { useEffect, useState } from 'react';
import { useCategories } from '../hooks/useCategories'
import { NavbarItem } from './NavbarItem'
import { Plus } from 'lucide-react';
import { AddCategoryModal } from './modals/AddCategoryModal';

export const Navbar = () => {

  const [categories, setCategories] = useState([]);
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const { getAllCategories } = useCategories(); 

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllCategories();
 
      if (res.success) {
        console.log(res.categories);
        setCategories(res.categories);
      }
    }

    fetch();
  }, [isOpenCategory]);
  

  return (
    <div className='bg-[#f9f9f9] text-black h-full hidden md:block'>
      <div className='text-left'>
        <div className="ml-3 mt-4 flex justify-start">
          <div className='w-10 h-10 rounded-xl '>
            <img src="./images/logo.png" alt="" />
          </div>
          <div className='text-2xl font-bold ml-2'>Taskly</div>
        </div>
        <br />
        <div className='mr-4 ml-4'>
          <p className='font-bold mb-2'>Categories</p>
          <div>
            {
              categories.map((item) => (
                <div>
                  <NavbarItem text={item.Name} totalItems={item.TotalTasks}/>
                </div>
              ))
            }
          </div>
          <div className='flex hover:bg-gray-200 rounded-md group cursor-pointer p-2 mb-0.5 mt-0.5' onClick={() => {setIsOpenCategory(true)}}>
            <Plus color='black' strokeWidth={1}/> 
            <div className='ml-2'>Create category</div>
          </div>
        </div>
      </div>
      <AddCategoryModal isOpen={isOpenCategory} onClose={() => {setIsOpenCategory(false)}}/>
    </div>
  )
}
