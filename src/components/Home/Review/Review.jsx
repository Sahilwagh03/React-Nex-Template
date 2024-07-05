import React from 'react'
import { BoldText, CenterHeader, Heading, ParaContainer, ParaText } from '../components/CenterHeader'
import Button from '@/components-react-nex/Button/Button'
import ReviewCard from './_components/ReviewCard'
import { BsArrowLeft  ,BsArrowRight} from "react-icons/bs";
const Review = () => {
    return (
        <section className='h-auto pt-5 px-12'>
            <div className='grid grid-cols-[1.5fr_2fr] gap-10 items-center'>
                <div className='flex flex-col gap-12'>
                    <CenterHeader className='!text-left'>
                        <Heading className='tracking-tight'>
                            <BoldText>250K+</BoldText> Users
                            <span className='mt-2'>Reviews App</span>
                        </Heading>
                        <ParaContainer>
                            <ParaText className='text-[1rem] font-normal leading-6'>These apps have earned their place in the digital realm by</ParaText>
                            <ParaText className='text-[1rem] font-normal leading-6'>delivering value, convenience, and entertainment to users</ParaText>
                            <ParaText className='text-[1rem] font-normal leading-6'>across the globe.</ParaText>
                        </ParaContainer>
                    </CenterHeader>
                    <Button title='View All Reviews' className='max-w-[150px] !h-10 bg-black text-white rounded-full text-[0.8rem]' />
                </div>
                <div className='flex justify-end relative'>
                    <div className='flex flex-row gap-3 absolute right-0 top-0'>
                        <div className='p-2 bg-[#fff1dc] w-fit h-fit rounded-full flex items-center justify-center'>
                            <BsArrowLeft className='fill-[#fac07c] w-5 h-5'/>
                        </div>
                        <div className='p-2 bg-[#000] w-fit h-fit rounded-full flex items-center justify-center'>
                            <BsArrowRight className='fill-[#ffff] w-5 h-5'/>
                        </div>
                    </div>
                    <ReviewCard/>
                </div>
            </div>
        </section>
    )
}

export default Review