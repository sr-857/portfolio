import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

export const SparklesCore = ({
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
}) => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        setInit(true);
    }, []);
    const controls = {
        value: {
            minSize: minSize || 0.6,
            maxSize: maxSize || 1.4,
            speed: speed || 1.5,
            particleColor: particleColor || "#FFFFFF",
            particleDensity: particleDensity || 100,
        },
    };

    return (
        <div className={cn("opacity-0 transition-opacity duration-1000", { "opacity-100": init }, className)}>
            {init && (
                <Particles
                    id={id}
                    className={className}
                    background={background}
                    minSize={controls.value.minSize}
                    maxSize={controls.value.maxSize}
                    speed={controls.value.speed}
                    particleColor={controls.value.particleColor}
                    particleDensity={controls.value.particleDensity}
                />
            )}
        </div>
    );
};

const Particles = ({
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
}) => {
    const canvasRef = React.useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = canvas.offsetWidth);
        let height = (canvas.height = canvas.offsetHeight);

        const particles = [];

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                width = canvas.width = entry.contentRect.width;
                height = canvas.height = entry.contentRect.height;
            }
        });
        resizeObserver.observe(canvas);


        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * (maxSize - minSize) + minSize;
                this.speedX = Math.random() * speed - speed / 2;
                this.speedY = Math.random() * speed - speed / 2;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 0.2) this.size -= 0.01; // Shrink particles
                if (this.size <= 0.2) { // Reset particle
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.size = Math.random() * (maxSize - minSize) + minSize;
                    this.speedX = Math.random() * speed - speed / 2;
                    this.speedY = Math.random() * speed - speed / 2;
                }
            }
            draw() {
                ctx.fillStyle = particleColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            for (let i = 0; i < particleDensity; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            resizeObserver.disconnect();
        };
    }, [maxSize, minSize, particleColor, particleDensity, speed]);

    return (
        <canvas
            ref={canvasRef}
            id={id}
            className={cn("w-full h-full pointer-events-none", className)}
            style={{
                background: background || "transparent",
            }}
        />
    );
};
