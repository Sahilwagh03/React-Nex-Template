import React from 'react'
import FeatureCard from './_components/FeatureCard'
import Image from 'next/image'

const Features = () => {

    const featuresData = [
        {
            title: "Global Corporate Card",
            description: "You'll get the tools you're after to get business done-and the care you need to help your business thrive. You'll get the tools you're after",
            component:
                <div className='absolute right-0 bottom-0'>
                    <Image src='/card_img.png' width={100} height={100} className='w-80 h-auto' />
                </div>
        },
        {
            title: "Expanses Management",
            description: "You'll get the tools you're after to get business done-and the care you need to help your business thrive. You'll get the tools you're after",
            component:
                <div className='absolute right-0 bottom-0'>
                    <Image src='/expeness.png' width={100} height={100} className='w-64 h-auto' />
                </div>
        },
        {
            title: "Accounts Payable",
            description: "You'll get the tools you're after to get business done-and the care you need to help your business thrive. You'll get the tools you're after",
            component:
                <div className='absolute right-0 bottom-0'>
                    <Image src='/payable.png' width={100} height={100} className='w-80 h-auto' />
                </div>
        },
        {
            title: "Accounting Automation",
            description: "You'll get the tools you're after to get business done-and the care you need to help your business thrive. You'll get the tools you're after",
            component:
                <div className='absolute right-0 bottom-0'>
                    <Image src='/automation.png' width={100} height={100} className='w-80 h-auto' />
                </div>
        },
    ]
    return (
        <div className='py-20 px-12 '>
            <div className='flex flex-col gap-20'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-5xl font-semibold text-[#474444] tracking-tight '><span className='text-[#010101] font-bold'>The Card  </span>is Just The Start</h1>
                    <div>
                        <p className='px-2 text-sm font-medium text-[#c2c2c2]'>You'll get the tools you're after to get business done-and the care you need to </p>
                        <p className='px-2 text-sm font-medium text-[#c2c2c2]'>help your business thrive. You'll get the tools you're after to get business done</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 gap-y-20'>
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