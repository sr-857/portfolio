import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Globe } from "./ui/Globe";
import { AuroraBackground } from "./ui/AuroraBackground";
import about1 from "../assets/threat.png";
import about2 from "../assets/engineering.png";
import about3 from "../assets/malware.png";

const ImageHeader = ({ src }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
        <img src={src} alt="About" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
    </div>
);

const EducationHeader = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-900/50 to-blue-900/50 p-4">
        <div className="text-left">
            <h4 className="text-cyan-400 font-semibold">Assam Central University</h4>
            <p className="text-sm text-gray-300">B.Sc. Computer Science</p>
            <p className="text-xs text-gray-500">August 2025 - Present</p>
        </div>
    </div>
);

const items = [
    {
        title: "Threat Hunter",
        description: "Proactively searching for malware and hidden threats using advanced detection techniques.",
        header: <ImageHeader src={about1} />,
        className: "md:col-span-2",
    },
    {
        title: "Global Impact",
        description: "Monitoring and analyzing threats across the digital landscape.",
        header: <Globe className="h-full w-full" />,
        className: "md:col-span-1",
    },
    {
        title: "Security Engineer",
        description: "Building robust defense systems and automating security operations with Python.",
        header: <ImageHeader src={about2} />,
        className: "md:col-span-1",
    },
    {
        title: "Education",
        description: "Currently pursuing B.Sc. in Computer Science at Assam Central University, Silchar.",
        header: <EducationHeader />,
        className: "md:col-span-2",
    },
];

export default function About() {
    return (
        <section id="about" className="relative">
            <AuroraBackground>
                <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
                    <SectionHeader
                        eyebrow="About Me"
                        title="Who I Am"
                        subtitle="Cybersecurity professional with hands-on experience in vulnerability assessment, threat analysis, and security engineering. Smart India Hackathon 2024 National Runner-Up with 15+ industry certifications."
                    />
                    <BentoGrid className="max-w-4xl mx-auto">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </AuroraBackground>
        </section>
    );
}
