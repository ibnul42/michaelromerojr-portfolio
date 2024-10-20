'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import RenderItem from './components/RenderItem';
import Image from 'next/image';

const ProjectOverview = ({ item }) => {
    // Split the description by '\n' to handle new lines
    const descriptionLines = item.description.split('\n');
    const isEven = item.sl % 2 === 0;

    return (
        <RenderItem>
            <div
                className='grid grid-cols-12 gap-5 pt-10'>
                <div className={`col-span-12 md:col-span-7 h-auto flex flex-col gap-3 justify-center ${isEven ? 'md:order-2' : 'order-2 md:order-1'}`}>
                    <p className='text-3xl font-bold text-sky-900'>{item.title}</p>
                    <div className="space-y-1">
                        {descriptionLines.map((line, index) => (
                            <p key={index} className="mb-2 text-gray-500">{line}</p>
                        ))}
                    </div>
                </div>

                <div className={`col-span-12 md:col-span-5 h-auto flex justify-center ${isEven ? 'md:order-1' : 'order-1 md:order-2'}`}>
                    {/* <div className="w-40 h-40 bg-sky-300 rounded-full"></div> */}
                    <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt=''
                    className='w-40 h-auto rounded-lg'
                    />
                </div>
            </div>
        </RenderItem>
    );
};

export default ProjectOverview;