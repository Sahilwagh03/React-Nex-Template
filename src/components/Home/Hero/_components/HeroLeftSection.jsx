import React from 'react'
import MyCard from './MyCard'
import { GoArrowUpRight } from "react-icons/go";

export const HeroLeftSection = () => {
    return (
        <div className='pt-16 px-0 md:px-10 lg:pt-20 lg:px-20 md:flex flex-col items-center lg:items-normal'>
            <div className='relative min-h-[350px] md:w-[350px] lg:min-w-[400px] flex items-end rounded-e-md'>
                <div className='absolute w-full h-full z-10'>
                    <div>
                        <div className='absolute rotate-[10deg] top-2 right-[6px]'>
                            <MyCard className='bg-[#feb21d]' zIndex={10} />
                        </div>
                        <div className='absolute left-[20%] -top-6'>
                            <MyCard className='bg-[#90908f]'  />
                        </div>
                        <div className='absolute rotate-[-25deg] top-2 left-[15px]'>
                            <MyCard className='bg-[#f6ff81]' zIndex={30} />
                        </div>
                    </div>
                </div>
                <div className='relative z-20 backdrop-blur-3xl p-3 border-b'>
                    <h2 className='text-white text-2xl font-semibold'>New Card Design</h2>
                    <p className='text-white text-md font-semibold mt-2'>You&apos;ll get the tools you're after to get business done
                        --and the care you need. You&apos;ll get the tools</p>
                </div>
            </div>
            <div className='mt-12 text-black font-semibold text-[1.7em] '>
                <span>You&apos;ll get the tools you're after </span>
                <span>to get business done-and </span>
                <span>the care you need</span>
            </div>
            <div className='mt-10 border-b-2 border-black pb-1 px-1 w-fit flex flex-row gap-2 items-center'>
                <p className='font-semibold'>Read More</p>
                <GoArrowUpRight className='w-5 h-5'/>
            </div>
        </div>
    )
}
