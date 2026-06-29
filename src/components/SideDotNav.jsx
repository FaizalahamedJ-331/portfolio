import { useState } from "react";
import { motion } from "framer-motion";
import { sections } from "../data/sections";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sectionIds = sections.map((s) => s.id);

const SideDotNav = () => {
    const activeId = useScrollSpy(sectionIds, { offset: 140 });
    const [hovered, setHovered] = useState(null);

    return (
        <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-4"
            aria-label="Section navigation"
        >
            {sections.map((s) => {
                const isActive = activeId === s.id;
                const isHovered = hovered === s.id;
                return (
                    <a
                        key={s.id}
                        href={`#${s.id}`}
                        onMouseEnter={() => setHovered(s.id)}
                        onMouseLeave={() => setHovered(null)}
                        className="group relative flex items-center gap-3"
                        aria-label={`Jump to ${s.label}`}
                    >
                        {/* Label tooltip */}
                        <motion.span
                            initial={false}
                            animate={{
                                opacity: isHovered || isActive ? 1 : 0,
                                x: isHovered || isActive ? 0 : 8,
                            }}
                            transition={{ duration: 0.2 }}
                            className="px-3 py-1 rounded-md bg-themed/90 backdrop-blur-md border border-white/10 text-xs font-medium text-themed shadow-lg whitespace-nowrap pointer-events-none"
                        >
                            {s.label}
                        </motion.span>

                        {/* Dot */}
                        <span className="relative flex items-center justify-center">
                            <motion.span
                                animate={{
                                    scale: isActive ? 1.6 : 1,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`block rounded-full transition-colors duration-300 ${isActive
                                    ? "w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-600 shadow-lg shadow-blue-500/40"
                                    : "w-2 h-2 bg-themed-faint group-hover:bg-blue-400"
                                    }`}
                            />
                            {isActive && (
                                <span className="absolute inset-0 rounded-full bg-blue-400/30 pulse-ring" />
                            )}
                        </span>
                    </a>
                );
            })}
        </motion.aside>
    );
};

export default SideDotNav;