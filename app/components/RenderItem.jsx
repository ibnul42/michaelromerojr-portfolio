'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function RenderItem({ children, delay = 0, initialX = 0, initialY = 50, duration = 0.85, classStyle = '' }) {
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
            initial={{ opacity: 0, x: initialX, y: initialY }} // Initial state before intersection
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}} // Animate when in view
            transition={{ duration: duration, delay: delay, ease: 'easeOut' }} // Animation properties
            className={classStyle}
        >
            {children}
        </motion.div>
    )
}

export default RenderItem
