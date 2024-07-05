import Button from '@/components-react-nex/Button/Button'
import React from 'react'
import HelpCard from './_components/HelpCard'
import { BsFillShieldFill } from "react-icons/bs";
import { FaWallet ,FaCreditCard } from "react-icons/fa6";
const Help = () => {
    const HelpCardData = [
        {
            icon: <BsFillShieldFill className='w-11 h-full fill-[#ffb762]' />,
            title:'Insurance',
        },
        {
            icon: <FaWallet className='w-10 h-full fill-[#ffb762]' />,
            title:'Checking Account',
            description:"You'll get the tools you're after to get business done-and the care you need"
        },
        {
            icon: <FaCreditCard className='w-10 h-full fill-[#ffb762]' />,
            title:'Debit Card',
        },
    ]
    return (
        <div className='h-auto py-32 px-12'>
            <div className='grid grid-cols-[1.8fr_2fr] gap-10'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h3 className='font-medium text-5xl'>What Can <span className='font-black'>We</span> </h3>
                        <h3 className='font-medium text-5xl'><span className='font-black'>Help You</span> With?</h3>
                    </div>
                    <div className='w-[400px] text-[#c2c2c2]'>
                        <p>You'll get the tools you're after to get business done-and the care you need to help</p>
                    </div>
                    <Button title='Join Us Now' className='max-w-[180px] !h-10 bg-black text-white rounded-2xl text-[0.8rem]' />
                </div>
                <div className='flex flex-row gap-2'>
                    {
                        HelpCardData.map(({title,description,icon},index)=>(
                            <HelpCard title={title} description={description} icon={icon} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Help