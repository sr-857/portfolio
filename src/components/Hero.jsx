import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";
import { Button } from "./ui/MovingBorder";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                I am a <Highlight className="text-black dark:text-white">Cybersecurity Engineer</Highlight>
                <br />
                <span className="text-lg md:text-2xl text-neutral-400 mt-4 block font-normal">
                    Specializing in Threat Hunting, Vulnerability Assessment, and Security Engineering.
                </span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center gap-4 mt-8"
            >
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 font-semibold"
                    onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
                >
                    View Projects
                </Button>
                <a
                    href="mailto:subhajitroy857@gmail.com"
                    className="px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors flex items-center"
                >
                    Contact Me
                </a>
            </motion.div>
        </HeroHighlight>
    );
}
