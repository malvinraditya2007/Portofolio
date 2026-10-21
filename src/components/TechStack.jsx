import { useRef } from "react";
import { Gsap } from "../utils/gsapAnimate";

// Simple Icons (brand icons) from react-icons
import {
    SiPython,
    SiJavascript,
    SiC,
    SiTensorflow,
    SiPytorch,
    SiStreamlit,
    SiNumpy,
    SiPandas,
    SiReact,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiFastapi,
    SiExpress,
    SiPostgresql,
    SiMysql,
    SiPrisma,
    SiDocker,
    SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const stackCategories = [
    {
        title: "Languages",
        description: "Programming languages",
        skills: [
            { name: "Python", icon: SiPython },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Java", icon: FaJava },
            { name: "C", icon: SiC },
        ]
    },
    {
        title: "AI & Machine Learning",
        description: "Intelligent systems & models",
        skills: [
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "Numpy", icon: SiNumpy },
            { name: "Pandas", icon: SiPandas },
        ]
    },
    {
        title: "Web Development",
        description: "Interactive web interfaces",
        skills: [
            { name: "React", icon: SiReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
        ]
    },
    {
        title: "Backend & Database",
        description: "Scalable server architectures",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "FastAPI", icon: SiFastapi },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "Prisma", icon: SiPrisma },
        ]
    },
    {
        title: "DevOps & Cloud",
        description: "Infrastructure & deployment",
        skills: [
            { name: "Docker", icon: SiDocker },
            { name: "Git", icon: SiGit },
            { name: "Streamlit", icon: SiStreamlit },
        ]
    }
];

const TechStack = () => {
    const containerRef = useRef(null);

    return (
        <section id="tech-stack-section" ref={containerRef} className="pt-14 md:pt-20 pb-14 md:pb-20 w-full relative bg-[#FAF9F6] dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-500">

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* ── SECTION HEADER ── */}
                <Gsap.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-20 md:mb-32"
                >
                    <span className="w-[6px] h-[6px] rounded-full bg-lime-500 shrink-0" />
                    <span className="font-mono text-[14px] md:text-[17px] font-bold uppercase tracking-[0.24em] text-black/50 dark:text-white/50">
                        03. Technical_Arsenal
                    </span>
                    <div className="flex-1 h-px bg-black/[0.07] dark:bg-white/[0.12]" />
                </Gsap.div>

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">

                    {/* Left side: Sticky Title area */}
                    <div className="lg:sticky lg:top-36 flex flex-col pt-4">
                        <Gsap.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.98] sm:leading-[0.95] text-black dark:text-white"
                        >
                            Core <br />
                            <span className="text-black dark:text-white">Stack.</span>
                        </Gsap.h2>

                        <Gsap.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mt-6 md:mt-8 font-sans text-sm md:text-base text-black/55 dark:text-white/55 leading-7 md:leading-8 max-w-sm"
                        >
                            <p>
                                An ecosystem of tools and architectures mastered for building scalable, intelligent, and high-performance digital solutions. Full engineering proficiency.
                            </p>
                        </Gsap.div>
                    </div>

                    {/* Right side: Table List */}
                    <div className="flex flex-col border-t border-black/10 dark:border-white/10">
                        {stackCategories.map((category, index) => (
                            <Gsap.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group border-b border-black/10 dark:border-white/10 py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-12 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.03] -mx-4 px-4 sm:px-4 cursor-default"
                            >
                                <div className="md:w-1/3 shrink-0 flex flex-col gap-2">
                                    <h4 className="text-xl md:text-2xl font-bold uppercase text-black dark:text-white tracking-tight group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                                        {category.title}
                                    </h4>
                                    <span className="font-mono text-xs text-black/40 dark:text-white/40 uppercase tracking-[0.12em] md:tracking-[0.16em] hidden md:block">
                                        {'// '}{category.description}
                                    </span>
                                </div>

                                <div className="md:w-2/3 flex flex-wrap gap-4 lg:gap-5 items-center">
                                    {category.skills.map((skill, idx) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="relative group/icon w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-lg hover:border-lime-500/50 hover:bg-lime-400/10 transition-all duration-300 cursor-default"
                                                title={skill.name}
                                            >
                                                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-black/55 dark:text-white/55 group-hover:text-black/70 dark:group-hover:text-white/70 group-hover/icon:text-lime-600 dark:group-hover/icon:text-lime-400 transition-colors" />
                                                {/* Tooltip */}
                                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider rounded whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Gsap.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechStack;
