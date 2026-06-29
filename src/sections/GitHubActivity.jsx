import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Github, ArrowRight, GitCommit, Star, Users, Code2 } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import {
    githubProfile,
    githubStats,
    contributionHeatmap,
    heatmapColors,
} from "../data/github";

const ICON_MAP = {
    repos: Code2,
    stars: Star,
    followers: Users,
    years: GitCommit,
};

// Animated count-up that fires once when the section enters the viewport.
const Counter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const motionValue = useMotionValue(0);
    const display = useRef(null);

    useEffect(() => {
        if (!inView) return undefined;
        const unsubscribe = motionValue.on("change", (v) => {
            if (display.current) display.current.textContent = Math.round(v) + suffix;
        });
        const controls = animate(motionValue, value, {
            duration: 1.4,
            ease: "easeOut",
        });
        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [inView, motionValue, value, suffix]);

    return (
        <span ref={ref}>
            <span ref={display}>0{suffix}</span>
        </span>
    );
};

const GitHubActivity = () => {
    return (
        <SectionWrapper id="github" className="bg-dark/50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        GitHub Activity
                    </h2>
                    <p className="text-themed-muted max-w-2xl mx-auto">
                        A snapshot of my public work — repositories, stars, and a 17-week
                        view of recent contributions.
                    </p>
                </motion.div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {githubStats.map((stat, i) => {
                        const Icon = ICON_MAP[stat.id] || Code2;
                        return (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all text-center"
                            >
                                <Icon className="mx-auto mb-2 text-blue-400" size={20} />
                                <div className="text-2xl md:text-3xl font-extrabold text-themed">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-xs text-themed-faint mt-1 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Contribution heatmap */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-2">
                        <div>
                            <h3 className="text-lg font-semibold text-themed">
                                {githubStats.reduce((sum, s) => sum + s.value, 0)}+ contributions
                            </h3>
                            <p className="text-themed-faint text-sm">
                                in the last 17 weeks
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-themed-faint">
                            <span>Less</span>
                            {heatmapColors.map((c, i) => (
                                <span
                                    key={i}
                                    className={`heatmap-cell inline-block ${c}`}
                                    aria-hidden="true"
                                />
                            ))}
                            <span>More</span>
                        </div>
                    </div>

                    {/* Heatmap grid */}
                    <div className="overflow-x-auto pb-2">
                        <div
                            className="grid grid-rows-7 grid-flow-col gap-1 w-fit mx-auto"
                            aria-label="GitHub contribution heatmap"
                        >
                            {contributionHeatmap.map((intensity, idx) => {
                                const isLast = idx === contributionHeatmap.length - 1;
                                const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                                const dayName = dayNames[idx % 7];
                                const weeksAgo = Math.floor(
                                    (contributionHeatmap.length - 1 - idx) / 7
                                );
                                return (
                                    <span
                                        key={idx}
                                        className={`heatmap-cell ${heatmapColors[intensity]} ${
                                            isLast ? "heatmap-cell-today" : ""
                                        }`}
                                        title={`${intensity} contributions • ${dayName} • ${weeksAgo === 0 ? "this week" : `${weeksAgo} week${weeksAgo === 1 ? "" : "s"} ago`}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <a
                        href={githubProfile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 text-themed font-medium transition-all hover:scale-[1.02]"
                    >
                        <Github size={18} />
                        View @{githubProfile.username} on GitHub
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default GitHubActivity;