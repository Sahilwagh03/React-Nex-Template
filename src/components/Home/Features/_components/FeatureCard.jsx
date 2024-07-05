import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const FeatureCard = ({ title, description, component }) => {
    return (
        <div className='min-h-72 rounded-2xl p-5 relative'>
            <div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-3xl text-[#423f3f] tracking-tight font-bold'>{title}</h3>
                    <p className='w-[60%] text-[#b8b8b8]'>{description}</p>
                </div>
                <div>
                    {
                        component &&
                        component
                    }
                </div>
                <div className='mt-10 border-b-2 border-black pb-1 px-1 w-fit flex flex-row gap-2 items-center'>
                    <p className='font-semibold text-sm'>Read More</p>
                    <GoArrowUpRight className='w-4 h-4' />
                </div>
            </div>
        </div>
    )
}

export default FeatureCard