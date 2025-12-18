import React from "react";

export const GlowingCard = ({ children, className = "" }) => {
    return (
        <div className={`relative group p-[2px] rounded-2xl bg-gradient-to-b from-white/10 to-white/0 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative h-full bg-surfaceAlt/90 backdrop-blur-xl rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-colors">
                {children}
            </div>
        </div>
    );
};
