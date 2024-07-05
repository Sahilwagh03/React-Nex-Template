"use client"
import Avatar from '@/components-react-nex/Avatar/Avatar'
import Button from '@/components-react-nex/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BiMenuAltRight } from 'react-icons/bi'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className='px-2 py-4 md:px-6 lg:px-10 flex flex-row items-center justify-between border-b-2 border-[#e2e2e2] sticky top-0 bg-white z-50'>
            <div className='flex flex-row items-center gap-8 lg:gap-16'>
                <div className='flex flex-row gap-2 items-center'>
                    <Image src='/my-bank-logo.png' className='cursor-pointer w-8 h-8 md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px]' width={45} height={45} alt='my-bank' onClick={() => router.push('/')} />
                    <h1 className='font-bold text-xl md:text-xl lg:text-2xl text-primary cursor-pointer' onClick={() => router.push('/')}>MyBank</h1>
                </div>
                <nav className='justify-between gap-8 md:gap-10 lg:gap-20 hidden md:flex'>
                    <Link href="/">
                        <span className='text-[#8b8b8b] text-sm md:text-base font-medium hover:text-black'>Product</span>
                    </Link>
                    <Link href="/">
                        <span className='text-[#979797] text-sm md:text-base font-medium hover:text-black'>Pricing</span>
                    </Link>
                    <Link href="/">
                        <span className='text-[#979797] text-sm md:text-base font-medium hover:text-black'>Services</span>
                    </Link>
                </nav>
            </div>
            <div className='hidden md:flex flex-row items-center gap-6 lg:gap-10'>
                <div>
                    <h4 className='text-primary font-semibold text-sm md:text-base cursor-pointer'>Join Us Now</h4>
                </div>
                <div className='relative min-w-[150px] md:min-w-[200px]'>
                    <Button title='Talk to our experts' className='rounded-[15px] border-black border-2' />
                    <Avatar size='sm' className='border-2 border-black mx-[-1rem] absolute right-1 -top-1 cursor-pointer' />
                </div>
            </div>
            <div className='menu md:hidden flex justify-center items-center'>
                <button>
                    <BiMenuAltRight className='w-8 h-8' />
                </button>
            </div>
        </div>
    )
}

export default Navbar
