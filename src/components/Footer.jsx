import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { personalInfo } from "./data/portfolioData";

const Footer = () => {
  const MotionFooter = motion.footer;

  const footerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };
  const currentYear = new Date().getFullYear();

  return (
    <MotionFooter
      className="relative z-10 border-t border-teal-300/10 bg-[#02050d]/90 py-12 text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr] items-start max-w-full">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-teal-300 mb-4">
              Stay connected
            </p>
            <h2 className="text-3xl font-bold mb-3 text-white">
              Let&apos;s build something with Next.js and React.
            </h2>
            <p className="max-w-xl text-gray-400 leading-relaxed">
              I create modern frontend experiences with strong performance and
              polished visual language. Reach out if you want a fast,
              responsive, and beautiful web product.
            </p>
            <p className="mt-2 max-w-xl text-sm text-teal-300/90 leading-relaxed">
              I studied Frontend at Route Academy.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick links
            </h3>
            <div className="grid gap-3 text-gray-300 text-sm">
              <a href="#hero" className="transition-colors hover:text-teal-300">
                Home
              </a>
              <a
                href="#skills"
                className="transition-colors hover:text-teal-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-teal-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-teal-300"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect with me
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex min-w-12 h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white transition-all duration-300 hover:bg-teal-400 hover:text-slate-950"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex min-w-12 h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send an Email"
                className="inline-flex min-w-12 h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-105"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-400/10 px-5 py-3 text-sm font-semibold text-teal-200 transition-all duration-300 hover:bg-teal-400/20 hover:text-white"
            >
              <FaArrowUp size={14} /> Back to top
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Designed & built by{" "}
            <span className="text-teal-300">Omar Abdelgilil</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </MotionFooter>
  );
};

export default Footer;
