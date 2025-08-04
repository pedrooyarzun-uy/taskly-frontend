import { useEffect, useState } from 'react';
import { useCategories } from '../hooks/useCategories'
import { NavbarItem } from './NavbarItem'
import { prettier } from '../helpers/prettier';

export const Navbar = () => {

  const [categories, setCategories] = useState([]);

  const { getAllCategories } = useCategories(); 
  const { getRandomEmoji, hasEmoji } = prettier();

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllCategories();
      if (res.success) {
        setCategories(res.categories);
      }
    }

    fetch();
  }, []);
  

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
                  <NavbarItem text={item.Name + (hasEmoji(item.Name) ? '' : ' ' + getRandomEmoji())} totalItems='1'/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
