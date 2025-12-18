import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { CustomCursor } from "./components/ui/CustomCursor";
import { TerminalPreloader } from "./components/ui/TerminalPreloader";
import SlideIndicators from "./components/ui/SlideIndicators";
import MatrixRain from "./components/ui/MatrixRain";
import AnimatedGrid from "./components/ui/AnimatedGrid";
import FloatingParticles from "./components/ui/FloatingParticles";
import TerminalGlitch from "./components/ui/TerminalGlitch";
import GlassDock from "./components/ui/GlassDock";
import PageTransition from "./components/ui/PageTransition";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

// Lazy load major sections
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Achievements = lazy(() => import("./components/Achievements"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);
    const slides = [
        { id: "terminal", component: Footer },
        { id: "home", component: Hero },
        { id: "about", component: About },
        { id: "skills", component: Skills },
        { id: "experience", component: Experience },
        { id: "projects", component: Projects },
        { id: "achievements", component: Achievements },
        { id: "certifications", component: Certifications },
        { id: "contact", component: Contact },
    ];

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (loading) return;

            if (e.key === "ArrowDown" || e.key === "PageDown") {
                e.preventDefault();
                navigateToSlide(Math.min(currentSlide + 1, slides.length - 1));
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                e.preventDefault();
                navigateToSlide(Math.max(currentSlide - 1, 0));
            } else if (e.key === "Home") {
                e.preventDefault();
                navigateToSlide(0);
            } else if (e.key === "End") {
                e.preventDefault();
                navigateToSlide(slides.length - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide, loading, slides.length]);

    // Track current slide based on scroll position
    useEffect(() => {
        if (!containerRef.current || loading) return;

        const handleScroll = () => {
            const container = containerRef.current;
            const slideHeight = window.innerHeight;
            const scrollPosition = container.scrollTop;
            const newSlide = Math.round(scrollPosition / slideHeight);

            if (newSlide !== currentSlide && newSlide >= 0 && newSlide < slides.length) {
                setCurrentSlide(newSlide);
            }
        };

        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [currentSlide, loading, slides.length]);

    const navigateToSlide = (slideIndex) => {
        if (!containerRef.current) return;
        const slideHeight = window.innerHeight;
        containerRef.current.scrollTo({
            top: slideIndex * slideHeight,
            behavior: "smooth",
        });
    };

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen bg-bg text-gray-100 selection:bg-cyan-500/30 cursor-none relative">
                {/* Noise Overlay */}
                <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                {/* Hyperland Background Layers */}
                {!loading && (
                    <>
                        <MatrixRain />
                        <AnimatedGrid />
                        <FloatingParticles />
                        <TerminalGlitch />
                    </>
                )}

                <AnimatePresence>
                    {loading && <TerminalPreloader onComplete={() => setLoading(false)} />}
                </AnimatePresence>

                {!loading && (
                    <>
                        <CustomCursor />
                        <Navbar currentSlide={currentSlide} onNavigate={navigateToSlide} />
                        <GlassDock
                            currentSlide={currentSlide}
                            onNavigate={navigateToSlide}
                        />

                        <div
                            ref={containerRef}
                            className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style>{`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>

                            {slides.map((slide, index) => {
                                const SlideComponent = slide.component;
                                return (
                                    <section
                                        key={slide.id}
                                        id={slide.id}
                                        className="h-screen w-full snap-start snap-always flex items-center justify-center"
                                    >
                                        <div className="w-full h-full overflow-y-auto">
                                            <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div></div>}>
                                                <SlideComponent />
                                            </Suspense>
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </LazyMotion>
    );
}
