import Badge from '@/components-react-nex/Badge/Badge';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const ServiceCard = ({ title, description, badgeLabel, badgeColor }) => {
    return (
        <div className='flex flex-col min-w-[250px] h-auto px-4 py-6  rounded-2xl relative'>
            <div>
                <Badge className={`rounded-xl ${badgeColor}`}>{badgeLabel}</Badge>
            </div>
            <div className='mt-4 flex-grow'>
                <h3 className='text-2xl font-semibold h-[48px] tracking-tighter'>{title}</h3>
                {description && <p className='text-[0.8rem] text-[#c2c2c2] mt-10 mb-10'>{description}</p>}
            </div>
            <div className='mt-auto border-b-2 border-black pb-1 px-1 w-fit flex flex-row gap-2 items-center'>
                <p className='font-semibold text-sm'>Read More</p>
                <GoArrowUpRight className='w-6 h-6' />
            </div>
        </div>
    );
};

export default ServiceCard;
