import { Modal } from './Modal'
import { Input } from './Input'
import { Button } from './Button'

export const AddTaskModal = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='p-4 w-full'>
        <div className='flex flex-row justify-center mb-4'>
          <p className='font-bold'>Add task</p>
        </div>
        <div className='flex flex-col'>
          <div className='mb-4'>
            <Input placeholder="Task name..."/>
          </div>
          <div className='mb-4'>
            <Input placeholder="Task description..."/>
          </div>
          <div className='mb-4'>
            <select className='w-full border-1 border-gray-400 rounded-md p-2 text-gray-400 focus:outline-gray-400'>
              <option selected value="">Category...</option>
            </select>
          </div>
        </div>
        <Button color="bg-green-400" text="Create task"/>
      </div>
      
    </Modal>
  )
}
