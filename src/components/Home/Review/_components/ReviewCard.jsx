import React from 'react'
import { BoldText } from '../../components/CenterHeader'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const ReviewCard = () => {
    return (
        <div className='flex  flex-col px-4 py-2 max-w-[600px] justify-items-end pb-16'>
            <div className='flex flex-col gap-4 p-5 pb-4 justify-items-end'>
                <div>
                    <div className='rounded-full bg-[#eaefa3] p-[0.8rem] w-fit'>
                        <div className='rounded-full bg-[#f6ff81] p-[0.9rem] w-fit'>
                            <BiSolidQuoteAltLeft  className='w-9 h-9'/>
                        </div>
                    </div>
                </div>
                <p className='text-md text-[#aaa8a8]'>
                    "One of my favorite features is the ability to create customized routines. I've set up a 'Good Morning' routine that gradually turns on the lights and adjusts the thermostat to the perfect temperature to wake me up gently. And in the evening, the 'Goodnight' routine ensures that
                    all the lights are off and the doors are locked without me having to check each one inpidually".
                </p>
                <h3 className='text-right'><BoldText>Ronald Richards</BoldText>, Start Up CEO</h3>
            </div>

            <div className='bg-[#f9a544] w-full h-6 rounded-br-3xl rounded-bl-3xl'></div>
        </div>
    )
}

export default ReviewCard