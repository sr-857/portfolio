import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp } from "../motionUtils";
import { WavyBackground } from "./ui/WavyBackground";
import { Button } from "./ui/MovingBorder";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <WavyBackground className="max-w-4xl mx-auto pb-40">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">
                        Contact
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Open to cybersecurity internships, research collaborations, and exciting projects. Let's build something secure together.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                        <a
                            href="mailto:subhajitroy857@gmail.com"
                            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            <Mail size={20} />
                            subhajitroy857@gmail.com
                        </a>
                        <span className="flex items-center gap-2 text-gray-300">
                            <MapPin size={20} />
                            Assam, India
                        </span>
                    </div>

                    <div className="flex gap-4 justify-center mb-8">
                        <a
                            href="https://github.com/sr-857"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/sr857"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>

                    <Button
                        borderRadius="1.75rem"
                        className="bg-bg text-white border-slate-800"
                        as="a"
                        href="mailto:subhajitroy857@gmail.com"
                    >
                        Send Message
                    </Button>
                </motion.div>
            </WavyBackground>
        </section>
    );
}
