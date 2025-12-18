import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { CardSpotlight } from "./CardSpotlight";

export function ExpandableCardDemo({ cards }) {
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col glass-dark sm:rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <div className={`w-full h-48 lg:h-60 bg-gradient-to-br ${active.gradient} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20" />
                                    <span className="text-8xl relative z-10">{active.icon}</span>
                                </div>
                            </motion.div>

                            <div className="flex-1 overflow-y-auto">
                                <div className="flex justify-between items-start p-6 pb-0">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="text-2xl font-bold text-white font-sans tracking-tight"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-400 text-base mt-1"
                                        >
                                            {active.shortDescription}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-6 py-2 text-sm rounded-full font-bold bg-cyan-500 hover:bg-cyan-600 text-white transition-colors"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="p-6 pt-4 relative">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-300 text-sm md:text-base leading-relaxed"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <CardSpotlight
                            layoutId={`card-${card.title}-${id}`}
                            key={`card-${card.title}-${id}`}
                            onClick={() => setActive(card)}
                            className="p-6 flex flex-col h-full justify-between rounded-2xl cursor-pointer glass-card glass-hover group"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <motion.div layoutId={`image-${card.title}-${id}`}>
                                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                                            {card.icon}
                                        </div>
                                    </motion.div>
                                    <div className="flex items-center gap-2">
                                        <span className={`h-2 w-2 rounded-full ${card.status === 'Production' || card.status === 'Live' ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`}></span>
                                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{card.status || 'Dev'}</span>
                                    </div>
                                </div>

                                <div>
                                    <motion.h3
                                        layoutId={`title-${card.title}-${id}`}
                                        className="font-bold text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors"
                                    >
                                        {card.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${card.description}-${id}`}
                                        className="text-neutral-400 text-sm line-clamp-2 leading-relaxed"
                                    >
                                        {card.shortDescription}
                                    </motion.p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {card.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="px-2 py-1 rounded-md bg-neutral-800 text-xs text-neutral-400 border border-neutral-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-between items-center">
                                <span className="text-xs text-neutral-500 font-mono">ID: {String(index + 1).padStart(3, '0')}</span>
                                <motion.button
                                    layoutId={`button-${card.title}-${id}`}
                                    className="text-sm font-medium text-cyan-500 hover:text-cyan-400 flex items-center gap-1 transition-colors"
                                >
                                    View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </motion.button>
                            </div>
                        </CardSpotlight>
                    ))}
                </div>
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
