import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "SanR",
    description:
      "Web3 Prediction Market platform with high-performance frontend. Features wallet integration, smart contract interactions, and professional financial charting tools.",
    image: "/images/project-sanr-staking.webp",
    tags: [
      "React 19",
      "Vite",
      "TypeScript",
      "Wagmi",
      "Viem",
      "Jotai",
      "TanStack Query",
      "Recharts",
    ],
    demoUrl: "https://sanr.app/feed",
    githubUrl: "#",
    category: "web3",
    company: "Santiment AG",
  },
  {
    title: "Sanitize",
    description:
      "Crypto Influencer Analytics Platform with real-time monitoring of cryptocurrency influencers across Twitter/X. Includes Chrome Extension built with Plasmo.",
    image: "/images/project-sanr-explorer.webp",
    tags: [
      "React",
      "Plasmo",
      "Chrome Extension",
      "DOM Manipulation",
      "Real-time Analytics",
    ],
    demoUrl: "https://sanitize.page/leaderboard",
    githubUrl: "#",
    category: "web3",
    company: "Santiment AG",
  },
  {
    title: "Santiment Network",
    description:
      "Leading crypto analytics platform providing on-chain data, social metrics, and market insights for traders and investors.",
    image: "/images/project-network.webp",
    tags: [
      "React",
      "D3.js",
      "GraphQL",
      "Blockchain Data",
      "Data Visualization",
    ],
    demoUrl: "https://santiment.network/",
    githubUrl: "#",
    category: "web",
    company: "Santiment AG",
  },
  {
    title: "Santiment Docs",
    description:
      "Technical documentation platform built with Docusaurus 3.4.0, served via Nginx. Comprehensive API docs and integration guides.",
    image: "/images/project-docs.webp",
    tags: ["Docusaurus 3.4", "Nginx", "Documentation", "Markdown", "OpenAPI"],
    demoUrl: "https://docs.santiment.network/",
    githubUrl: "#",
    category: "web",
    company: "Santiment AG",
  },
  {
    title: "Fair-Taxes",
    description:
      "Legal and tax consulting. Provision of services in the tax field.",
    image: "/images/project-fair-taxes.webp",
    tags: [
      "React",
      "TypeScript",
      "Tax Calculation",
      "Portfolio Tracking",
      "Reports",
    ],
    demoUrl: "https://fair-taxes.ru/",
    githubUrl: "#",
    category: "web",
    company: "Mind Development",
  },
  {
    title: "Rador",
    description:
      "Enterprise resource planning and management system for manufacturing and logistics operations.",
    image: "/images/project-highways.webp",
    tags: ["React", "Node.js", "ERP", "Dashboard", "Analytics"],
    demoUrl: "https://www.rador.org/",
    githubUrl: "#",
    category: "web",
    company: "Mind Development",
  },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Web3", value: "web3" },
  { name: "Web", value: "web" },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grid items animation
      gsap.fromTo(
        gridRef.current?.querySelectorAll(".project-card") || [],
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101010] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#101010] to-[#0d0d0d]" />

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-[#707070] text-sm tracking-[0.3em] uppercase">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-[#707070] mt-4 max-w-2xl mx-auto">
            Real projects I&apos;ve built at Santiment AG and Mind Development
          </p>
        </div>

        {/* Category filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-white text-[#101010]"
                  : "glass text-[#707070] hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="project-card group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl glass">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Company badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                      <span className="text-xs text-white/80">
                        {project.company}
                      </span>
                    </div>

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-[#101010]/80 backdrop-blur-sm transition-opacity duration-300 ${
                        hoveredProject === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        <div className="flex gap-4">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-[#101010] rounded-full hover:bg-[#707070] hover:text-white transition-colors"
                            title="View Live"
                          >
                            <Eye size={20} />
                          </a>
                          {project.githubUrl !== "#" && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 glass text-white rounded-full hover:bg-white/20 transition-colors"
                              title="View Code"
                            >
                              <Github size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#707070] mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs bg-white/5 text-[#707070] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-3 py-1 text-xs bg-white/5 text-[#707070] rounded-full">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ValeryKot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full text-white hover:bg-white/10 transition-all duration-300 group"
          >
            <Github size={20} />
            View More on GitHub
            <ExternalLink
              size={16}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
