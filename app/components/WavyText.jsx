'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WavyText = ({
    text,
    delay = 0,
    duration = 0.05,
    interval = 5000, // Time between animations
    ...props
}) => {
    const [replay, setReplay] = useState(true);
    const letters = Array.from(text);

    // Trigger animation every 'interval' milliseconds (e.g., 5 seconds)
    useEffect(() => {
        const animationInterval = setInterval(() => {
            setReplay(false);  // Hide text briefly
            setTimeout(() => setReplay(true), 100); // Show text again after a very short delay
        }, interval);

        return () => clearInterval(animationInterval); // Cleanup the interval
    }, [interval]);

    const container = {
        hidden: {
            opacity: 0,
        },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 40,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200
            }
        }
    };

    // Animation for the color change (flow effect)
    const colorFlow = {
        initial: { color: '#000' }, // Initial sky-blue color
        animate: replay
            ? {
                color: ['#000', '#38bdf8'], // From blue to red
                transition: {
                    delay: 0.5, // Start the color flow after the text is fully shown
                    duration: 2, // Duration of the color flow effect
                    ease: 'easeInOut',
                    staggerChildren: duration, // Stagger each letter's color change
                }
            }
            : { color: '#0ea5e9' }, // Reset to blue when hidden
    };

    return (
        <motion.h1
            style={{ display: 'flex', overflow: 'hidden', justifyContent: 'center' }}
            variants={container}
            initial="hidden"
            animate={replay ? 'visible' : 'hidden'}
            {...props}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className='tracking-[0.2em] uppercase text-sm'
                >
                    <motion.span
                        variants={colorFlow}
                        initial="initial"
                        animate="animate"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default WavyText;
