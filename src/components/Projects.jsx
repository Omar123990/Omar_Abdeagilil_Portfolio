import React, { useRef } from "react";
import { motion } from "framer-motion";
import { personalInfo, projects } from "./data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const Projects = () => {
  const projectCardsRef = useRef([]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="projects"
      className="py-16 sm:py-20 border-t border-gray-800 bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <MotionDiv
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-teal-300 mb-4 font-semibold">
            Featured Projects
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Projects crafted for performance, polish, and product value.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed px-2">
            Discover real applications with clean interfaces, strong visuals,
            and a modern frontend foundation.
          </p>
        </MotionDiv>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.id}
              ref={(el) => (projectCardsRef.current[index] = el)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl sm:rounded-4xl border border-white/10 bg-[#06111e]/95 shadow-[0_25px_80px_rgba(15,23,42,0.35)] min-w-0"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
              whileHover={{ y: -4, scale: 1.005 }}
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${project.title}`}
                className="block overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-video w-full bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                </div>

                <div className="p-5 sm:p-6">
                  <span className="inline-flex rounded-full bg-teal-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-200">
                    {index === 0 ? "Featured" : "Project"}
                  </span>
                  <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white transition-colors duration-150 group-hover:text-teal-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-300 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-teal-300/10 bg-teal-300/5 px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-teal-200 max-w-full wrap-break-word"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>

              <div className="border-t border-white/5 p-5 sm:p-6 bg-[#07111d]/60 flex items-center justify-between gap-4 mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 transition-colors duration-150 hover:text-white cursor-pointer"
                >
                  <FaGithub size={16} aria-hidden="true" /> View code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-teal-200 transition-all duration-150 hover:bg-teal-300/20 hover:text-white cursor-pointer"
                >
                  <FaExternalLinkAlt size={12} aria-hidden="true" /> Live demo
                </a>
              </div>
            </MotionArticle>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-teal-300/20 bg-slate-950/80 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-teal-200 transition-all duration-300 hover:border-teal-300 hover:bg-teal-400/10 hover:text-white cursor-pointer"
          >
            <FaGithub size={18} aria-hidden="true" /> Explore more on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
