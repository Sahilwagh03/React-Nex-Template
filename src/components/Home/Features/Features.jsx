import React from 'react'
import FeatureCard from './_components/FeatureCard'
import Image from 'next/image'

const Features = () => {
    const featuresData = [
        {
            title: "Global Corporate Card",
            description: "You&apos;ll get the tools you&apos;re after to get business done-and the care you need to help your business thrive. You&apos;ll get the tools you&apos;re after",
            component:
                <div className='absolute right-0 bottom-0'>
                    <Image src='/card_img.png' width={100} height={100} className='w-[11rem] lg:w-80 h-auto' alt='Global Corporate Card' />
                </div>
        },
        {
            title: "Expenses Management",
            description: "You&apos;ll get the tools you&apos;re after to get business done-and the care you need to help your business thrive. You&apos;ll get the tools you&apos;re after",
            component:
                <div className='absolute right-0 bottom-0'>
                    <Image src='/expeness.png' width={100} height={100} className='w-[10rem] lg:w-64 h-auto' alt='Expenses Management' />
                </div>
        },
        {
            title: "Accounts Payable",
            description: "You&apos;ll get the tools you&apos;re after to get business done-and the care you need to help your business thrive. You&apos;ll get the tools you&apos;re after",
            component:
                <div className='absolute right-0 bottom-0'>
                    <Image src='/payable.png' width={100} height={100} className='w-[11rem]  lg:w-80 h-auto' alt='Accounts Payable' />
                </div>
        },
        {
            title: "Accounting Automation",
            description: "You&apos;ll get the tools you&apos;re after to get business done-and the care you need to help your business thrive. You&apos;ll get the tools you&apos;re after",
            component:
                <div className='absolute right-0 bottom-0'>
                    <Image src='/automation.png' width={100} height={100} className='w-[10rem] lg:w-80 h-auto' alt='Accounting Automation' />
                </div>
        },
    ]

    return (
        <div className='py-0 px-5 md:py-0 md:px-10 lg:py-20 lg:px-12'>
            <div className='flex flex-col gap-20'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-5xl font-semibold text-[#474444] tracking-tight '>
                        <span className='text-[#010101] font-bold'>The Card </span>is Just The Start
                    </h1>
                    <div>
                        <p className='md:px-2 text-sm font-medium text-[#c2c2c2]'>You&apos;ll get the tools you&apos;re after to get business done-and the care you need to</p>
                        <p className='md:px-2 hidden md:block text-sm font-medium text-[#c2c2c2]'>help your business thrive. You&apos;ll get the tools you&apos;re after to get business done</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-20'>
                    {
                        featuresData.map(({ title, description, component }, index) => (
                            <FeatureCard title={title} description={description} component={component} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Features
