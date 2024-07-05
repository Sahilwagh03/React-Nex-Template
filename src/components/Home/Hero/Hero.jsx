import React from 'react'
import HeroRightSection from './_components/HeroRightSection'
import { HeroLeftSection } from './_components/HeroLeftSection'

const Hero = () => {
    return (
        <div className="bg-white px-4 md:px-4 lg:px-6">
            <div className='grid grid-cols-1  lg:grid-cols-[1.5fr_2fr] h-full'>
                <div className='h-full order-2 lg:order-1'>
                    <HeroLeftSection/>
                </div>
                <div className='h-full order-1 lg:order-2'>
                    <HeroRightSection/>
                </div>
            </div>
        </div>
    )
}

export default Hero