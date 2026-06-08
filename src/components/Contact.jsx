import React from "react";
import { personalInfo } from "./data/portfolioData";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "+201224084982";

  const whatsappMessage =
    "Hello Omar, I would like to discuss a project with you!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=omar.abdelglil.work@gmail.com";

  const cvLink = "/omar_cv.pdf";

  return (
    <section
      id="contact"
      className="py-20 bg-transparent border-t border-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's <span className="text-teal-300">Work Together</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I&apos;m available for freelance work or joining a strong team.
            Let&apos;s create a polished Next.js experience with a smooth,
            modern frontend.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-[36px] border border-teal-300/10 bg-[#06111f]/90 p-6 sm:p-8 shadow-[0_35px_90px_rgba(16,185,129,0.12)] overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-center">
            <div className="space-y-6 wrap-break-word">
              <div className="inline-flex items-center gap-3 rounded-full border border-teal-300/15 bg-teal-300/10 px-4 py-2 text-sm text-teal-100 w-full sm:w-auto">
                <span className="h-2 w-2 rounded-full bg-teal-300 animate-pulse shrink-0" />
                <span className="truncate">
                  Ready to start your next React / Next.js project.
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Start a conversation with confidence.
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I build fast, accessible, and visually polished web
                  interfaces. Reach out and let&apos;s discuss how to turn your
                  idea into a strong frontend product.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-teal-400 px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-teal-400/30 w-full sm:w-auto"
                >
                  <FaWhatsapp size={22} /> Chat on WhatsApp
                </a>
                <a
                  href={cvLink}
                  download="Omar_Abdelgilil_CV.pdf"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-teal-300/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] hover:border-teal-300 hover:text-teal-300 w-full sm:w-auto"
                >
                  <FaDownload size={20} /> Download CV
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07131e]/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl w-full">
              <h4 className="text-xl font-semibold text-white mb-4 wrap-break-word">
                Connect directly
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Prefer email, LinkedIn, or GitHub? I&apos;m available on every
                platform and ready to collaborate.
              </p>
              <div className="grid gap-4 w-full">
                <a
                  href={gmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-gray-700 bg-red-600/10 px-5 py-4 text-sm text-red-200 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600/20 hover:text-white w-full"
                  title="Send me an Email"
                >
                  <FaEnvelope size={20} /> Email
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-gray-700 bg-blue-600/10 px-5 py-4 text-sm text-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600/20 hover:text-white w-full"
                >
                  <FaLinkedin size={20} /> LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-gray-700 bg-purple-600/10 px-5 py-4 text-sm text-purple-200 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-600/20 hover:text-white w-full"
                >
                  <FaGithub size={20} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
