import { motion } from "framer-motion";
import { education } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
    return (
        <SectionWrapper id="education" className="bg-dark/50">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Education
                    </h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

                        {/* Education Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col md:flex-row items-center gap-8 mb-12"
                        >
                            <div className="flex-1 md:text-right w-full md:w-1/2">
                                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                                    <div className="flex items-center gap-3 justify-center md:justify-end mb-3">
                                        <GraduationCap className="text-blue-400" size={24} />
                                        <h3 className="text-xl font-bold text-white">
                                            {education.degree}
                                        </h3>
                                    </div>
                                    <h4 className="text-lg text-purple-400 font-medium mb-2">
                                        {education.institution}
                                    </h4>
                                    <div className="flex items-center justify-center md:justify-end gap-4 text-gray-400 text-sm">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {education.year}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Award size={14} />
                                            CGPA: {education.cgpa}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-dark shadow-lg ring-4 ring-blue-500/30 z-10"></div>

                            <div className="flex-1 w-full md:w-1/2"></div>
                        </motion.div>
                    </div>

                    {/* Academic Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
                    >
                        <h3 className="text-xl font-semibold text-white mb-6 text-center">
                            Academic Highlights
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <span className="text-3xl font-bold text-blue-400 block">8.7</span>
                                <span className="text-gray-400 text-sm">CGPA</span>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <span className="text-3xl font-bold text-purple-400 block">2026</span>
                                <span className="text-gray-400 text-sm">Graduated</span>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <span className="text-3xl font-bold text-green-400 block">Top 10%</span>
                                <span className="text-gray-400 text-sm">Class Rank</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
