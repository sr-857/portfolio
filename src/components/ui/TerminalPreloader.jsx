import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
    "Initializing kernel...",
    "Loading system modules...",
    "Mounting file systems...",
    "Starting network services...",
    "Establishing secure connection...",
    "Access granted.",
    "Welcome, User."
];

export const TerminalPreloader = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < bootSequence.length) {
            const timeout = setTimeout(() => {
                setLines((prev) => [...prev, bootSequence[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
            }, Math.random() * 300 + 100); // Random delay between 100ms and 400ms
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(onComplete, 800);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-black font-mono text-green-500 p-8 overflow-hidden flex flex-col justify-end"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-2xl w-full mx-auto">
                {lines.map((line, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-2"
                    >
                        <span className="text-gray-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
                        {line}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-3 h-5 bg-green-500 ml-1 align-middle"
                />
            </div>
        </motion.div>
    );
};
