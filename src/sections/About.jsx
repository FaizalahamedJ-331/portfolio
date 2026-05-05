import { motion } from "framer-motion";
import { personalInfo } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import { MapPin, Mail, Linkedin, Github, Calendar } from "lucide-react";

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-dark">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column - Info */}
                        <div className="space-y-6">
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">Get to Know Me</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {personalInfo.summary}
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
                                <div className="space-y-3">
                                    <a 
                                        href={`mailto:${personalInfo.email}`} 
                                        className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        <Mail size={18} className="text-blue-400" />
                                        {personalInfo.email}
                                    </a>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <MapPin size={18} className="text-blue-400" />
                                        {personalInfo.location}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Connect */}
                        <div className="space-y-6">
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                                <div className="flex gap-4 mb-4">
                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors border border-blue-500/30"
                                    >
                                        <Linkedin size={20} />
                                        LinkedIn
                                    </a>
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 rounded-lg transition-colors border border-gray-500/30"
                                    >
                                        <Github size={20} />
                                        GitHub
                                    </a>
                                </div>
                                <div className="flex justify-center gap-6">
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm mb-2">LinkedIn</p>
                                        <img 
                                            src="/linkedin-qr.jpeg" 
                                            alt="LinkedIn QR Code" 
                                            className="w-24 h-24 mx-auto rounded-lg border border-white/10"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm mb-2">GitHub</p>
                                        <img 
                                            src="/github-qr.jpeg" 
                                            alt="GitHub QR Code" 
                                            className="w-24 h-24 mx-auto rounded-lg border border-white/10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
