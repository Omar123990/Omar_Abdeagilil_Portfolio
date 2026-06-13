import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const MotionNav = motion.nav;

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const navVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 260;
      navItems.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const getLinkStyle = (linkName) => {
    return `transition-all duration-300 border-b-2 pb-1 ${
      activeLink === linkName
        ? "text-teal-300 font-semibold border-teal-300"
        : "text-slate-300 border-transparent hover:text-teal-300"
    }`;
  };

  return (
    <MotionNav
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#02040a]/95 backdrop-blur-xl shadow-black/20"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-2xl font-black tracking-[0.08em] text-transparent bg-clip-text bg-linear-to-r from-teal-300 via-cyan-300 to-purple-400"
        >
          Omar.Dev
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm md:text-base">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={getLinkStyle(item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full border border-teal-300/20 bg-teal-400/10 px-5 py-3 text-sm font-semibold text-teal-200 transition-all duration-300 hover:bg-teal-400/20 hover:text-white"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#060912] border-t border-white/10 px-6 py-4">
          <ul className="space-y-4 text-center">
            {navItems.map((item) => (
              <li key={`mobile-${item.id}`}>
                <a
                  href={`#${item.id}`}
                  onClick={toggleMenu}
                  className={getLinkStyle(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            <a
              href="#contact"
              onClick={toggleMenu}
              className="rounded-full border border-teal-300/20 bg-teal-400/10 px-5 py-3 text-sm font-semibold text-teal-200 transition-all duration-300 hover:bg-teal-400/20 hover:text-white"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </MotionNav>
  );
};

export default Navbar;
