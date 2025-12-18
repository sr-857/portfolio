import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        { type: "system", text: "SR-PORTFOLIO v2.0.1 -- SECURE SHELL INITIALIZED" },
        { type: "system", text: "Encryption: AES-256 | Status: ONLINE" },
        { type: "success", text: "Connection established to cybersecurity.portfolio" },
        { type: "info", text: "Type 'help' for available commands." },
    ]);
    const [cursorVisible, setCursorVisible] = useState(true);
    const terminalRef = useRef(null);
    const inputRef = useRef(null);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const commands = {
        help: () => [
            { type: "output", text: "Available commands:" },
            { type: "command", text: "  about    - Display information about Subhajit Roy" },
            { type: "command", text: "  contact  - Show contact information" },
            { type: "command", text: "  skills   - List technical skills" },
            { type: "command", text: "  projects - View featured projects" },
            { type: "command", text: "  clear    - Clear terminal screen" },
            { type: "command", text: "  whoami   - Display current user" },
        ],
        about: () => [
            { type: "output", text: "╔══════════════════════════════════════════════════════╗" },
            { type: "output", text: "║  SUBHAJIT ROY - CYBERSECURITY ENGINEER              ║" },
            { type: "output", text: "╚══════════════════════════════════════════════════════╝" },
            { type: "info", text: "Specialization: Threat Hunting | Detection Engineering" },
            { type: "info", text: "Education: B.Sc Computer Science, Assam Central University" },
            { type: "success", text: "Status: ACTIVE | Clearance: VERIFIED" },
        ],
        contact: () => [
            { type: "output", text: "Contact Information:" },
            { type: "info", text: "  Email: subhajitroy857@gmail.com" },
            { type: "info", text: "  GitHub: github.com/sr-857" },
            { type: "info", text: "  LinkedIn: linkedin.com/in/subhajit-roy-cyber" },
            { type: "success", text: "All channels: SECURE" },
        ],
        skills: () => [
            { type: "output", text: "Technical Arsenal:" },
            { type: "command", text: "  [OFFENSIVE] Penetration Testing, Burp Suite, Metasploit" },
            { type: "command", text: "  [DEFENSIVE] SIEM (Splunk, Elastic), Threat Hunting" },
            { type: "command", text: "  [DETECTION] Sigma, YARA, Custom Rule Development" },
            { type: "command", text: "  [DEVELOPMENT] Python, React, FastAPI, Docker" },
            { type: "success", text: "Proficiency: EXPERT" },
        ],
        projects: () => [
            { type: "output", text: "Featured Projects:" },
            { type: "success", text: "  [1] PhishGuard AI - 98% Detection Accuracy" },
            { type: "success", text: "  [2] CyberSentinel - Threat Intel Platform" },
            { type: "success", text: "  [3] Malware Analysis Sandbox - Automated Analysis" },
            { type: "info", text: "Navigate to Projects section for details." },
        ],
        clear: () => "CLEAR",
        whoami: () => [
            { type: "success", text: "root@sr-portfolio" },
            { type: "info", text: "Privilege level: ADMINISTRATOR" },
        ],
    };

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        setHistory(prev => [...prev, { type: "input", text: `root@sr-portfolio:~$ ${cmd}` }]);

        if (trimmedCmd === "") return;

        if (trimmedCmd === "clear") {
            setHistory([
                { type: "system", text: "Terminal cleared." },
                { type: "info", text: "Type 'help' for available commands." },
            ]);
            return;
        }

        if (commands[trimmedCmd]) {
            const result = commands[trimmedCmd]();
            if (result === "CLEAR") {
                setHistory([]);
            } else {
                setHistory(prev => [...prev, ...result]);
            }
        } else {
            setHistory(prev => [
                ...prev,
                { type: "error", text: `Command not found: ${trimmedCmd}` },
                { type: "info", text: "Type 'help' for available commands." },
            ]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            handleCommand(input);
            setInput("");
        }
    };

    const getLineColor = (type) => {
        switch (type) {
            case "system": return "text-cyan-400";
            case "success": return "text-emerald-400";
            case "error": return "text-red-400";
            case "info": return "text-blue-300";
            case "command": return "text-violet-300";
            case "output": return "text-gray-300";
            case "input": return "text-white";
            default: return "text-gray-400";
        }
    };

    return (
        <footer className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* CRT Monitor Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-blue-900/20 to-black pointer-events-none" />

            {/* Vignette Effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />

            {/* Scan Lines */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
                }}
            />

            {/* Terminal Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-5xl h-[600px] mx-4"
            >
                {/* Terminal Window */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-900/90 via-blue-950/80 to-slate-900/90 backdrop-blur-md rounded-lg border border-cyan-500/30 shadow-2xl overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-slate-800/90 to-blue-900/90 border-b border-cyan-500/30">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="ml-4 text-xs font-mono text-cyan-400">root@sr-portfolio: ~</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-emerald-400">[SECURE]</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div
                        ref={terminalRef}
                        className="h-[calc(100%-7rem)] overflow-y-auto p-4 font-mono text-sm scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent"
                        onClick={() => inputRef.current?.focus()}
                    >
                        <AnimatePresence>
                            {history.map((line, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`mb-1 ${getLineColor(line.type)}`}
                                >
                                    {line.text}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Input Line */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-slate-900/95 to-blue-950/95 border-t border-cyan-500/30">
                        <form onSubmit={handleSubmit} className="flex items-center gap-2">
                            <span className="font-mono text-sm text-emerald-400">root@sr-portfolio:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent outline-none font-mono text-sm text-white caret-cyan-400"
                                autoFocus
                                spellCheck={false}
                            />
                            <span className={`font-mono text-sm text-cyan-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                                █
                            </span>
                        </form>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />
                    </div>
                </div>

                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-lg" />
            </motion.div>

            {/* Footer Info */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-xs font-mono text-cyan-400/60">
                    © 2025 Subhajit Roy | Cybersecurity Engineer | All Systems Operational
                </p>
            </div>
        </footer>
    );
}
