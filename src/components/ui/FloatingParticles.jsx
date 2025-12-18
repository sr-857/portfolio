import React, { useEffect, useRef, useState } from 'react';

export default function FloatingParticles() {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.radius = Math.random() * 2 + 1;
                this.colorType = Math.random();
                this.pulsePhase = Math.random() * Math.PI * 2;
            }

            update(time) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Smoother mouse interaction
                const dx = mousePos.x - this.x;
                const dy = mousePos.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    this.x -= dx * force * 0.005;
                    this.y -= dy * force * 0.005;
                }
            }

            draw(time) {
                // Pulsing effect
                const pulse = Math.sin(time * 2 + this.pulsePhase) * 0.3 + 0.7;
                const size = this.radius * pulse;

                // Color based on type
                let color;
                if (this.colorType < 0.33) {
                    color = '6, 182, 212'; // cyan
                } else if (this.colorType < 0.66) {
                    color = '139, 92, 246'; // violet
                } else {
                    color = '16, 185, 129'; // emerald
                }

                // Outer glow
                const glowGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size * 4);
                glowGradient.addColorStop(0, `rgba(${color}, ${0.4 * pulse})`);
                glowGradient.addColorStop(1, `rgba(${color}, 0)`);

                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, size * 4, 0, Math.PI * 2);
                ctx.fill();

                // Core particle
                ctx.beginPath();
                ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${0.8 * pulse})`;
                ctx.fill();
            }
        }

        // Create particles (much fewer for performance)
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 15 : 20; // Significantly reduced
        const particles = Array.from({ length: particleCount }, () => new Particle());
        let time = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.016;

            particles.forEach(particle => {
                particle.update(time);
                particle.draw(time);
            });

            // Enhanced connections with gradients
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 180) {
                        const opacity = 0.3 * (1 - distance / 180);

                        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                        gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity})`);
                        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.8})`);
                        gradient.addColorStop(1, `rgba(16, 185, 129, ${opacity})`);

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [mousePos]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
}
