import React from "react";
import { motion } from "framer-motion";

export default function SlideIndicators({ totalSlides, currentSlide, onSlideChange }) {
    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSlideChange(index)}
                    className="group relative"
                    aria-label={`Go to slide ${index + 1}`}
                >
                    <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "bg-cyan-500 scale-150"
                                : "bg-neutral-600 hover:bg-neutral-400"
                            }`}
                    />
                    {currentSlide === index && (
                        <motion.div
                            layoutId="activeSlide"
                            className="absolute inset-0 -m-1 rounded-full border-2 border-cyan-500"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
