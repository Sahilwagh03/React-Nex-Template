import Image from 'next/image'
import React from 'react'
import { BoldText, Heading } from '../components/CenterHeader'

const CallToAction = () => {
    return (
        <div className='py-10 px-5 md:py-20 md:px-10 lg:py-20 lg:px-12 max-w-full relative h-auto'>
            <div className='absolute top-12 left-8 md:top-28 md:left-16 lg:top-40 lg:left-28'>
                <Heading className='text-white text-lg md:text-4xl lg:text-5xl'>
                    We&apos;ll Bringing Care
                </Heading>
                <Heading className='text-white text-lg md:text-4xl lg:text-5xl leading-0 md:leading-[4rem]'>
                    to Banking.<BoldText className='text-[#f8a443]'>Join Us</BoldText>
                </Heading>
            </div>

            <Image src='/CTA.svg' width={100} height={100} alt='CTA' className='w-full' />

            <div className='flex flex-row gap-3 absolute bottom-14 left-8 md:bottom-32 md:left-16 lg:left-28 lg:bottom-52'>
                <Image src='/PlayStore.svg' width={100} height={100} alt='Play Store' className='w-[80px] md:w-[140px] lg:w-[200px] h-full' />  
                <Image src='/Apple.svg' width={100} height={100} alt='Apple Store' className='w-[80px] md:w-[140px] lg:w-[200px] h-full' />  
            </div>
            <div className='absolute right-10 bottom-10 md:right-14 md:bottom-20 lg:right-28 lg:bottom-20'>
                <Image src='/CTA_girl.png' width={100} height={100} alt='Girl' className='w-fit md:w-[250px] lg:w-[500px] h-full'/>
            </div>
        </div>
    )
}

export default CallToAction
