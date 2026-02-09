import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - split characters
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { y: 100, opacity: 0, rotateX: 90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "expo.out",
            delay: 0.3,
          },
        );
      }

      // Subtitle reveal
      gsap.fromTo(
        subtitleRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.8,
        },
      );

      // Image 3D flip
      gsap.fromTo(
        imageRef.current,
        { rotateY: 90, scale: 0.8, opacity: 0 },
        {
          rotateY: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.5,
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ transformStyle: "preserve-3d" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#101010]"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#1a1a1a] to-transparent opacity-60 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#151515] to-transparent opacity-40 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <span className="text-[#707070] text-sm tracking-[0.3em] uppercase">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Main title */}
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] mb-6"
              style={{ perspective: "1000px" }}
            >
              <span className="block">{splitText("VALERY")}</span>
              <span className="block text-gradient mt-2">
                {splitText("KOT")}
              </span>
            </h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6"
            >
              <span className="text-xl sm:text-2xl text-white/80 font-light">
                Senior Frontend Developer
              </span>
              <p className="text-[#707070] text-sm mt-2">
                React 19 • TypeScript • Web3 • AI Integration
              </p>
            </motion.div>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-[#707070] text-base sm:text-lg max-w-md mb-8 leading-relaxed"
            >
              Ex-Production Director with 20+ years in management, pivoted to
              software engineering in 2022. Now building reliable systems with
              React, TypeScript, and AI agents at Santiment AG.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/Valery_Kot_CV.pdf"
                download
                className="group flex items-center gap-3 px-6 py-3 bg-white text-[#101010] rounded-full font-medium hover:bg-[#707070] hover:text-white transition-all duration-300"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-3 px-6 py-3 border border-[#3d3d3d] text-white rounded-full font-medium hover:border-white hover:bg-white/5 transition-all duration-300"
              >
                View Projects
                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: "3+", label: "Years in Dev" },
                { value: "20+", label: "Years Management" },
                { value: "10+", label: "Key Projects" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#707070] uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent blur-3xl scale-110" />

              {/* Image container */}
              <motion.div
                className="relative w-[280px] sm:w-[350px] lg:w-[400px] xl:w-[450px]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/images/hero-portrait-new.png"
                  alt="Valery Kot"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="absolute -left-4 top-1/4 glass px-4 py-2 rounded-full"
                >
                  <span className="text-white text-sm font-medium">
                    React 19
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                  className="absolute -right-4 top-1/2 glass px-4 py-2 rounded-full"
                >
                  <span className="text-white text-sm font-medium">Web3</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, duration: 0.6 }}
                  className="absolute left-1/4 -bottom-4 glass px-4 py-2 rounded-full"
                >
                  <span className="text-white text-sm font-medium">
                    AI Agents
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#3d3d3d] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
