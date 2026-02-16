import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Palette, Database, Layers, Cpu, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    name: "Frontend Core",
    icon: Code2,
    skills: [
      { name: "React 19", level: 95 },
      { name: "TypeScript 5.x", level: 90 },
      { name: "Next.js 15", level: 75 },
      { name: "JavaScript (ES2024)", level: 85 },
    ],
  },
  {
    name: "State & Data",
    icon: Database,
    skills: [
      { name: "Jotai", level: 90 },
      { name: "TanStack Query", level: 90 },
      { name: "Context API", level: 85 },
      { name: "Zustand", level: 70 },
    ],
  },
  {
    name: "Styling",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS 4", level: 95 },
      { name: "Styled Components", level: 90 },
      { name: "CSS Modules", level: 85 },
    ],
  },
  {
    name: "Web3 & Blockchain",
    icon: Globe,
    skills: [
      { name: "Wagmi 2.x", level: 90 },
      { name: "Viem 2.x", level: 88 },
      { name: "Ethers.js", level: 75 },
      { name: "Web3Modal", level: 80 },
    ],
  },
  {
    name: "Data Visualization",
    icon: Layers,
    skills: [
      { name: "Lightweight Charts", level: 95 },
      { name: "D3.js", level: 90 },
      { name: "Recharts", level: 75 },
      { name: "Chart.js", level: 80 },
    ],
  },
  {
    name: "AI & Automation",
    icon: Cpu,
    skills: [
      { name: "OpenAI SDK / GPT-4o", level: 85 },
      { name: "Trigger.dev", level: 90 },
      { name: "Vector Databases", level: 70 },
    ],
  },
];

const additionalSkills = [
  "Vite 7",
  "Webpack 5",
  "TanStack Router",
  "Plasmo",
  "Docusaurus 3.4",
  "Node.js",
  "Express",
  "Prisma ORM",
  "PostgreSQL",
  "Docker",
  "Nginx",
  "Jenkins CI/CD",
  "AWS ECR",
  "Firebase",
  "Git",
  "ESLint",
  "Prettier",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards entrance animation
      gsap.fromTo(
        cardsRef.current?.querySelectorAll(".skill-card") || [],
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Progress bars animation
      const progressBars =
        cardsRef.current?.querySelectorAll(".progress-bar") || [];
      progressBars.forEach((bar) => {
        const level = bar.getAttribute("data-level");
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${level}%`,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101010] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-white/[0.02] to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-white/[0.02] to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#707070] text-sm tracking-[0.3em] uppercase">
            My Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-[#707070] mt-4 max-w-2xl mx-auto">
            Modern frontend stack with focus on React 19, Web3, and AI
            integration
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-500 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-sm transition-colors ${
                          hoveredSkill === skill.name
                            ? "text-white"
                            : "text-[#707070]"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-sm text-[#707070]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-white/80 to-white rounded-full transition-all duration-500"
                        data-level={skill.level}
                        style={{
                          boxShadow:
                            hoveredSkill === skill.name
                              ? "0 0 20px rgba(255,255,255,0.3)"
                              : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-4 py-2 glass rounded-full text-sm text-[#707070] hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
