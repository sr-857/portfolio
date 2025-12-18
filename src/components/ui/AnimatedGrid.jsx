import React, { useEffect, useRef } from 'react';

export default function AnimatedGrid() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gridSize = 50;
            const perspective = 400;
            const centerX = canvas.width / 2;
            const centerY = canvas.height * 0.7;

            time += 0.008; // Smoother animation speed

            // Horizontal lines with enhanced effects
            for (let i = -10; i < 20; i++) {
                const y = i * gridSize + (time * 50) % gridSize;
                const scale = perspective / (perspective + y);

                if (scale > 0 && scale < 2) {
                    const x1 = centerX - (canvas.width * scale);
                    const x2 = centerX + (canvas.width * scale);
                    const drawY = centerY + y * scale;

                    // Smooth pulsing effect
                    const pulse = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;

                    // Gradient line
                    const gradient = ctx.createLinearGradient(x1, drawY, x2, drawY);
                    gradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
                    gradient.addColorStop(0.5, `rgba(6, 182, 212, ${0.15 + pulse * 0.1})`);
                    gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(x1, drawY);
                    ctx.lineTo(x2, drawY);
                    ctx.stroke();

                    // Enhanced glowing intersections
                    if (i % 3 === 0) {
                        const glowGradient = ctx.createRadialGradient(centerX, drawY, 0, centerX, drawY, 8);
                        glowGradient.addColorStop(0, `rgba(6, 182, 212, ${0.6 + pulse * 0.3})`);
                        glowGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

                        ctx.fillStyle = glowGradient;
                        ctx.beginPath();
                        ctx.arc(centerX, drawY, 8, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            // Vertical lines with gradients
            for (let i = -10; i < 10; i++) {
                const x = i * gridSize;

                ctx.beginPath();

                for (let j = 0; j < 20; j++) {
                    const y = j * gridSize + (time * 50) % gridSize;
                    const scale = perspective / (perspective + y);

                    if (scale > 0 && scale < 2) {
                        const drawX = centerX + x * scale;
                        const drawY = centerY + y * scale;

                        if (j === 0) {
                            ctx.moveTo(drawX, drawY);
                        } else {
                            ctx.lineTo(drawX, drawY);
                        }
                    }
                }

                // Gradient stroke for vertical lines
                const vertGradient = ctx.createLinearGradient(0, centerY, 0, canvas.height);
                vertGradient.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
                vertGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
                ctx.strokeStyle = vertGradient;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.3 }}
        />
    );
}
