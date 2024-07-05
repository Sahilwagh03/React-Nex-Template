import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'

const HelpCard = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col min-w-[250px] min-h-[250px] px-4 py-6 hover:shadow-md rounded-2xl relative'>
        <div>
          {icon}
        </div>
        <div className='mt-4'>
          <h3 className='text-md font-semibold'>{title}</h3>
          {
            description &&
            <p className='text-sm mt-2'>{description}</p>
          }
        </div>
      <div className='mt-2 absolute right-6 bottom-4'>
        <div className='bg-black w-10 h-10 rounded-full flex justify-center items-center hover:scale-105'>
          <HiArrowRight className='w-5 h-5 fill-white' />
        </div>
      </div>
    </div>
  )
}

export default HelpCard