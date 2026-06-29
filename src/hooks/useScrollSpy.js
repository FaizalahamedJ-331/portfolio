import { useEffect, useState } from "react";

/**
 * Observes a list of section IDs and returns the one currently most visible.
 * Falls back to the closest section above the viewport center if none
 * crosses the threshold, so the active pill never goes blank mid-scroll.
 */
export function useScrollSpy(ids, options = {}) {
    const { offset = 120, threshold = 0.35 } = options;
    const [activeId, setActiveId] = useState(ids[0] ?? null);

    useEffect(() => {
        if (typeof window === "undefined" || !ids.length) return undefined;

        const handleScroll = () => {
            const triggerY = window.scrollY + offset;
            let current = ids[0];

            for (const id of ids) {
                const el = document.getElementById(id);
                if (!el) continue;
                const top = el.offsetTop;
                if (top <= triggerY) current = id;
            }
            setActiveId(current);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
        // threshold kept in deps for completeness — not currently used.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ids.join("|"), offset, threshold]);

    return activeId;
}

/** Returns scroll position 0..1 representing progress through the document. */
export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handler = () => {
            const doc = document.documentElement;
            const scrollTop = doc.scrollTop || document.body.scrollTop;
            const scrollHeight = doc.scrollHeight - doc.clientHeight;
            setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
        };
        handler();
        window.addEventListener("scroll", handler, { passive: true });
        window.addEventListener("resize", handler);
        return () => {
            window.removeEventListener("scroll", handler);
            window.removeEventListener("resize", handler);
        };
    }, []);

    return progress;
}