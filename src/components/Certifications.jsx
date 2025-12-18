import React from "react";
import SectionHeader from "./SectionHeader";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
    IconShieldCheck,
    IconSchool,
    IconTerminal2,
    IconDatabase,
    IconTestPipe,
    IconSearch,
    IconWorld,
    IconBrowser,
    IconBuildingSkyscraper,
} from "@tabler/icons-react";

import googleCert from "../assets/google-cert.png";

const SkeletonGradient1 = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);
const SkeletonGradient2 = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-700"></div>
);
const SkeletonGradient3 = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-900 to-neutral-900"></div>
);
const SkeletonGradient4 = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-900 to-neutral-900"></div>
);
const SkeletonGradient5 = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-900 to-neutral-900"></div>
);

const certifications = [
    {
        title: "Google Cybersecurity Professional",
        description: "Comprehensive professional certificate covering foundations of cybersecurity, Linux, SQL, python, and threat detection.",
        header: <img src={googleCert} alt="Google Cybersecurity Professional" className="flex flex-1 w-full h-full min-h-[6rem] object-cover rounded-xl" />,
        icon: <IconShieldCheck className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-2",
    },
    {
        title: "Certified Cybersecurity Educator",
        description: "Red Team Leaders - Advanced teaching methodologies for cybersecurity concepts.",
        header: <SkeletonGradient2 />,
        icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Windows Kernel Exploitation",
        description: "Deep dive into kernel-level vulnerabilities and exploitation techniques.",
        header: <SkeletonGradient3 />,
        icon: <IconTerminal2 className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "SQL Injection Attacks",
        description: "EC-Council - Mastery of SQL injection vectors and prevention strategies.",
        header: <SkeletonGradient4 />,
        icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Hacking & Pentesting Lab",
        description: "Setting up and managing secure in-house penetration testing environments.",
        header: <SkeletonGradient5 />,
        icon: <IconTestPipe className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Windows Forensic Analysis",
        description: "CDAC - Deep dive into Windows artifacts and forensic investigation.",
        header: <SkeletonGradient1 />,
        icon: <IconSearch className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Introduction to Cybersecurity",
        description: "Cisco Networking Academy - Core security principles and network defense.",
        header: <SkeletonGradient2 />,
        icon: <IconWorld className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Web Browser for Hacking",
        description: "Leveraging browser tools for security testing and analysis.",
        header: <SkeletonGradient3 />,
        icon: <IconBrowser className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Enterprise Job Simulations",
        description: "Deloitte, Mastercard, AIG, Tata, AWS, EA - Practical enterprise scenarios.",
        header: <SkeletonGradient4 />,
        icon: <IconBuildingSkyscraper className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-3",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-surface/50">
            <div className="max-w-6xl mx-auto px-4">
                <SectionHeader
                    eyebrow="Learning"
                    title="Certifications & Training"
                    subtitle="15+ industry-recognized certifications demonstrating continuous learning and expertise."
                />
                <BentoGrid className="max-w-4xl mx-auto mt-10">
                    {certifications.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
