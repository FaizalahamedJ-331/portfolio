import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "../data/content";
import profilePhoto from "../images/normal photo.jpeg";
import resumePdf from "../resume/Faizal_Ahamed_J_Resume_updated.pdf";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center bg-dark overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-6"
                    >
                        <img
                            src={profilePhoto}
                            alt={personalInfo.name}
                            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-blue-500/30 shadow-lg shadow-blue-500/20"
                        />
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                        {personalInfo.heroHeadline}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
                        {personalInfo.heroSubheadline}
                    </h2>
                    <p className="text-blue-300 font-medium mb-8">
                        {personalInfo.proofLine}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25"
                    >
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 font-medium flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
                    >
                        Download Resume <Download size={20} />
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-gray-500 text-sm">Scroll Down</span>
                <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-blue-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
