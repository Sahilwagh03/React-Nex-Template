import Image from 'next/image'
import React from 'react'
import { BoldText, Heading } from '../components/CenterHeader'

const CallToAction = () => {
    return (
        <div className='px-12 py-20 max-w-full relative h-auto'>
            <div className='absolute top-40 left-28'>
                <Heading className='text-white'>We'll Bringing Care</Heading>
                <Heading className='text-white leading-[4rem]'>to Banking.<BoldText className='text-[#f8a443]'>Join Us</BoldText></Heading>
            </div>

            <Image src='/CTA.svg' width={100} height={100} alt='CTA' className='w-full' />

            <div className='flex flex-row gap-3 absolute left-28 bottom-52'>
                <Image src='/PlayStore.svg' width={100} height={100} alt='CTA' className='w-[200px] h-full' />  
                <Image src='/Apple.svg' width={100} height={100} alt='CTA' className='w-[200px] h-full' />  
            </div>
            <div className='absolute right-28 bottom-20'>
                <Image src='/CTA_girl.png' width={100} height={100} alt='CTA' className='w-[500px] h-full'/>
            </div>
        </div>
    )
}

export default CallToAction