import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Calendar, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    type: 'work',
    title: 'Middle+/Senior Frontend Developer',
    company: 'Santiment AG',
    period: 'December 2022 - Present',
    description: [
      'Joined as Junior Developer, quickly grew into Senior Specialist role',
      'Taking ownership of ecosystem\'s core products: SanR, Sanitize, Santiment',
      'Migrating legacy codebases to cutting-edge stacks (React 19, Vite)',
      'Engineering complex Web3 interfaces with Wagmi & Viem',
      'Led migration of styles to Tailwind CSS 4, improving maintainability',
      'Deployed technical documentation using Docusaurus 3.4.0 via Nginx',
    ],
    projects: [
      {
        name: 'SanR',
        details: 'Web3 Prediction Market with React 19, Vite, TypeScript, Jotai, TanStack Query, Wagmi & Viem integration, financial charting with Recharts'
      },
      {
        name: 'Sanitize',
        details: 'Crypto Influencer Analytics Platform with Chrome Extension (Plasmo), real-time Twitter/X monitoring'
      },
      {
        name: 'Strategy Marketplace (SanQuants)',
        details: 'Quantitative strategies platform with TanStack Router, D3.js and Chart.js visualization'
      }
    ],
    stack: 'React 19, TypeScript, Next.js, Wagmi/Viem, Jotai, TanStack Query, Tailwind',
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'Full Stack Engineer',
    company: 'Mind Development',
    period: 'September 2022 - Present',
    description: [
      'Successfully implemented projects in retail and e-commerce',
      'Working in multicultural teams ranging from 4 to 20 people',
      'Implementing new functionality, analyzing and resolving incidents',
      'Integrating external services, end-to-end testing',
      'Developing autonomous agents and intelligent automation tools',
      'Building orchestration systems for DeFi strategy automation',
    ],
    icon: Building2,
  },
  {
    type: 'work',
    title: 'Operations Director / Production Manager',
    company: 'Various Manufacturing Companies (Fotoprint, Univak, Uniflex)',
    period: 'March 2001 - June 2022 (21 years)',
    description: [
      'Managed production facilities with 150+ employees',
      'Increased finished product output by 55% while optimizing staff by 15%',
      'Led installation of industrial digital equipment (HP Indigo, Comexi)',
      'Full cycle responsibility: facility repair, supply chain, government compliance',
      'Successfully pivoted to Software Engineering in 2022',
    ],
    icon: Building2,
  },
];

const education = [
  {
    type: 'education',
    title: 'Front End Developer Certification',
    institution: 'freeCodeCamp',
    period: 'May 2022 - September 2022',
    description: 'Front End Development Libraries & JavaScript Algorithms and Data Structures certifications.',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'Engineering Degree in Printing Technology',
    institution: 'Belarusian State Technological University',
    period: '1994 - 1999',
    description: 'Specialist degree in printing technology and production engineering.',
    icon: GraduationCap,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline items animation
      const items = timelineRef.current?.querySelectorAll('.timeline-item') || [];
      
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Progress line animation
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101010] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-[#0d0d0d] to-[#101010]" />

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#707070] text-sm tracking-[0.3em] uppercase">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3d3d3d] via-white/20 to-[#3d3d3d] origin-top hidden sm:block" />

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-[#707070]" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`timeline-item relative grid sm:grid-cols-2 gap-4 sm:gap-8 ${
                    index % 2 === 0 ? '' : 'sm:direction-rtl'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#101010] border-2 border-white rounded-full z-10 hidden sm:block" />
                  
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'sm:pr-12 lg:pr-20' : 'sm:col-start-2 sm:pl-12 lg:pl-20'}`}>
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                          <exp.icon size={24} className="text-white" />
                        </div>
                        <span className="flex items-center gap-2 text-sm text-[#707070]">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                      <p className="text-[#707070] text-sm mb-4">{exp.company}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-sm text-[#707070] flex items-start gap-2">
                            <span className="w-1 h-1 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {exp.projects && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <p className="text-xs text-[#707070] uppercase tracking-wider mb-2">Key Projects</p>
                          {exp.projects.map((project, pi) => (
                            <div key={pi} className="mb-2">
                              <span className="text-white text-sm font-medium">{project.name}</span>
                              <p className="text-xs text-[#707070]">{project.details}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {exp.stack && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <p className="text-xs text-[#707070] uppercase tracking-wider mb-2">Stack</p>
                          <p className="text-xs text-white/70">{exp.stack}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-[#707070]" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`timeline-item relative grid sm:grid-cols-2 gap-4 sm:gap-8 ${
                    index % 2 === 0 ? '' : 'sm:direction-rtl'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#101010] border-2 border-[#707070] rounded-full z-10 hidden sm:block" />
                  
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'sm:pr-12 lg:pr-20' : 'sm:col-start-2 sm:pl-12 lg:pl-20'}`}>
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                          <edu.icon size={24} className="text-[#707070] group-hover:text-white transition-colors" />
                        </div>
                        <span className="flex items-center gap-2 text-sm text-[#707070]">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-1">{edu.title}</h4>
                      <p className="text-[#707070] text-sm mb-4">{edu.institution}</p>
                      <p className="text-sm text-[#707070]">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
