import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("INITIALIZING SYSTEM...");

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        const textTimer = setInterval(() => {
            const texts = [
                "LOADING MODULES...",
                "VERIFYING SECURITY...",
                "ESTABLISHING CONNECTION...",
                "ACCESS GRANTED"
            ];
            setText(texts[Math.floor(Math.random() * texts.length)]);
        }, 400);

        return () => {
            clearInterval(timer);
            clearInterval(textTimer);
        };
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(onComplete, 500);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center font-mono"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-64">
                <div className="flex justify-between text-cyan-500 text-xs mb-2">
                    <span>{text}</span>
                    <span>{Math.min(100, Math.floor(progress))}%</span>
                </div>
                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-cyan-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </motion.div>
    );
};
