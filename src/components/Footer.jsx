import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-transparent border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Omar <span className="text-purple-500">Abdalgilil</span>
            </h2>
            <p className="text-gray-400 max-w-xs">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex gap-6 text-gray-400 text-sm font-medium">
            <a href="#hero" className="hover:text-purple-500 transition-colors">
              Home
            </a>
            <a
              href="#skills"
              className="hover:text-purple-500 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-purple-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-purple-500 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex gap-5">
            <a
              href="https://github.com/your-username"
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-purple-600 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:oalash55@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-500 hover:-translate-y-1 transition-all duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Designed & Built by{" "}
            <span className="text-gray-300">Omar Abdalgilil</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
