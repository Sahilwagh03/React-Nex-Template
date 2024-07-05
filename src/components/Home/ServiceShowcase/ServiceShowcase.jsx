import Button from '@/components-react-nex/Button/Button'
import React from 'react'
import ServiceCard from './_components/ServiceCard'

const ServiceShowcase = () => {
    const services = [
        {
          badgeLabel: 'Saving',
          badgeColor:'!bg-[#f9a544]',
          title: 'Safe up for gift giving season',
          description: "You'll get the tools you're after to get business done—and the care you need. You'll get the tools you're after to get."
        },
        {
          badgeLabel: 'Mobile Banking',
          badgeColor:'!bg-[#f5fc81] !text-black',
          title: 'Mobile to Check Deposit',
          description: "You'll get the tools you're after to get business done—and the care you need. You'll get the tools you're after to get."
        },
        {
          badgeLabel: 'Small Business',
          title: 'Our Dynamic Business Checking',
          description: "You'll get the tools you're after to get business done—and the care you need. You'll get the tools you're after to get."
        }
      ];
    return (
        <div className='h-auto py-20 px-12'>
            <div className='grid grid-cols-[1.2fr_2fr] gap-10'>
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-4'>
                        <div >
                            <h3 className='font-medium text-5xl leading-[4.5rem]'>How to Become</h3>
                            <h3 className='font-medium text-5xl'>A <span className='font-black'>Super Saver</span></h3>
                        </div>
                        <div className='w-[400px] text-[#c2c2c2]'>
                            <p>You'll get the tools you're after to get business done—and the care you need to help your business thrive. You'll get the tools.</p>
                        </div>
                    </div>
                    <Button title='Join Us Now' className='max-w-[180px] !h-10 bg-black text-white rounded-2xl text-[0.8rem]' />
                </div>
                <div className='flex flex-row gap-2'>
                    {
                        services.map(({title,description,badgeLabel,badgeColor} , index)=>(
                            <ServiceCard title={title} description={description} badgeColor={badgeColor} badgeLabel={badgeLabel} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceShowcase