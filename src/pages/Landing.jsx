import React from 'react'

export const Landing = () => {
  return (
    <div className='flex flex-row'>
      <div className="basis-full flex flex-row-reverse bg-[#f9f9f9] border-1 border-gray-300 p-4">
        <div className='bg-gray-900 rounded-lg mr-4 ml-4 text-amber-50 font-bold p-1'>Let's get started</div>
        <p className='mr-4 ml-4 p-1 font-bold'>What is?</p>
        <p className='mr-4 ml-4 p-1 font-bold'>Why choose it?</p>
      </div>
    </div>
  )
}
