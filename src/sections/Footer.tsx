import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Twitter, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ValeryKot' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/valerykot/' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/kot.valery' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/Cyborcatt' },
  { icon: Mail, label: 'Email', href: 'mailto:kot.valery@gmail.com' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5">
      {/* Main footer content */}
      <div className="px-6 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#home" onClick={handleNavClick} className="inline-block mb-4">
                <span className="text-2xl font-bold text-white">
                  Valery<span className="text-[#707070]">.</span>Kot
                </span>
              </a>
              <p className="text-[#707070] max-w-md mb-6">
                Front-end developer focused on crafting clean & user-friendly experiences. 
                Building excellent software that improves lives.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/5 rounded-xl text-[#707070] hover:text-white hover:bg-white/10 transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="text-[#707070] hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-[#707070]">
                <li>Minsk, Belarus</li>
                <li>
                  <a href="mailto:kot.valery@gmail.com" className="hover:text-white transition-colors">
                    kot.valery@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+375336320623" className="hover:text-white transition-colors">
                    +375 33 632 06 23
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#707070]">
              &copy; {new Date().getFullYear()} Valery Kot. All rights reserved.
            </p>
            
            <p className="text-sm text-[#707070] flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-6 sm:right-8 lg:right-16 -top-6 p-3 bg-white text-[#101010] rounded-full shadow-lg hover:bg-[#707070] hover:text-white transition-colors"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </motion.button>
    </footer>
  );
}
