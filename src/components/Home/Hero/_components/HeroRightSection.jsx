import Button from '@/components-react-nex/Button/Button'
import { HiArrowRight, HiMiniPlay } from "react-icons/hi2";
import Image from 'next/image'
import React from 'react'
import AvatarGroup from '@/components-react-nex/AvatarGroup/AvatarGroup';
import Avatar from '@/components-react-nex/Avatar/Avatar';

const HeroRightSection = () => {
    return (
        <div className='pt-5 md:pr-0 md:pt-10 lg:pt-20 lg:px-20 lg:pl-0'>
            <div className='flex flex-col gap-8'>
                <div className='text-[#010101] text-6xl md:text-8xl lg:text-8xl font-bold flex flex-col items-center gap-0 md:gap-5'>
                    <h1>Your Digital</h1>
                    <div className='flex flex-row gap-4 items-center'>
                        <span>Account</span>
                        <div className='w-[120px] h-[80px] bg-[#ffb763] rounded-full relative hidden md:flex'>
                            <Image src='/Hero_img_1.png' width={110} height={110} className='absolute top-[-40%] left-[1%]' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-row gap-2 justify-center lg:justify-normal md:gap-5'>
                        <div className='flex flex-row items-center'>
                            <Button title='Join Us Now' className='rounded-[20px] min-w-[140px] text-[0.8rem] !h-[50px] md:min-w-[200px] bg-[#010101] text-white' />
                            <div className='bg-[#f9a544] w-12 h-12 rounded-full -ml-3 flex justify-center items-center cursor-pointer'>
                                <HiArrowRight className='w-7 h-7' />
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Button title='Watch Our Video' className='rounded-[20px] min-w-[140px] text-[0.8rem] !h-[50px] md:min-w-[200px] bg-transparent text-[#c2c2c2] border-2 border-[#c2c2c2]' />
                            <div className='bg-[#f9a544] w-12 h-12 rounded-full -ml-3 flex justify-center items-center cursor-pointer'>
                                <HiMiniPlay className='w-6 h-6 ml-1' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden flex-row gap-2 items-center md:hidden lg:flex'>
                    <Image src='/our_bussiness.png' width={100} height={100} className='w-[350px] h-full' />
                    <div className='relative'>
                        <Image src='/hero_shape.svg' width={100} height={100} className='w-[260px] h-full' />
                        <div className='absolute top-3 left-[1.5rem]'>
                            <AvatarGroup>
                                <Avatar size={'xs'} src='https://bit.ly/ryan-florence' />
                                <Avatar size={'xs'} src='https://bit.ly/kent-c-dodds' />
                                <Avatar size={'xs'} src='https://bit.ly/prosper-baba' />
                                <Avatar size={'xs'} src='https://bit.ly/code-beast' />
                            </AvatarGroup>
                        </div>
                        <div className='absolute bottom-5 left-4 flex flex-col gap-2'>
                            <h2 className='text-[2rem] font-bold tracking-tight'>24.8 Millions+</h2>
                            <p className='text-sm'>Happy Customer Review Happy Customer Review</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroRightSection