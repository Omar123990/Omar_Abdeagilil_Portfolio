import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkStyle = (linkName) => {
    return `transition-all duration-300 ${
      activeLink === linkName
        ? "text-purple-400 font-bold border-b-2 border-purple-400 pb-1"
        : "text-gray-300 hover:text-purple-400"
    }`;
  };

  return (
    <nav className="fixed w-full bg-[#0B0F19]/70 backdrop-blur-md z-50 border-b border-gray-800 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500"
        >
          {"<Omar />"}
        </a>

        <ul className="hidden md:flex space-x-8 text-sm md:text-base">
          <li>
            <a href="#hero" className={getLinkStyle("hero")}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className={getLinkStyle("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={getLinkStyle("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={getLinkStyle("contact")}>
              Contact
            </a>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-[#0F1626] border-b border-gray-800 transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-6 text-center">
          <li>
            <a
              href="#hero"
              onClick={toggleMenu}
              className={getLinkStyle("hero")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={toggleMenu}
              className={getLinkStyle("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleMenu}
              className={getLinkStyle("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className={getLinkStyle("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
