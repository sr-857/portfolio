import { motion } from "framer-motion";
import { fadeUp } from "../motionUtils";

export default function SectionHeader({ eyebrow, title, subtitle }) {
    return (
        <motion.div
            className="mb-8 text-center"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
        >
            {eyebrow && (
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-2">
                    {eyebrow}
                </p>
            )}
            <h2 className="font-display text-3xl md:text-4xl mb-3">{title}</h2>
            {subtitle && (
                <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
