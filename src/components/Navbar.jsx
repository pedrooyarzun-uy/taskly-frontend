import { useEffect, useState } from 'react';
import { useCategories } from '../hooks/useCategories'
import { NavbarItem } from './NavbarItem'
import { Plus, X } from 'lucide-react';
import { AddCategoryModal } from './modals/AddCategoryModal';

export const Navbar = ({refreshCategories, mobileOpen, setMobileOpen}) => {

  const [categories, setCategories] = useState([]);
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const { getAllCategories } = useCategories(); 

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllCategories();
 
      if (res.success) {
        setCategories(res.categories);
      }
    }

    fetch();
  }, [isOpenCategory, refreshCategories]);
  
  const baseClasses = 'bg-[#f9f9f9] text-black h-full w-64 shadow-lg';

  const Content = ({categories, setIsOpenCategory}) => (
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
          {categories?.map((item) => (
            <NavbarItem key={item.Name} text={item.Name} totalItems={item.TotalTasks}/>
          ))}
        </div>
        <div 
          className='flex hover:bg-gray-200 rounded group p-2 mb-0.5 mt-1 border-dashed border-1 border-gray-300 cursor-pointer hover:border-gray-500' 
          onClick={() => {setIsOpenCategory(true)}}
        >
          <Plus color='black' strokeWidth={1}/> 
          <div className='ml-2'>Create category</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={`${baseClasses} hidden md:block`}>
        <Content categories={categories} setIsOpenCategory={setIsOpenCategory}/>
      </div>

      {/* Mobile */}
      <div className={`fixed inset-0 z-50 flex md:hidden transition-opacity duration-300 
        ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div 
          className="fixed inset-0 bg-black/50 transition-opacity duration-300" 
          onClick={() => setMobileOpen(false)}
        ></div>

        {/* Drawer */}
        <div className={`
          ${baseClasses} relative z-50 transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <button 
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-200"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24}/>
          </button>
          <Content categories={categories} setIsOpenCategory={setIsOpenCategory}/>
        </div>
      </div>
      <AddCategoryModal isOpen={isOpenCategory} onClose={() => {setIsOpenCategory(false)}}/>
    </>
  )
}
