import React, { useEffect, useRef } from 'react';

export default function MatrixRain() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Enhanced character set with more variety
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ</>{}[]()';
        const fontSize = 14;
        const columns = canvas.width / fontSize;

        // Significantly reduce particles for better performance
        const isMobile = window.innerWidth < 768;
        const particleDensity = isMobile ? 0.2 : 0.3; // Much lower density
        const activeColumns = Math.floor(columns * particleDensity);

        const drops = Array(activeColumns).fill(1);
        const speeds = Array(activeColumns).fill(0).map(() => Math.random() * 0.5 + 0.5);

        const draw = () => {
            // Smoother fade effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px 'Courier New', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];

                // Enhanced gradient with cyan to emerald
                const gradient = ctx.createLinearGradient(0, drops[i] * fontSize - 50, 0, drops[i] * fontSize);
                gradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
                gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.8)');
                gradient.addColorStop(1, 'rgba(16, 185, 129, 0.4)');

                ctx.fillStyle = gradient;
                ctx.fillText(char, i * fontSize * (1 / particleDensity), drops[i] * fontSize);

                // Glow effect for leading character (reduced frequency for performance)
                if (Math.random() > 0.99) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = 'rgba(6, 182, 212, 0.8)';
                    ctx.fillText(char, i * fontSize * (1 / particleDensity), drops[i] * fontSize);
                    ctx.shadowBlur = 0;
                }

                // Variable speed drops
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                    speeds[i] = Math.random() * 0.5 + 0.5;
                }
                drops[i] += speeds[i];
            }
        };

        const interval = setInterval(draw, isMobile ? 50 : 33); // Slower on mobile

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.2 }}
        />
    );
}
