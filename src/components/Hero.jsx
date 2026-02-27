import React, { useState, useEffect } from "react";
import { personalInfo } from "./data/portfolioData";
import { FaGithub } from "react-icons/fa";
import photo from "../assets/profile.png";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-transparent pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div
          className={`relative flex items-center justify-center z-10 w-60 h-60 md:w-96 md:h-96 rounded-full p-1 mb-6 shadow-2xl transition-all duration-1000 ease-out transform ${
            isLoaded
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <img
            src={photo}
            alt="Omar Abdalgilil"
            loading="eager"
            className="w-[97%] h-[97%] object-cover rounded-full z-10"
          />
          <div className="w-full h-full z-[-1] animate-spin [animation-duration:3s] rounded-full bg-linear-to-r from-purple-600 via-blue-500 to-purple-600 absolute top-0 left-0"></div>
        </div>

        <h3
          className={`text-purple-400 text-xl font-medium mb-2 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          👋 Hello I'm
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
          className={`text-2xl text-gray-400 mb-6 bg-gray-800 px-6 py-3 rounded-full inline-block transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <ReactTyped
            strings={[
              personalInfo.role,
              "React Developer",
              "JavaScript Enthusiast",
            ]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={1500}
            loop
          />
        </h2>

        <p
          className={`max-w-2xl text-gray-400 text-lg leading-relaxed mb-8 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          {personalInfo.about}
        </p>

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
