import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Search, Sun, Moon, Download } from "lucide-react";
import { personalInfo } from "../data/content";
import { sections } from "../data/sections";
import { useScrollSpy } from "../hooks/useScrollSpy";
import resumePdf from "../resume/Faizal_Ahamed_J_Resume_updated.pdf";

const sectionIds = sections.map((s) => s.id);

const Navbar = ({ onOpenCommandPalette, theme, onToggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activeId = useScrollSpy(sectionIds, { offset: 140 });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = sections.slice(1); // skip "home" — it's handled by the logo

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-themed/80 backdrop-blur-md shadow-lg py-3 border-b border-white/5"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a
                    href="#home"
                    aria-label="Faizal Ahamed — Home"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-base shadow-md shadow-blue-500/25 hover:scale-105 transition-transform"
                >
                    FA
                </a>

                {/* Desktop Menu — text links show at xl+; below xl we rely on the hamburger (always visible at md+). */}
                <div className="hidden xl:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeId === link.id;
                        return (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`relative px-3 py-2 text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${isActive ? "text-blue-400" : "text-themed-muted hover:text-blue-400"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-active-pill"
                                        className="absolute inset-x-1 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}

                    {/* Command palette trigger */}
                    <button
                        onClick={onOpenCommandPalette}
                        className="ml-2 flex items-center gap-2 px-3 py-1.5 text-xs text-themed-faint hover:text-themed bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                        aria-label="Open command palette"
                    >
                        <Search size={14} />
                        <span className="hidden lg:inline">Quick Jump</span>
                        <kbd className="hidden lg:inline px-1.5 py-0.5 text-[10px] bg-white/10 rounded border border-white/10">
                            ⌘K
                        </kbd>
                    </button>

                    {/* Theme toggle */}
                    <button
                        onClick={onToggleTheme}
                        className="ml-1 w-9 h-9 flex items-center justify-center text-themed-muted hover:text-blue-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                        aria-label="Toggle theme"
                        title="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>

                    <a
                        href={resumePdf}
                        download
                        className="ml-2 hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all shadow-md shadow-blue-500/20"
                    >
                        <Download size={14} /> Resume
                    </a>

                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-themed-muted hover:text-blue-400 transition-colors p-2"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>
                </div>

                {/* Mid-size controls (md & lg) — utility buttons + hamburger. xl shows the full menu instead. */}
                <div className="xl:hidden flex items-center gap-2">
                    <button
                        onClick={onOpenCommandPalette}
                        className="text-themed-muted hover:text-blue-400 p-2"
                        aria-label="Open command palette"
                    >
                        <Search size={20} />
                    </button>
                    <button
                        onClick={onToggleTheme}
                        className="text-themed-muted hover:text-blue-400 p-2"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-themed-muted hover:text-blue-400 p-2"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <button
                        className="text-themed-muted hover:text-blue-400 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="xl:hidden absolute top-full left-0 w-full bg-themed/95 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col space-y-1"
                    >
                        {navLinks.map((link) => {
                            const isActive = activeId === link.id;
                            return (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive
                                        ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                                        : "text-themed-muted hover:text-blue-400 hover:bg-white/5 border border-transparent"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                        <a
                            href={resumePdf}
                            download
                            onClick={() => setIsOpen(false)}
                            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium"
                        >
                            <Download size={18} /> Download Resume
                        </a>
                        <div className="flex space-x-6 mt-4 pt-4 border-t border-white/10">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-themed-muted hover:text-blue-400" aria-label="GitHub"><Github /></a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-themed-muted hover:text-blue-400" aria-label="LinkedIn"><Linkedin /></a>
                            <a href={`mailto:${personalInfo.email}`} className="text-themed-muted hover:text-blue-400" aria-label="Email"><Mail /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;