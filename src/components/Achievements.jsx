import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp } from "../motionUtils";
import { PinContainer } from "./ui/3dPin";
import { Meteors } from "./ui/Meteors";

const achievements = [
    {
        title: "Smart India Hackathon 2024",
        subtitle: "National Runner-Up",
        description: "Led cross-functional team to second place among thousands of participants in India's largest hackathon, developing innovative security solution.",
        icon: "🏆"
    },
    {
        title: "SKY HACK 2025",
        subtitle: "National Participant",
        description: "Competed in national cybersecurity hackathon by Astralashaya, applying security knowledge to real-world security challenges.",
        icon: "🎯"
    },
    {
        title: "Student Coordinator, Edge3",
        subtitle: "Community Leadership",
        description: "Organized cybersecurity workshops, mentorship programs, and technical events for 300+ university students.",
        icon: "👥"
    },
    {
        title: "Google Cybersecurity Professional",
        subtitle: "Industry Certification",
        description: "Completed comprehensive certification covering Foundations of Cybersecurity, Tools of the Trade (Linux and SQL), and Assets Threats and Vulnerabilities.",
        icon: "🎓"
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-surface">
            <div className="max-w-6xl mx-auto px-4">
                <SectionHeader
                    eyebrow="Achievements"
                    title="Recognition & Leadership"
                    subtitle="Hackathon victories, certifications, and community impact."
                />

                <div className="grid md:grid-cols-2 gap-8 mt-10">
                    {achievements.map((achievement, idx) => (
                        <div key={idx} className="h-[25rem] w-full flex items-center justify-center">
                            <PinContainer title={achievement.subtitle}>
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                                    <Meteors number={20} />
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                        {achievement.title}
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500">
                                            {achievement.subtitle}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 items-center justify-center text-6xl">
                                        {achievement.icon}
                                    </div>
                                    <p className="text-sm text-gray-400 mt-4">
                                        {achievement.description}
                                    </p>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
