'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DetailView = ({ item }) => {
    // Split the description by '\n' to handle new lines
    const descriptionLines = item.description.split('\n');
    const isEven = item.id % 2 === 0;
    const [isInView, setIsInView] = useState(false); // State to track when the component is in view
    const detailRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (detailRef.current) {
            observer.observe(detailRef.current);
        }

        return () => {
            if (detailRef.current) {
                observer.unobserve(detailRef.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={detailRef}
            initial={{ opacity: 0, x: isEven ? 50 : -50, y: 10 }} // Initial state before intersection
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.85, ease: 'easeOut' }} // Animation properties
            className='grid grid-cols-12 gap-5'
        >
            <div className={`col-span-12 md:col-span-7 h-auto flex flex-col justify-center ${isEven ? 'md:order-2' : 'order-2 md:order-1'}`}>
                {descriptionLines.map((line, index) => (
                    <p key={index} className="mb-2 text-gray-500">{line}</p> // Render each line as a new paragraph
                ))}
            </div>
            <div className={`col-span-12 md:col-span-5 h-auto flex justify-center items-center ${isEven ? 'md:order-1' : 'order-1 md:order-2'}`}>
                <div className="w-60 h-60 bg-sky-300 rounded-full"></div>
            </div>
        </motion.div>
    );
};

export default DetailView;