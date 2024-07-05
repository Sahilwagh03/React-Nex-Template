import Button from '@/components-react-nex/Button/Button'
import React from 'react'
import ServiceCard from './_components/ServiceCard'

const ServiceShowcase = () => {
    const services = [
        {
          badgeLabel: 'Saving',
          badgeColor:'!bg-[#f9a544]',
          title: 'Safe up for gift giving season',
          description: "You&apos;ll get the tools you're after to get business done—and the care you need. You&apos;ll get the tools you're after to get."
        },
        {
          badgeLabel: 'Mobile Banking',
          badgeColor:'!bg-[#f5fc81] !text-black',
          title: 'Mobile to Check Deposit',
          description: "You&apos;ll get the tools you're after to get business done—and the care you need. You&apos;ll get the tools you're after to get."
        },
        {
          badgeLabel: 'Small Business',
          title: 'Our Dynamic Business Checking',
          description: "You&apos;ll get the tools you're after to get business done—and the care you need. You&apos;ll get the tools you're after to get."
        }
      ];
    return (
        <div className='h-auto py-24 px-5 md:py-28 md:px-10 lg:py-32 lg:px-12'>
            <div className='grid grid-cols-1 lg:grid-cols-[1.8fr_2fr] gap-6 lg:gap-10'>
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-4'>
                        <div >
                            <h3 className='font-medium text-4xl md:text-5xl lg:leading-[4.5rem]'>How to Become</h3>
                            <h3 className='font-medium text-4xl md:text-5xl'>A <span className='font-black'>Super Saver</span></h3>
                        </div>
                        <div className='w-full lg:w-[400px] text-[#c2c2c2]'>
                            <p>You&apos;ll get the tools you're after to get business done—and the care you need to help your business thrive. You&apos;ll get the tools.</p>
                        </div>
                    </div>
                    <Button title='Join Us Now' className='max-w-[180px] !h-10 bg-black text-white rounded-2xl text-[0.8rem]' />
                </div>
                <div className='flex flex-row gap-2 overflow-x-scroll py-2 md:py-0 lg:overflow-x-visible'>
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