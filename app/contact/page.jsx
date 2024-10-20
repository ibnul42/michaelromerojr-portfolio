'use client'
import React from 'react'
import Title from '../components/Title'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import Link from 'next/link';
import ContactForm from './ContactForm';
import RenderItem from '../components/RenderItem';

export default function Page() {
    return (
        <div className='w-full max-w-[1920px] mx-auto space-y-5'>
            <Title text='Contact me' />
            <RenderItem>
                <div className="py-3 md:py-5 px-2 md:px-5 shadow-[0_0_30px_0_rgba(0,0,0,0.25)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex gap-3 items-center">
                        <Link
                            href='https://www.google.com/maps/place/Mirpur-1,+Dhaka/@23.7916751,90.3517447,16z/data=!4m6!3m5!1s0x3755c0e96fce29dd:0x6ccd9e51aba9e64d!8m2!3d23.7956037!4d90.3536548!16s%2Fg%2F11h051wl9?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-shrink-0 w-10 h-10 border border-sky-700 hover:bg-sky-700 transition-all rounded-full flex justify-center items-center'>
                            <FaMapMarkerAlt />
                        </Link>
                        <div className="text-sky-800">
                            <p className='text-lg font-bold'>Address</p>
                            <p className='font-medium'>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Link
                            href='tel:+155895548855'
                            className='flex-shrink-0 w-10 h-10 border border-sky-700 hover:bg-sky-700 transition-all rounded-full flex justify-center items-center'>
                            <FaPhoneAlt />
                        </Link>
                        <div className="text-sky-800">
                            <p className='text-lg font-bold'>Call</p>
                            <p className='font-medium'>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Link
                            href='mailto:info@example.com'
                            className='flex-shrink-0 w-10 h-10 border border-sky-700 hover:bg-sky-700 transition-all rounded-full flex justify-center items-center'>
                            <IoMailSharp />
                        </Link>
                        <div className="text-sky-800">
                            <p className='text-lg font-bold'>Email</p>
                            <p className='font-medium'>info@example.com</p>
                        </div>
                    </div>
                </div>
            </RenderItem>
            <ContactForm />
        </div>
    )
}
