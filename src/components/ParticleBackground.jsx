import { useEffect, useRef } from "react";

/**
 * Lightweight particle network rendered into a canvas. Pointer-events disabled
 * so it never blocks clicks. Stops work when the tab is hidden to save battery.
 */
const ParticleBackground = ({
    density = 0.00012, // particles per pixel
    linkDistance = 130,
    color = "99, 102, 241", // default indigo glow
}) => {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;
        const ctx = canvas.getContext("2d");
        if (!ctx) return undefined;

        let width = 0;
        let height = 0;
        let dpr = Math.max(1, window.devicePixelRatio || 1);

        const isLight = () =>
            document.documentElement.classList.contains("light");

        const makeParticles = () => {
            const count = Math.max(20, Math.floor(width * height * density));
            particlesRef.current = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.6 + 0.6,
            }));
        };

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            makeParticles();
        };

        let mouseX = -9999;
        let mouseY = -9999;
        const handleMouse = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };
        const handleMouseLeave = () => {
            mouseX = -9999;
            mouseY = -9999;
        };

        const tick = () => {
            const particles = particlesRef.current;
            ctx.clearRect(0, 0, width, height);

            // Light mode uses a slightly darker stroke for contrast.
            const baseAlpha = isLight() ? 0.35 : 0.5;

            // Move + draw nodes
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse repulsion
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.hypot(dx, dy);
                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    p.x += (dx / (dist || 1)) * force * 0.6;
                    p.y += (dy / (dist || 1)) * force * 0.6;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${baseAlpha})`;
                ctx.fill();
            }

            // Draw links
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const d = Math.hypot(dx, dy);
                    if (d < linkDistance) {
                        const alpha = (1 - d / linkDistance) * baseAlpha;
                        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        const start = () => {
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(tick);
        };
        const stop = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        };

        const handleVisibility = () => {
            if (document.hidden) stop();
            else start();
        };

        resize();
        start();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouse);
        window.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
            stop();
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
            window.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, [density, linkDistance, color]);

    return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
};

export default ParticleBackground;