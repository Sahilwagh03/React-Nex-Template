import Image from 'next/image'
import React from 'react'
import FooterNavItems from './_components/FooterNavItems'
import Button from '@/components-react-nex/Button/Button'
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const footerItems = [
        {
            footerNavLabel: 'About',
            footerLinks: ['Our Journey', 'Our Team', 'Testimonial', 'Career']
        },
        {
            footerNavLabel: 'Our Product',
            footerLinks: ['Product Overview', 'How It works', 'Price']
        },
        {
            footerNavLabel: 'Services',
            footerLinks: ['Offerings', 'Process', 'Case Studies']
        },
        {
            footerNavLabel: 'Offer',
            footerLinks: ['Discount', 'Packaging', 'Rewards']
        },
        {
            footerNavLabel: 'Contact Us',
            footerLinks: ['Informations', 'Contact Form', 'Relation Map']
        },
        {
            footerNavLabel: 'Policy',
            footerLinks: ['Cookies', 'Term& Conditions']
        }
    ]
    return (
        <section className='py-10 px-5 md:py-10 md:px-10 lg:py-20 lg:px-12 max-w-full relative h-auto'>
            <footer>
                <div className='grid md:grid-cols-1 gap-10 md:gap-5 lg:grid-cols-[1fr_2fr_0.6fr]'>
                    <div className='h-24 lg:h-36 flex flex-col justify-between'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src='/my-bank-logo.png' width={45} height={45} alt='my-bank' />
                            <h1 className='font-bold text-2xl text-primary'>MyBank</h1>
                        </div>
                        <p className='w-[80%] text-[#a7a7a7] text-sm'>Welcome to a world where your home
                            adapts to your needs effortlessly.
                            Moreover, the security features.
                        </p>
                    </div>
                    <div className='h-36 flex flex-row justify-between gap-5'>
                        {
                            footerItems.map(({ footerLinks, footerNavLabel }, index) => (
                                <FooterNavItems footerLinks={footerLinks} index={index} footerNavLabel={footerNavLabel} key={index} />
                            ))
                        }
                    </div>
                    <div className='h-auto md:mt-4 lg:mt-0 lg:h-36 flex lg:flex-col items-center justify-between flex-row md:items-end md:justify-between'>
                        <Button title='Subscribe Now' className='rounded-full bg-black text-white text-sm py-3 px-6 min-w-[150px]' />
                        <div className="flex space-x-4 lg:mt-4">
                            <div className="flex space-x-4 lg:mt-4">
                                <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                                    <div className="p-2 bg-[#f9a543] rounded-full">
                                        <FaInstagram className="h-5 w-5 text-white" />
                                    </div>
                                </Link>
                                <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                                    <div className="p-2 bg-[#f9a543] rounded-full">
                                        <FaFacebook className="h-5 w-5 text-white" />
                                    </div>
                                </Link>
                                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                                    <div className="p-2 bg-[#f9a543] rounded-full">
                                        <FaTwitter className="h-5 w-5 text-white" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center md:text-left font-medium text-[0.9rem] mt-10 items-center flex flex-col md:flex-row justify-between">
                    <div className="flex flex-row items-center gap-5 md:gap-0 space-y-2 md:space-y-0 md:space-x-12 lg:space-x-20">
                        <Link href="/policy" aria-label="Policy">
                            <span className="text-gray-600 hover:text-gray-900">Policy</span>
                        </Link>
                        <Link href="/cookies" aria-label="Cookies" className='!mt-0'>
                            <span className="text-gray-600 hover:text-gray-900">Cookies</span>
                        </Link>
                        <Link href="/terms" aria-label="Terms & Conditions" className='!mt-0'>
                            <span className="text-gray-600 hover:text-gray-900">Term & Conditions</span>
                        </Link>
                    </div>
                    <div className="text-center md:text-right mt-6 md:mt-0">
                        <p className="text-[#aeaeae]">
                            &copy; copyright mybank.co 2023. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer