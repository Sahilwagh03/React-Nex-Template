import React from 'react'

const FooterNavItems = ({footerNavLabel , footerLinks}) => {
  return (
    <div className='flex flex-col gap-3'>
        <h1 className='text-[0.95rem] font-semibold text-[#5d5b5b]'>{footerNavLabel}</h1>
        <div className='flex flex-col gap-4 text-xs font-normal text-[#a9a9a9]'>
            {
                footerLinks.map((item, index)=>(
                    <span key={index}>{item}</span>
                ))
            }
        </div>
    </div>
  )
}

export default FooterNavItems