import Image from 'next/image'
import React from 'react'

const MyCard = ({className,zIndex}) => {
    
    return (
        <div className='w-[200px] h-[300px] rounded-xl relative' style={{zIndex:zIndex}}>
            <div className={`h-[180px] border-t relative ${className}`}>
                <div className='flex flex-row gap-2 -rotate-90 absolute top-16 -left-5'>
                    <Image src='/my-bank-logo.png' width={20} height={20} alt='my-bank' />
                    <h1 className='font-bold text-md text-primary'>MyBank</h1>
                </div>
                <div className='absolute top-4 right-6'>
                    <Image src='/card_chip.png'  width={25} height={25}/>
                </div>
            </div>
            <div className='h-[50px] w-[100px] bg-[#222223] rounded-e-xl absolute top-[10rem]'>
            </div>
            <div className='h-[120px] bg-[#222223] border-b'>
            </div>
        </div>
    )
}

export default MyCard