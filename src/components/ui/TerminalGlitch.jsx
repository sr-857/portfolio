import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalGlitch() {
    const [messages, setMessages] = useState([]);
    const [scanLine, setScanLine] = useState(0);

    const terminalMessages = [
        '> System initialized...',
        '> Connecting to secure network...',
        '> Encryption protocol: AES-256',
        '> Threat detection: ACTIVE',
        '> Firewall status: ENABLED',
        '> Intrusion detection: MONITORING',
        '> Security clearance: VERIFIED',
        '> Access granted...',
    ];

    useEffect(() => {
        // Random terminal messages
        const messageInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                const msg = terminalMessages[Math.floor(Math.random() * terminalMessages.length)];
                const id = Date.now();
                setMessages(prev => [...prev, { id, text: msg }]);

                setTimeout(() => {
                    setMessages(prev => prev.filter(m => m.id !== id));
                }, 3000);
            }
        }, 5000);

        // Scan line animation
        const scanInterval = setInterval(() => {
            setScanLine(prev => (prev + 1) % 100);
        }, 50);

        return () => {
            clearInterval(messageInterval);
            clearInterval(scanInterval);
        };
    }, []);

    return (
        <>
            {/* CRT Scan Lines */}
            <div className="fixed inset-0 pointer-events-none z-[1]">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
                    }}
                />
                <div
                    className="absolute w-full h-1 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent blur-sm"
                    style={{
                        top: `${scanLine}%`,
                        transition: 'top 0.05s linear',
                    }}
                />
            </div>

            {/* Terminal Messages */}
            <div className="fixed bottom-4 left-4 z-[1] pointer-events-none">
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="font-mono text-xs text-cyan-400 mb-1 bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-cyan-500/20"
                        >
                            {msg.text}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Corner Brackets */}
            <div className="fixed top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-500/30 pointer-events-none z-[1]" />
            <div className="fixed top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-500/30 pointer-events-none z-[1]" />
            <div className="fixed bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-500/30 pointer-events-none z-[1]" />
            <div className="fixed bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-500/30 pointer-events-none z-[1]" />
        </>
    );
}
