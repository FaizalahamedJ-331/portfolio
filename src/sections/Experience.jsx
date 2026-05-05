import { motion } from "framer-motion";
import { experience } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import { Briefcase } from "lucide-react";

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="bg-dark text-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Work Experience
                </h2>

                <div className="relative border-l-2 border-gray-700 ml-4 md:ml-10 space-y-12">
                    {experience.map((job) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-dark shadow-lg ring-4 ring-blue-500/20" />

                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-blue-400">
                                        {job.title}
                                    </h3>
                                    <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 mt-2 md:mt-0 w-fit">
                                        {job.year}
                                    </span>
                                </div>
                                <h4 className="text-lg font-medium text-purple-400 mb-2 flex items-center gap-2">
                                    <Briefcase size={18} />
                                    {job.company}
                                </h4>
                                <div className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    <p>{job.description}</p>
                                    {job.bullets && (
                                        <ul className="list-disc list-inside mt-3 space-y-1">
                                            {job.bullets.map((b, i) => (
                                                <li key={i}>{b}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
