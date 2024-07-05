import Avatar from '@/components-react-nex/Avatar/Avatar'
import Button from '@/components-react-nex/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='py-4 px-10 flex flex-row items-center justify-between border-b-2 border-[#e2e2e2] sticky top-0 bg-white z-50'>
            <div className='flex flex-row items-center gap-16'>
                <div className='flex flex-row gap-2 items-center'>
                    <Image src='/my-bank-logo.png' width={45} height={45} alt='my-bank' />
                    <h1 className='font-bold text-2xl text-primary'>MyBank</h1>
                </div>
                <nav className='flex justify-between gap-20'>
                    <Link href="/product">
                        <span className='text-[#8b8b8b] text-sm font-medium'>Product</span>
                    </Link>
                    <Link href="/pricing">
                        <span className='text-[#979797] text-sm font-medium'>Pricing</span>
                    </Link>
                    <Link href="/services">
                        <span className='text-[#979797] text-sm font-medium'>Services</span>
                    </Link>
                </nav>
            </div>
            <div className='flex flex-row items-center gap-10'>
                <div>
                    <h4 className='text-primary font-semibold text-sm'>Join Us Now</h4>
                </div>
                <div className='relative min-w-[200px]'>
                    <Button title='Talk to our experts' className='rounded-[15px] border-black border-2'/>
                    <Avatar size='sm' className='border-2 border-black mx-[-1rem] absolute right-1 -top-1'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
