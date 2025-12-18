import React from "react";
import { ExpandableCardDemo } from "./ui/ExpandableCard";
import SectionHeader from "./SectionHeader";

const projects = [
    {
        title: "PhishGuard AI",
        shortDescription: "ML Phishing Detection System",
        description: "Engineered machine learning system achieving 98% accuracy in phishing email detection using Logistic Regression and TF-IDF NLP. Built production-ready full-stack application with FastAPI backend and React frontend.",
        tags: ["Python", "ML", "FastAPI", "React"],
        status: "Production",
        ctaText: "View Code",
        ctaLink: "https://github.com/sr-857/phishguard-ai",
        icon: "🛡️",
        gradient: "from-cyan-500 to-emerald-500",
        content: () => {
            return (
                <div className="space-y-6 font-sans">
                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Challenge</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Phishing attacks are becoming increasingly sophisticated, bypassing traditional rule-based filters. The goal was to build an intelligent system capable of detecting semantic patterns in malicious emails with high precision and low latency.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Solution</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            I engineered a machine learning pipeline using <strong>Logistic Regression</strong> and <strong>TF-IDF</strong> vectorization to analyze email bodies and headers. The model was trained on a balanced dataset of 50k+ emails. The system is deployed as a microservice using <strong>FastAPI</strong>, serving real-time predictions to a <strong>React</strong> dashboard.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">Key Features</h4>
                        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1">
                            <li>Real-time email analysis API.</li>
                            <li>Confidence score visualization.</li>
                            <li>Detailed report generation for SOC analysts.</li>
                            <li>Dockerized deployment for scalability.</li>
                        </ul>
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Impact</h4>
                        <div className="flex gap-6">
                            <div>
                                <span className="block text-2xl font-bold text-emerald-500">98%</span>
                                <span className="text-xs text-neutral-500">Detection Accuracy</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-cyan-500">&lt;50ms</span>
                                <span className="text-xs text-neutral-500">Inference Time</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        title: "Threat Hunting Playbooks",
        shortDescription: "Sigma & YARA Detection Rules",
        description: "Developed comprehensive library of detection rules (Sigma, YARA) for APT groups. Integrated with Splunk and Elastic SIEM for automated alert generation. Reduced mean time to detect (MTTD) by 40%.",
        tags: ["Sigma", "YARA", "Splunk", "Elastic"],
        status: "Live",
        ctaText: "View Playbooks",
        ctaLink: "https://github.com/sr-857",
        icon: "📜",
        gradient: "from-orange-500 to-yellow-500",
        content: () => {
            return (
                <div className="space-y-6 font-sans">
                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Challenge</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Security Operations Centers often struggle with alert fatigue and missing advanced persistent threats (APTs) due to generic detection rules. The objective was to create high-fidelity, behavior-based detection logic mapped to the MITRE ATT&CK framework.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Solution</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            I developed a repository of custom <strong>Sigma</strong> and <strong>YARA</strong> rules targeting specific TTPs used by groups like APT29 and Lazarus. These rules were tested in a lab environment and then translated for deployment in <strong>Splunk</strong> and <strong>Elastic SIEM</strong>.
                        </p>
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Impact</h4>
                        <div className="flex gap-6">
                            <div>
                                <span className="block text-2xl font-bold text-emerald-500">40%</span>
                                <span className="text-xs text-neutral-500">Reduction in MTTD</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-cyan-500">150+</span>
                                <span className="text-xs text-neutral-500">Custom Rules</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        title: "CyberSentinel",
        shortDescription: "SOC Threat Intel Platform",
        description: "Architected SOC Threat Intelligence Platform aggregating feeds from AlienVault OTX and MISP. Implemented automated IOC extraction and correlation engine. Deployed on AWS using Docker containers.",
        tags: ["Threat Intel", "AWS", "Docker", "Python"],
        status: "v2.0",
        ctaText: "View Platform",
        ctaLink: "https://github.com/sr-857",
        icon: "👁️",
        gradient: "from-pink-500 to-indigo-500",
        content: () => {
            return (
                <div className="space-y-6 font-sans">
                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Challenge</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Fragmented threat intelligence sources make it difficult for analysts to correlate indicators of compromise (IOCs) effectively. We needed a centralized platform to aggregate, normalize, and correlate threat data in real-time.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Solution</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            CyberSentinel is a custom TIP built with <strong>Python</strong> that ingests feeds from <strong>AlienVault OTX</strong> and <strong>MISP</strong>. It uses a graph database to map relationships between IPs, domains, and hashes. The entire infrastructure is containerized with <strong>Docker</strong> and orchestrated on <strong>AWS ECS</strong>.
                        </p>
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Impact</h4>
                        <div className="flex gap-6">
                            <div>
                                <span className="block text-2xl font-bold text-emerald-500">10k+</span>
                                <span className="text-xs text-neutral-500">IOCs Processed Daily</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-cyan-500">Unified</span>
                                <span className="text-xs text-neutral-500">Intelligence View</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        title: "Malware Analysis Sandbox",
        shortDescription: "Automated Cuckoo Sandbox",
        description: "Built automated malware analysis environment using Cuckoo Sandbox and VirtualBox. Configured network isolation and traffic capture for safe detonation. Generated detailed behavioral reports.",
        tags: ["Malware Analysis", "Cuckoo", "VirtualBox"],
        status: "Active",
        ctaText: "View Sandbox",
        ctaLink: "https://github.com/sr-857",
        icon: "🦠",
        gradient: "from-blue-500 to-violet-500",
        content: () => {
            return (
                <div className="space-y-6 font-sans">
                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Challenge</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Analyzing potential malware samples manually is risky and time-consuming. The goal was to create a safe, isolated environment for automated detonation and behavioral analysis of suspicious files.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Solution</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            I deployed a hardened <strong>Cuckoo Sandbox</strong> instance backed by <strong>VirtualBox</strong> VMs. The network was configured with strict isolation rules to prevent leakage while capturing all C2 traffic using <strong>tcpdump</strong> and <strong>Suricata</strong>.
                        </p>
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Impact</h4>
                        <div className="flex gap-6">
                            <div>
                                <span className="block text-2xl font-bold text-emerald-500">Safe</span>
                                <span className="text-xs text-neutral-500">Detonation Environment</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-cyan-500">Auto</span>
                                <span className="text-xs text-neutral-500">Report Generation</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        title: "AUTOPS AI",
        shortDescription: "Security Operations Automation",
        description: "Automated Operations System for streamlined security workflows. Integrates various security tools into a unified dashboard for real-time monitoring and response orchestration.",
        tags: ["Automation", "Security Ops", "Python"],
        status: "Beta",
        ctaText: "View System",
        ctaLink: "https://github.com/sr-857",
        icon: "🤖",
        gradient: "from-red-500 to-orange-500",
        content: () => {
            return (
                <div className="space-y-6 font-sans">
                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Challenge</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Repetitive Tier-1 SOC tasks consume valuable analyst time. We needed a SOAR-like solution to automate routine workflows such as IP reputation checks and user account lockouts.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Solution</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            AUTOPS AI is a modular automation framework written in <strong>Python</strong>. It integrates with APIs from Active Directory, Firewall, and EDR solutions to execute pre-defined playbooks based on alert triggers.
                        </p>
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Impact</h4>
                        <div className="flex gap-6">
                            <div>
                                <span className="block text-2xl font-bold text-emerald-500">60%</span>
                                <span className="text-xs text-neutral-500">Time Saved on Triage</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-cyan-500">24/7</span>
                                <span className="text-xs text-neutral-500">Automated Response</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        title: "Portfolio V2",
        shortDescription: "Interactive React Portfolio",
        description: "This high-performance, interactive portfolio website. Built with React, Vite, and Tailwind CSS. Features advanced UI components like 3D cards, tracing beams, and bento grids.",
        tags: ["React", "Vite", "Tailwind", "Framer Motion"],
        status: "Live",
        ctaText: "View Source",
        ctaLink: "https://github.com/sr-857",
        icon: "🌐",
        gradient: "from-violet-500 to-purple-500",
        content: () => {
            return (
                <div className="space-y-6 font-sans">
                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Challenge</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            To stand out in the competitive cybersecurity market, a standard resume isn't enough. I needed a digital presence that reflects my technical skills in both security and engineering, with a "world-class" aesthetic.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Solution</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            I built this portfolio using <strong>React</strong> and <strong>Vite</strong> for performance, styled with <strong>Tailwind CSS</strong>. I integrated advanced UI libraries like <strong>Aceternity UI</strong> and <strong>Framer Motion</strong> to create immersive, interactive experiences like the 3D card grid and spotlight effects.
                        </p>
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Impact</h4>
                        <div className="flex gap-6">
                            <div>
                                <span className="block text-2xl font-bold text-emerald-500">100</span>
                                <span className="text-xs text-neutral-500">Lighthouse Score</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-cyan-500">A+</span>
                                <span className="text-xs text-neutral-500">Design Aesthetic</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        title: "Burp Suite Lab",
        shortDescription: "Web Security Testing Lab",
        description: "Custom web security testing lab environment. Configured for practicing advanced penetration testing techniques, including SQL injection, XSS, and CSRF attacks.",
        tags: ["Burp Suite", "Web Security", "Pentesting"],
        status: "Lab",
        ctaText: "View Lab",
        ctaLink: "https://github.com/sr-857",
        icon: "🐞",
        gradient: "from-green-500 to-teal-500",
        content: () => {
            return (
                <div className="space-y-6 font-sans">
                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Challenge</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Theoretical knowledge of web vulnerabilities is insufficient. I needed a controlled, realistic environment to practice exploitation techniques and validate remediation strategies safely.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Solution</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            I set up a local lab environment running vulnerable applications like DVWA and OWASP Juice Shop. I configured <strong>Burp Suite Professional</strong> as the primary interception proxy, utilizing extensions for advanced scanning and payload generation.
                        </p>
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Impact</h4>
                        <div className="flex gap-6">
                            <div>
                                <span className="block text-2xl font-bold text-emerald-500">Hands-on</span>
                                <span className="text-xs text-neutral-500">Exploitation Skills</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-cyan-500">Deep</span>
                                <span className="text-xs text-neutral-500">Protocol Understanding</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        title: "Network Traffic Analyzer",
        shortDescription: "Python Packet Sniffer",
        description: "Python-based tool for capturing and analyzing network packets. Uses Scapy for packet manipulation and analysis. Identifies suspicious traffic patterns and potential anomalies.",
        tags: ["Python", "Scapy", "Networking"],
        status: "v1.0",
        ctaText: "View Tool",
        ctaLink: "https://github.com/sr-857",
        icon: "📡",
        gradient: "from-indigo-500 to-blue-500",
        content: () => {
            return (
                <div className="space-y-6 font-sans">
                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Challenge</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Commercial network analysis tools can be overkill for quick diagnostics. I wanted to build a lightweight, customizable tool to understand the low-level details of network protocols and packet structures.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">The Solution</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            I developed a CLI tool using <strong>Python</strong> and <strong>Scapy</strong>. It captures packets in promiscuous mode, parses headers (IP, TCP, UDP), and applies heuristic logic to flag suspicious activities like SYN scans or cleartext credential transmission.
                        </p>
                    </div>

                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Impact</h4>
                        <div className="flex gap-6">
                            <div>
                                <span className="block text-2xl font-bold text-emerald-500">Lightweight</span>
                                <span className="text-xs text-neutral-500">Network Forensics</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-cyan-500">Custom</span>
                                <span className="text-xs text-neutral-500">Detection Logic</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-surface/50">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    eyebrow="Portfolio"
                    title="Featured Projects"
                    subtitle="Technical implementations of security tools, detection engineering, and threat analysis."
                />

                <div className="mt-10">
                    <ExpandableCardDemo cards={projects} />
                </div>
            </div>
        </section>
    );
}
