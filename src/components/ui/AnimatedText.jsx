import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText({ text, className = "", delay = 0 }) {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}

export function GradientText({ children, className = "" }) {
    return (
        <motion.span
            className={`bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
            animate={{
                backgroundPosition: ['0% center', '200% center', '0% center'],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
            }}
        >
            {children}
        </motion.span>
    );
}
