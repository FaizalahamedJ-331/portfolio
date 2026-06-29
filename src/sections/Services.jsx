import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import SectionWrapper from "../components/SectionWrapper";
import { personalInfo } from "../data/content";

const Services = () => {
    return (
        <SectionWrapper id="services" className="bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        What I Do
                    </h2>
                    <p className="text-themed-muted max-w-2xl mx-auto">
                        Concrete deliverables I can ship on day one — not just a list of tools,
                        but what you actually get when we work together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md shadow-blue-500/20">
                                    <Icon className="text-white" size={22} />
                                </div>

                                <h3 className="text-xl font-semibold text-themed mb-2 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-blue-300 text-sm font-medium mb-4 leading-snug">
                                    {service.outcome}
                                </p>

                                <ul className="space-y-2 mt-auto">
                                    {service.deliverables.map((d) => (
                                        <li
                                            key={d}
                                            className="flex items-start gap-2 text-themed-muted text-sm"
                                        >
                                            <ArrowRight
                                                size={14}
                                                className="text-blue-400 mt-1 shrink-0"
                                            />
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href={`mailto:${personalInfo.email}?subject=Project%20Inquiry`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 hover:scale-[1.02]"
                    >
                        Have a project in mind? Let&rsquo;s talk
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Services;