import React from 'react'
import { BoldText, CenterHeader, Heading, ParaContainer, ParaText } from '../components/CenterHeader'
import Image from 'next/image'

const Offers = () => {
  return (
    <div className='h-auto py-20 px-12'>
      <CenterHeader>
        <Heading className='tracking-tight'>
          Reach <BoldText>Your Goal.</BoldText>Feel Good
        </Heading>
        <ParaContainer>
          <ParaText>You'll get the tools you're after to get business done-and the care you need </ParaText>
          <ParaText>to help your business thrive. You'll get the tools you're after to get business</ParaText>
        </ParaContainer>
      </CenterHeader>
      <div className='grid grid-cols-[1.5fr_2fr_1.5fr] gap-2 py-8'>
        <div className='flex flex-col justify-end items-end gap-4 pr-8'>
          <div className='text-2xl text-[#060606] font-semibold text-right'>
            <h3>Safe up for gift</h3>
            <span className='text-[#feb765]'>giving season</span>
          </div>
          <div className='font-thin'>
            <ParaText className='text-right px-0'>You'll get the tools you're after to</ParaText>
            <ParaText className='text-right px-0'>get business done-and the care</ParaText>
            <ParaText className='text-right px-0'>you need. You'll get the tools</ParaText>
            <ParaText className='text-right px-0'>you're after to get.</ParaText>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Image src='/offer_1.png' width={100} height={100} alt='Offers' className='w-[450px] h-auto' />
        </div>
        <div className='flex flex-col justify-start items-start gap-4 pt-10'>
          <div className='text-2xl text-[#060606] font-semibold text-left'>
            <h3>Our <span className='text-[#feb765]'>Dynamic</span></h3>
            <h3>Business Checking</h3>
          </div>
          <div className='font-thin'>
            <ParaText className='text-left px-0'>You'll get the tools you're after to</ParaText>
            <ParaText className='text-left px-0'>get business done-and the care</ParaText>
            <ParaText className='text-left px-0'>you need. You'll get the tools</ParaText>
            <ParaText className='text-left px-0'>you're after to get.</ParaText>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers