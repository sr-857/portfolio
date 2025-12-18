import React from "react";
import { FloatingNav } from "./ui/FloatingNavbar";
import { Home, User, Code, Briefcase, Folder, Award, GraduationCap, Mail } from "lucide-react";

export default function Navbar({ currentSlide = 0, onNavigate }) {
    const navItems = [
        { name: "Home", link: "#home", icon: <Home size={16} />, slideIndex: 0 },
        { name: "About", link: "#about", icon: <User size={16} />, slideIndex: 1 },
        { name: "Skills", link: "#skills", icon: <Code size={16} />, slideIndex: 2 },
        { name: "Experience", link: "#experience", icon: <Briefcase size={16} />, slideIndex: 3 },
        { name: "Projects", link: "#projects", icon: <Folder size={16} />, slideIndex: 4 },
        { name: "Achievements", link: "#achievements", icon: <Award size={16} />, slideIndex: 5 },
        { name: "Certifications", link: "#certifications", icon: <GraduationCap size={16} />, slideIndex: 6 },
        { name: "Contact", link: "#contact", icon: <Mail size={16} />, slideIndex: 7 },
    ];

    const handleNavClick = (e, item) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate(item.slideIndex);
        }
    };

    return (
        <div className="relative w-full">
            <FloatingNav
                navItems={navItems}
                currentSlide={currentSlide}
                onNavClick={handleNavClick}
            />
        </div>
    );
}
