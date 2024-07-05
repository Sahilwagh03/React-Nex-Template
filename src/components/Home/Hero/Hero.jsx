import React from 'react'
import HeroRightSection from './_components/HeroRightSection'
import { HeroLeftSection } from './_components/HeroLeftSection'

const Hero = () => {
    return (
        <div className="bg-white px-6">
            <div className='grid grid-cols-[1.5fr_2fr] h-full'>
                <div className='h-full '>
                    <HeroLeftSection/>
                </div>
                <div className='h-full '>
                    <HeroRightSection/>
                </div>
            </div>
        </div>
    )
}

export default Hero