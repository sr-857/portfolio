import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../utils/cn";
import { Shield } from "lucide-react";

export const FloatingNav = ({
    navItems,
    className,
    currentSlide = 0,
    onNavClick,
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 glass-card shadow-lg",
                    className
                )}
            >
                <Shield className="text-cyan-500" size={20} />
                {navItems.map((navItem, idx) => {
                    const isActive = currentSlide === navItem.slideIndex;
                    return (
                        <button
                            key={`link=${idx}`}
                            onClick={(e) => onNavClick && onNavClick(e, navItem)}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors",
                                isActive && "text-cyan-500 dark:text-cyan-400"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden sm:block text-sm">{navItem.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-500"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
                <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                    <a href="mailto:subhajitroy857@gmail.com">
                        <span>Contact</span>
                    </a>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};
