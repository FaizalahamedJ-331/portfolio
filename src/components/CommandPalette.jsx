import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Search,
    CornerDownLeft,
    ArrowDown,
    ArrowUp,
    Home,
    TrendingUp,
    User,
    Wrench,
    Briefcase,
    GraduationCap,
    FolderGit2,
    Award,
    Mail,
    Github,
    Linkedin,
    Download,
    FileText,
    Sun,
    Moon,
    Sparkles,
    Activity,
} from "lucide-react";
import { sections } from "../data/sections";
import { personalInfo } from "../data/content";
import resumePdf from "../resume/Faizal_Ahamed_J_Resume_updated.pdf";

const ICONS = {
    Home,
    TrendingUp,
    User,
    Wrench,
    Briefcase,
    GraduationCap,
    FolderGit2,
    Award,
    Mail,
    Sparkles,
    Activity,
};

// Quick actions shown in addition to sections.
const buildActions = (theme, onToggleTheme) => [
    {
        id: "action-resume",
        label: "Download Resume",
        hint: "PDF",
        icon: Download,
        perform: () => {
            const a = document.createElement("a");
            a.href = resumePdf;
            a.download = "Faizal_Ahamed_J_Resume.pdf";
            a.click();
        },
    },
    {
        id: "action-github",
        label: "Open GitHub profile",
        hint: "External",
        icon: Github,
        perform: () => window.open(personalInfo.github, "_blank", "noopener,noreferrer"),
    },
    {
        id: "action-linkedin",
        label: "Open LinkedIn profile",
        hint: "External",
        icon: Linkedin,
        perform: () => window.open(personalInfo.linkedin, "_blank", "noopener,noreferrer"),
    },
    {
        id: "action-email",
        label: `Email ${personalInfo.name}`,
        hint: "Mail",
        icon: Mail,
        perform: () => (window.location.href = `mailto:${personalInfo.email}`),
    },
    {
        id: "action-theme",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        hint: "Theme",
        icon: theme === "dark" ? Sun : Moon,
        perform: onToggleTheme,
    },
    {
        id: "action-summary",
        label: "View About summary",
        hint: "Section",
        icon: FileText,
        sectionId: "about",
    },
];

// Tiny fuzzy scorer: matches if all query characters appear in order in the target.
const fuzzyMatch = (query, target) => {
    if (!query) return { score: 1, matched: false };
    const q = query.toLowerCase();
    const t = target.toLowerCase();
    let qi = 0;
    let score = 0;
    let lastMatchIndex = -1;
    for (let ti = 0; ti < t.length && qi < q.length; ti++) {
        if (t[ti] === q[qi]) {
            // reward consecutive matches
            score += lastMatchIndex === ti - 1 ? 2 : 1;
            lastMatchIndex = ti;
            qi++;
        }
    }
    return { score: qi === q.length ? score : 0, matched: qi === q.length };
};

const CommandPalette = ({ open, onClose, theme, onToggleTheme }) => {
    const [query, setQuery] = useState("");
    const [highlighted, setHighlighted] = useState(0);
    const inputRef = useRef(null);
    const listRef = useRef(null);

    const sectionItems = useMemo(
        () =>
            sections.map((s) => ({
                id: `section-${s.id}`,
                label: s.label,
                hint: "Section",
                icon: ICONS[s.icon] || Home,
                sectionId: s.id,
            })),
        []
    );

    const allItems = useMemo(() => {
        const actions = buildActions(theme, onToggleTheme);
        return [...sectionItems, ...actions];
    }, [sectionItems, theme, onToggleTheme]);

    const filtered = useMemo(() => {
        if (!query.trim()) return allItems;
        const scored = allItems
            .map((item) => {
                const m = fuzzyMatch(query, item.label);
                return m.matched ? { ...item, _score: m.score } : null;
            })
            .filter(Boolean)
            .sort((a, b) => b._score - a._score);
        return scored;
    }, [allItems, query]);

    // Reset on open
    useEffect(() => {
        if (open) {
            setQuery("");
            setHighlighted(0);
            // small delay so the input is mounted
            const t = setTimeout(() => inputRef.current?.focus(), 30);
            return () => clearTimeout(t);
        }
        return undefined;
    }, [open]);

    // Keep highlighted in range
    useEffect(() => {
        if (highlighted >= filtered.length) setHighlighted(0);
    }, [filtered.length, highlighted]);

    // Auto-scroll highlighted into view
    useEffect(() => {
        if (!listRef.current) return;
        const item = listRef.current.querySelector(`[data-idx="${highlighted}"]`);
        if (item) item.scrollIntoView({ block: "nearest" });
    }, [highlighted]);

    const runItem = (item) => {
        if (!item) return;
        if (item.sectionId) {
            const el = document.getElementById(item.sectionId);
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
            }
        } else if (item.perform) {
            try { item.perform(); } catch (e) { console.error(e); }
        }
        onClose();
    };

    const onKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlighted((h) => (filtered.length ? (h + 1) % filtered.length : 0));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlighted((h) => (filtered.length ? (h - 1 + filtered.length) % filtered.length : 0));
        } else if (e.key === "Enter") {
            e.preventDefault();
            runItem(filtered[highlighted]);
        } else if (e.key === "Escape") {
            e.preventDefault();
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="fixed inset-0 z-[70] flex items-start justify-center pt-[12vh] px-4 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Command palette"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="w-full max-w-xl bg-themed rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                            <Search size={18} className="text-themed-faint shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setHighlighted(0);
                                }}
                                onKeyDown={onKeyDown}
                                placeholder="Jump to section, project, action..."
                                className="command-input"
                                aria-label="Search commands"
                            />
                            <kbd className="hidden sm:inline px-2 py-0.5 text-[11px] text-themed-faint bg-white/10 border border-white/10 rounded">esc</kbd>
                        </div>

                        <ul
                            ref={listRef}
                            className="max-h-[55vh] overflow-y-auto py-2"
                        >
                            {filtered.length === 0 && (
                                <li className="px-6 py-8 text-center text-themed-faint text-sm">
                                    No matches for &ldquo;{query}&rdquo;
                                </li>
                            )}
                            {filtered.map((item, idx) => {
                                const Icon = item.icon;
                                const isActive = idx === highlighted;
                                return (
                                    <li
                                        key={item.id}
                                        data-idx={idx}
                                        onMouseEnter={() => setHighlighted(idx)}
                                        onClick={() => runItem(item)}
                                        className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg cursor-pointer transition-colors ${isActive
                                            ? "bg-blue-500/15 text-blue-300"
                                            : "text-themed-muted hover:bg-white/5"
                                            }`}
                                    >
                                        <Icon size={16} className={isActive ? "text-blue-400" : "text-themed-faint"} />
                                        <span className="flex-1 text-sm font-medium">{item.label}</span>
                                        <span className="text-[11px] uppercase tracking-wider text-themed-faint">{item.hint}</span>
                                        {isActive && (
                                            <CornerDownLeft size={14} className="text-blue-400" />
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 text-[11px] text-themed-faint bg-black/10">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/10">
                                        <ArrowUp size={10} className="inline" />
                                    </kbd>
                                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/10">
                                        <ArrowDown size={10} className="inline" />
                                    </kbd>
                                    navigate
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/10">
                                        <CornerDownLeft size={10} className="inline" />
                                    </kbd>
                                    select
                                </span>
                            </div>
                            <span>{filtered.length} results</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;