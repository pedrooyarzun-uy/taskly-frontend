import React from 'react'
import { Modal } from '../Modal'
import { Input } from '../Input'
import { useState } from 'react'
import { useCategories } from '../../hooks/useCategories'
import toast from 'react-hot-toast'
import { Button } from '../Button'

export const AddCategoryModal = ({isOpen, onClose}) => {
  
  const [name, setName] = useState('');
  const {create} = useCategories();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const res = await create({
      "name": name
    });

    if (res.success) {
      onClose();
      setName('');
      toast.success('Category succesfully created! 🙌🏽');
      return
    }

    toast.error(res.message);
  }
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='p-4 w-full'>
        <div className='flex flex-row justify-center mb-4'>
          <p className='font-bold'>Create category</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="mb-4">
              <Input placeholder='Category name...' onChange={(e) => {setName(e.target.value)}} value={name} name='name'/>
            </div>
          </div>
          <Button color="bg-green-400" text="Create catefory"/>
        </form>
      </div>
    </Modal>
  )
}
