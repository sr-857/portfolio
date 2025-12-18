import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer } from "../motionUtils";
import { TracingBeam } from "./ui/TracingBeam";
import { EvervaultCard, Icon } from "./ui/EvervaultCard";

const experiences = [
    {
        company: "Codec Technologies India",
        role: "Cyber Security Intern",
        period: "November 2024 - Present",
        description: "Conducting vulnerability assessments and penetration testing across client infrastructure to identify security weaknesses and misconfigurations. Performing threat analysis and risk assessment using industry frameworks including OWASP Top 10 and MITRE ATT&CK.",
        skills: ["Vulnerability Assessment", "Penetration Testing", "OWASP Top 10", "MITRE ATT&CK"]
    },
    {
        company: "UptoSkills",
        role: "Cyber Security Intern",
        period: "November 2025 - Present",
        description: "Executing security assessments and vulnerability scanning on enterprise systems under industry mentorship. Applying theoretical knowledge to real-world security scenarios including threat modeling and risk mitigation. Developing proficiency in SIEM tools and log analysis.",
        skills: ["SIEM", "Log Analysis", "Threat Modeling", "Risk Mitigation"]
    },
    {
        company: "ApexPlanet Software Pvt Ltd",
        role: "Internship Trainee",
        period: "November 2025 - Present",
        description: "Learning cybersecurity fundamentals through practical training in network security and system hardening. Studying threat detection methodologies and defensive security techniques. Gaining exposure to enterprise security workflows and best practices.",
        skills: ["Network Security", "System Hardening", "Threat Detection"]
    },
    {
        company: "Perplexity AI",
        role: "Student Affiliate Partner",
        period: "October 2025 - November 2025",
        description: "Led Comet initiative promoting AI tools to 500+ students and educators for enhanced learning and research. Drove technology adoption and provided guidance on integrating AI into academic workflows.",
        skills: ["Leadership", "Technology Advocacy", "Education"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-surface/50">
            <div className="max-w-6xl mx-auto px-4">
                <SectionHeader
                    eyebrow="Experience"
                    title="Professional Journey"
                    subtitle="Hands-on roles in security assessment, threat detection, and community leadership."
                />

                <TracingBeam className="px-6">
                    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="mb-10">
                                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-white/10">
                                    {exp.period}
                                </h2>

                                <div className="p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-cyan-500/50 transition-colors group">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-1">{exp.role}</h3>
                                    <h4 className="text-lg text-white font-semibold mb-4">{exp.company}</h4>

                                    <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TracingBeam>
            </div>
        </section>
    );
}
