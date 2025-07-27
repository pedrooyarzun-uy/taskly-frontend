import { NavbarItem } from './NavbarItem'

export const Navbar = () => {
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
            <NavbarItem text='🏠 Home' totalItems='1'/>
            <NavbarItem text='✅ Completed' totalItems='1'/>
            <NavbarItem text='🗓️ Today' totalItems='1'/>
            <NavbarItem text='👤 Personal' totalItems='1'/>
            <NavbarItem text='💼 Work' totalItems='1'/>
          </div>
        </div>
      </div>
    </div>
  )
}
