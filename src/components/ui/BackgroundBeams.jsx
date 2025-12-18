import React from "react";
import { cn } from "../../utils/cn";

export const BackgroundBeams = ({ className }) => {
    return (
        <div
            className={cn(
                "absolute top-0 left-0 w-full h-full overflow-hidden bg-neutral-950 flex flex-col items-center justify-center pointer-events-none",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/0" />

            {/* Beams */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] bg-cyan-500/20 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white/10 w-[1px] h-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.3,
                            animation: `beam ${5 + Math.random() * 10}s infinite linear`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
