import { cn } from "../../utils/cn";

export const GlitchText = ({
    text,
    className,
}) => {
    return (
        <div className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-400 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-all duration-100 select-none">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-400 opacity-0 group-hover:opacity-70 group-hover:translate-x-[-2px] group-hover:translate-y-[2px] transition-all duration-100 select-none">
                {text}
            </span>
        </div>
    );
};
