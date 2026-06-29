import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import GitHubActivity from "./sections/GitHubActivity";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Stats from "./sections/Stats";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ParticleBackground from "./components/ParticleBackground";
import SideDotNav from "./components/SideDotNav";
import BackToTop from "./components/BackToTop";
import CommandPalette from "./components/CommandPalette";

function App() {
    // Theme: dark by default, persisted to localStorage. Toggled via the
    // <html> class so CSS rules (`.light { ... }`) can switch palette tokens.
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "dark";
        const saved = window.localStorage.getItem("theme");
        return saved === "light" || saved === "dark" ? saved : "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("light", theme === "light");
        root.classList.toggle("dark", theme === "dark");
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === "dark" ? "light" : "dark"));
    }, []);

    // Command palette visibility, opened via the navbar button or ⌘/Ctrl + K.
    const [paletteOpen, setPaletteOpen] = useState(false);
    const openPalette = useCallback(() => setPaletteOpen(true), []);
    const closePalette = useCallback(() => setPaletteOpen(false), []);

    useEffect(() => {
        const onKey = (e) => {
            const isToggle = (e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey);
            if (isToggle) {
                e.preventDefault();
                setPaletteOpen((o) => !o);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-blue-500/30 relative">
            <ParticleBackground />
            <ScrollProgress />
            <Navbar
                onOpenCommandPalette={openPalette}
                theme={theme}
                onToggleTheme={toggleTheme}
            />
            <SideDotNav />
            <main>
                <Hero />
                <Stats />
                <About />
                <Skills />
                <Services />
                <Experience />
                <GitHubActivity />
                <Education />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
            <CommandPalette
                open={paletteOpen}
                onClose={closePalette}
                theme={theme}
                onToggleTheme={toggleTheme}
            />
        </div>
    );
}

export default App;
