import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollSpy";

const ScrollProgress = () => {
    const progress = useScrollProgress();

    return (
        <motion.div
            aria-hidden
            className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left pointer-events-none"
            style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                scaleX: progress,
                boxShadow: "0 0 10px rgba(99, 102, 241, 0.45)",
            }}
        />
    );
};

export default ScrollProgress;