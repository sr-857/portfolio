import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Crosshair Lines - Horizontal */}
            <motion.div
                className="fixed top-0 left-0 h-[1px] bg-cyan-500/50 pointer-events-none z-[9998]"
                style={{
                    top: cursorYSpring,
                    left: 0,
                    right: 0,
                    scaleX: isHovering ? 1 : 0,
                    opacity: isHovering ? 0.5 : 0,
                }}
            />

            {/* Crosshair Lines - Vertical */}
            <motion.div
                className="fixed top-0 left-0 w-[1px] bg-cyan-500/50 pointer-events-none z-[9998]"
                style={{
                    left: cursorXSpring,
                    top: 0,
                    bottom: 0,
                    scaleY: isHovering ? 1 : 0,
                    opacity: isHovering ? 0.5 : 0,
                }}
            />

            {/* Main Cursor - Diamond/Target */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                {/* Center Dot */}
                <motion.div
                    className="w-1 h-1 bg-cyan-400 rounded-full"
                    animate={{
                        scale: isClicking ? 0.5 : 1
                    }}
                />

                {/* Outer Bracket/Ring */}
                <motion.div
                    className="absolute border border-cyan-400"
                    animate={{
                        width: isHovering ? 40 : 20,
                        height: isHovering ? 40 : 20,
                        rotate: isHovering ? 45 : 0,
                        scale: isClicking ? 0.8 : 1,
                        opacity: 1,
                        borderRadius: isHovering ? "0%" : "50%"
                    }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300
                    }}
                />

                {/* Scan Text (Only on hover) */}
                <motion.div
                    className="absolute top-6 left-6 text-[10px] font-mono text-cyan-400 whitespace-nowrap"
                    animate={{
                        opacity: isHovering ? 1 : 0,
                        x: isHovering ? 10 : 0
                    }}
                >
                    TARGET_LOCKED
                </motion.div>
            </motion.div>
        </>
    );
};
