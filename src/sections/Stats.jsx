import SectionWrapper from "../components/SectionWrapper";

const stats = [
    { id: 1, label: "APIs Built", value: "100+" },
    { id: 2, label: "Faster Queries", value: "40%" },
    { id: 3, label: "Users Supported", value: "200+" },
    { id: 4, label: "Live Projects", value: "2" },
];

const Stats = () => {
    return (
        <SectionWrapper id="proof" className="bg-dark/60">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Proof & Impact</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {stats.map((s) => (
                        <div key={s.id} className="bg-white/5 p-6 rounded-xl text-center border border-white/10">
                            <div className="text-2xl md:text-3xl font-extrabold text-blue-400">{s.value}</div>
                            <div className="text-sm text-gray-300 mt-2">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Stats;
