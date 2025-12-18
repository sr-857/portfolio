import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { LampContainer } from "./ui/Lamp";

const skills = [
    // Security Skills
    { quote: "Vulnerability Assessment", name: "Security" },
    { quote: "Penetration Testing", name: "Security" },
    { quote: "Threat Hunting", name: "Security" },
    { quote: "Incident Response", name: "Security" },
    { quote: "Malware Analysis", name: "Security" },
    { quote: "Risk Assessment", name: "Security" },
    // Languages
    { quote: "Python", name: "Languages" },
    { quote: "Java", name: "Languages" },
    { quote: "C/C++", name: "Languages" },
    { quote: "JavaScript", name: "Languages" },
    { quote: "SQL", name: "Languages" },
    { quote: "Bash", name: "Languages" },
    // Tools
    { quote: "Kali Linux", name: "Tools" },
    { quote: "Metasploit", name: "Tools" },
    { quote: "Burp Suite", name: "Tools" },
    { quote: "Wireshark", name: "Tools" },
    { quote: "Nmap", name: "Tools" },
    { quote: "OWASP ZAP", name: "Tools" },
    { quote: "Splunk", name: "Tools" },
    { quote: "YARA", name: "Tools" },
    // Technologies
    { quote: "AWS", name: "Cloud" },
    { quote: "Azure", name: "Cloud" },
    { quote: "Docker", name: "DevOps" },
    { quote: "FastAPI", name: "Backend" },
    { quote: "React", name: "Frontend" },
    { quote: "PostgreSQL", name: "Database" },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-slate-950">
            <LampContainer className="pt-40">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Technical Arsenal
                </motion.h1>

                <div className="mt-10 w-full max-w-7xl px-4">
                    <InfiniteMovingCards
                        items={skills}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </LampContainer>
        </section>
    );
}
