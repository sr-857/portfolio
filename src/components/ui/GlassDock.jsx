import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Folder, Award, GraduationCap, Mail, Terminal } from 'lucide-react';

export default function GlassDock({ onNavigate, currentSlide }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const dockItems = [
        { name: 'Terminal', icon: Terminal, slideIndex: 0, color: 'from-gray-500 to-slate-500' },
        { name: 'Home', icon: Home, slideIndex: 1, color: 'from-cyan-500 to-blue-500' },
        { name: 'About', icon: User, slideIndex: 2, color: 'from-violet-500 to-purple-500' },
        { name: 'Skills', icon: Code, slideIndex: 3, color: 'from-emerald-500 to-green-500' },
        { name: 'Experience', icon: Briefcase, slideIndex: 4, color: 'from-amber-500 to-orange-500' },
        { name: 'Projects', icon: Folder, slideIndex: 5, color: 'from-pink-500 to-rose-500' },
        { name: 'Achievements', icon: Award, slideIndex: 6, color: 'from-yellow-500 to-amber-500' },
        { name: 'Certifications', icon: GraduationCap, slideIndex: 7, color: 'from-indigo-500 to-blue-500' },
        { name: 'Contact', icon: Mail, slideIndex: 8, color: 'from-red-500 to-pink-500' },
    ];

    const handleClick = (slideIndex) => {
        if (onNavigate) {
            onNavigate(slideIndex);
        }
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[5000] pointer-events-auto">
            {/* Glass Dock Container */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card px-3 py-2 rounded-2xl shadow-2xl"
                style={{
                    background: 'rgba(20, 25, 35, 0.5)',
                    backdropFilter: 'blur(50px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(50px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
                }}
            >
                <div className="flex items-end gap-2 h-16">
                    {dockItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = currentSlide === item.slideIndex;
                        const isHovered = hoveredIndex === index;
                        const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 3;
                        const scale = hoveredIndex !== null ? Math.max(1, 1.5 - distance * 0.2) : 1;

                        return (
                            <motion.button
                                key={item.name}
                                onClick={() => handleClick(item.slideIndex)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                animate={{
                                    scale: scale,
                                    y: isHovered ? -8 : 0,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 25,
                                }}
                                className="relative group"
                                style={{ transformOrigin: 'bottom' }}
                            >
                                {/* Icon Container */}
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${isActive ? 'bg-gradient-to-br ' + item.color : 'bg-white/10'
                                        } ${isActive ? 'shadow-lg' : 'hover:bg-white/20'}`}
                                >
                                    <Icon
                                        size={24}
                                        className={`${isActive ? 'text-white' : 'text-gray-300'} transition-colors`}
                                    />
                                </div>

                                {/* Active Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeDock"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Tooltip */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: isHovered ? 1 : 0,
                                        y: isHovered ? -60 : -50,
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                                >
                                    <div className="glass-dark px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                                        <span className="text-xs font-medium text-white">{item.name}</span>
                                    </div>
                                    {/* Tooltip Arrow */}
                                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-black/30 backdrop-blur-sm rotate-45 border-r border-b border-white/10" />
                                </motion.div>
                            </motion.button>
                        );
                    })}
                </div>
            </motion.div>

            {/* Reflection Effect */}
            <div
                className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 50%)',
                }}
            />
        </div>
    );
}
