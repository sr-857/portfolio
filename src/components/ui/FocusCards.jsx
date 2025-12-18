import React, { useState } from "react";
import { cn } from "../../utils/cn";

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
                <span className="text-9xl">{card.icon}</span>
            </div>
            <div
                className={cn(
                    "absolute inset-0 flex flex-col justify-end py-8 px-4 transition-opacity duration-300 z-20",
                    hovered === index ? "opacity-100" : "opacity-100"
                )}
            >
                <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.title}
                </div>
                <div className="text-sm text-neutral-300 mt-2">
                    {card.description}
                </div>
            </div>
        </div>
    )
);

Card.displayName = "Card";

export function FocusCards({ cards }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
