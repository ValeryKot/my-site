import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Github, Globe, Briefcase, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const personalInfo = [
  { icon: Briefcase, label: 'Name', value: 'Valery Kot' },
  { icon: Globe, label: 'Role', value: 'Senior Frontend Developer' },
  { icon: MapPin, label: 'Location', value: 'Minsk, Belarus' },
  { icon: Mail, label: 'Email', value: 'kot.valery@gmail.com', href: 'mailto:kot.valery@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/valerykot', href: 'https://www.linkedin.com/in/valerykot/' },
  { icon: Github, label: 'GitHub', value: 'github.com/ValeryKot', href: 'https://github.com/ValeryKot' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title slide in
      gsap.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content reveal
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.reveal-item') || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Info cards stagger
      gsap.fromTo(
        infoRef.current?.querySelectorAll('.info-item') || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
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
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101010] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#151515] to-transparent opacity-50" />
      
      {/* Large background text */}
      <div
        ref={titleRef}
        className="absolute -left-20 top-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none hidden lg:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        ABOUT ME
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-[#707070] text-sm tracking-[0.3em] uppercase reveal-item">
            Discover
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 reveal-item">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Bio */}
          <div ref={contentRef}>
            <div className="reveal-item">
              <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-6">
                I don&apos;t just write code — I build reliable systems.
              </p>
            </div>
            
            <div className="reveal-item">
              <p className="text-[#707070] leading-relaxed mb-6">
                In 2022, I pivoted to software engineering after 20+ years in manufacturing 
                management. I joined <span className="text-white">Santiment AG</span> as a Junior 
                Developer and rapidly grew into a Senior role, taking ownership of critical 
                products like <span className="text-white">SanR</span> and the{' '}
                <span className="text-white">Sanitize</span> ecosystem.
              </p>
            </div>
            
            <div className="reveal-item">
              <p className="text-[#707070] leading-relaxed mb-6">
                I spent two decades managing factories, optimizing production lines, and leading 
                teams of 150+ people. I used to solve problems with heavy machinery and logistics. 
                Now, I solve them with <span className="text-white">React 19</span>,{' '}
                <span className="text-white">TypeScript</span>, and{' '}
                <span className="text-white">AI agents</span>. The logic is surprisingly similar — 
                it&apos;s all about architecture, efficiency, and avoiding bottlenecks.
              </p>
            </div>

            <div className="reveal-item">
              <h4 className="text-white font-semibold mb-3">My Current Focus:</h4>
              <ul className="space-y-2 text-[#707070]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white/80">Frontend Architecture:</strong> React 19, Next.js 15, TanStack Query, Jotai</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white/80">Web3 & DeFi:</strong> Wagmi, Viem, Ethereum/Arbitrum smart contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white/80">AI & Automation:</strong> Autonomous agents with Trigger.dev, OpenAI GPT-4o</span>
                </li>
              </ul>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 reveal-item">
              {[
                { value: '3+', label: 'Years in Dev' },
                { value: '20+', label: 'Years Management' },
                { value: '150+', label: 'People Managed' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 glass rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-[#707070]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Personal Info */}
          <div ref={infoRef}>
            <h3 className="text-white text-xl font-semibold mb-6">Connect With Me</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div
                  key={index}
                  className="info-item group p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <item.icon size={18} className="text-[#707070] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-[#707070] uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                          rel={item.label === 'LinkedIn' || item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                          className="text-white hover:text-gradient transition-all text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-8 p-4 glass rounded-xl border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <div className="text-white font-medium">Open to Opportunities</div>
                  <div className="text-xs text-[#707070]">Senior Frontend & Web3 roles</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Certifications</h4>
              <div className="space-y-3">
                <div className="p-3 glass rounded-lg">
                  <div className="text-white text-sm">Front End Development Libraries</div>
                  <div className="text-xs text-[#707070]">freeCodeCamp</div>
                </div>
                <div className="p-3 glass rounded-lg">
                  <div className="text-white text-sm">JavaScript Algorithms and Data Structures</div>
                  <div className="text-xs text-[#707070]">freeCodeCamp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
