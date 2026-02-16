import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  Facebook,
  Twitter,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { submitToMailerLite } from "@/lib/mailerlite";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Plehanova street, Minsk, Republic of Belarus, 220085",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kot.valery@gmail.com",
    href: "mailto:kot.valery@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+375 33 632 06 23",
    href: "tel:+375336320623",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/ValeryKot" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/valerykot/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/kot.valery",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/ValeryKot246515",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Divider line animation
      gsap.fromTo(
        ".divider-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Form fields animation
      gsap.fromTo(
        formRef.current?.querySelectorAll(".form-field") || [],
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Contact info animation
      gsap.fromTo(
        ".contact-info-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const result = await submitToMailerLite(formData);

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you! Your message has been sent successfully.");

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Auto-reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
          setSubmitMessage("");
        }, 5000);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.error || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear error message when user starts typing
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101010] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#101010]" />

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#707070] text-sm tracking-[0.3em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
            Contact{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-[#707070] mt-4 max-w-2xl mx-auto">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 max-w-6xl mx-auto">
          {/* Left column - Contact Info */}
          <div className="contact-info lg:pr-12 relative">
            <h3 className="text-2xl font-bold text-white mb-8">
              Let&apos;s Talk
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="contact-info-item flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                    <item.icon
                      size={24}
                      className="text-[#707070] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-[#707070] mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-gradient hover:text-blue-400 transition-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-[#707070] hover:text-white hover:bg-white/10 transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-line hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent origin-top" />

          {/* Right column - Form */}
          <div className="lg:pl-12">
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <label className="block text-sm text-[#707070] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  minLength={2}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#707070] focus:outline-none focus:border-blue-500/50 transition-colors disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-field">
                <label className="block text-sm text-[#707070] mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#707070] focus:outline-none focus:border-blue-500/50 transition-colors disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-field">
                <label className="block text-sm text-[#707070] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  minLength={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#707070] focus:outline-none focus:border-blue-500/50 transition-colors disabled:opacity-50"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-field">
                <label className="block text-sm text-[#707070] mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  minLength={10}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#707070] focus:outline-none focus:border-blue-500/50 transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitMessage && (
                <div
                  className={`p-4 rounded-xl border ${
                    submitStatus === "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-400"
                      : "bg-red-500/10 border-red-500/20 text-red-400"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submitStatus === "success" ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitMessage}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitStatus === "success"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 bg-white text-[#101010] hover:bg-[#707070] hover:text-white"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-[#707070] text-center pt-2">
                I typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
