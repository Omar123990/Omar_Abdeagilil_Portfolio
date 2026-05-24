import React from "react";
import { personalInfo } from "./data/portfolioData";
import { FaGithub } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import photo from "../assets/profile.png";

const heroWords = [
  "Frontend Developer",
  "React & Next.js Specialist",
  "UI-focused Product Builder",
];

const Hero = () => {
  const isLoaded = true;

  const [typedText] = useTypewriter({
    words: heroWords,
    loop: 0,
    typeSpeed: 55,
    deleteSpeed: 35,
    delaySpeed: 1800,
  });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-transparent pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div
          className={`relative flex items-center justify-center z-10 w-60 h-60 md:w-110 md:h-110 rounded-full p-1 mb-6 shadow-2xl transition-all duration-1000 ease-out transform ${
            isLoaded
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <img
            src={photo}
            alt="Omar Abdelgilil"
            loading="eager"
            className="w-[97%] h-[97%] object-cover rounded-full z-10"
          />
          <div className="w-full h-full z-[-1] animate-spin [animation-duration:3s] rounded-full bg-linear-to-r from-purple-600 via-blue-500 to-purple-600 absolute top-0 left-0"></div>
        </div>

        <div
          className={`inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-100 mb-4 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Open for freelance, contract, and full-time opportunities
        </div>

        <h3
          className={`text-purple-400 text-xl font-medium mb-2 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          👋 Hello, I’m
        </h3>

        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {personalInfo.name}
        </h1>

        <h2
          className={`text-xl md:text-2xl text-gray-200 mb-6 border border-gray-800 bg-gray-900/80 px-6 py-3 rounded-full inline-block transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <span>{typedText}</span>
          <Cursor cursorColor="#c084fc" cursorBlinking={true} />
        </h2>

        <p
          className={`max-w-2xl text-gray-300 text-lg leading-relaxed mb-8 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          {personalInfo.about}
        </p>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "950ms" }}
        >
          <span className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200 hover:border-purple-400 hover:text-white transition-all duration-300">
            React
          </span>
          <span className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200 hover:border-cyan-400 hover:text-white transition-all duration-300">
            Next.js
          </span>
          <span className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200 hover:border-yellow-300 hover:text-white transition-all duration-300">
            JavaScript / TypeScript
          </span>
          <span className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200 hover:border-pink-400 hover:text-white transition-all duration-300">
            Tailwind CSS
          </span>
          <span className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200 hover:border-emerald-400 hover:text-white transition-all duration-300">
            Responsive UI
          </span>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-5 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <a
            href="#projects"
            aria-label="Explore My Work"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium duration-300 hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            aria-label="Start a project conversation"
            className="bg-transparent border border-gray-700 hover:border-purple-400 text-white px-8 py-3 rounded-lg font-medium duration-300 transition-all transform hover:-translate-y-1"
          >
            Let’s Build Together
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub Profile"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium duration-300 flex items-center gap-2 hover:shadow-md hover:shadow-gray-500/50 transition-all transform hover:-translate-y-1"
          >
            <FaGithub size={20} aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
