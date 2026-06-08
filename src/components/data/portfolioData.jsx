import quizMasterImg from "../../assets/QuizMaster.png";
import cosmosImg from "../../assets/Cosmos-Dashboard.png";
import lammaImg from "../../assets/Lamma-Social.png";
import clarityImg from "../../assets/Clarity-Digital.png";
import nutriPlanImg from "../../assets/NutriPlan.png";
import freshCartImg from "../../assets/FreshCart - Google Chrome 11_04_2026 05_32_52 م.png";
import CineStream from "../../assets/CineStream _ Watch Movies & TV Shows - Google Chrome 16_05_2026 02_50_02 م.png";
import LUXE from "../../assets/LUXE.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNpm,
  FaCubes,
  FaTools,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiFramer,
  SiAntdesign,
  SiVite,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const personalInfo = {
  name: "Omar Abdelgilil",
  role: "Frontend Developer",
  about:
    "I design and build modern, responsive web experiences using React, Next.js, and Tailwind CSS. I focus on clean code, smooth UX, and interfaces that feel polished from the first scroll.",
  github: "https://github.com/Omar123990",
  email: "omar.abdelglil.work@gmail.com",
  linkedin: "https://www.linkedin.com/in/omar-abdelgilil-7b162b374/",
};

export const skills = [
  {
    title: "Frontend Core",
    icon: <SiJavascript className="text-yellow-400" />,
    description:
      "The strong foundational web technologies I use to build robust, high-performance, and clean-coded applications.",
    subSkills: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500" />,
        desc: "The standard markup language used to define the structure and content of web pages.",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500" />,
        desc: "The style sheet language used to design and control the visual presentation of the website.",
      },
      {
        name: "JavaScript ES6+",
        icon: <SiJavascript className="text-yellow-400" />,
        desc: "A powerful programming language that enables interactive, dynamic, and complex features on the web.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
        desc: "A strongly typed superset of JavaScript that catches errors early and improves code maintainability.",
      },
    ],
  },
  {
    title: "React Ecosystem",
    icon: <FaReact className="text-cyan-400 animate-spin-slow" />,
    description:
      "My primary expertise lies in building complex, interactive web applications using React and efficiently managing application state.",
    subSkills: [
      {
        name: "React.js",
        icon: <FaReact className="text-cyan-400" />,
        desc: "A declarative, efficient, and flexible JavaScript library for building component-based user interfaces.",
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux className="text-purple-500" />,
        desc: "The official, opinionated, and standardized tool for managing global application state efficiently.",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,
        desc: "A powerful React framework for production that enables Server-Side Rendering (SSR) and optimized performance.",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="text-pink-500" />,
        desc: "A production-ready motion library for React used to create smooth, complex, and highly customizable animations.",
      },
    ],
  },
  {
    title: "CSS Frameworks",
    icon: <SiTailwindcss className="text-cyan-500" />,
    description:
      "Designing modern, highly responsive, and user-friendly interfaces rapidly using industry-standard styling tools.",
    subSkills: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
        desc: "A utility-first CSS framework packed with classes that allows for rapid UI building directly in the markup.",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-600" />,
        desc: "A popular, feature-rich CSS framework providing pre-built components for responsive and fast development.",
      },
    ],
  },
  {
    title: "UI Libraries",
    icon: <FaCubes className="text-indigo-400" />,
    description:
      "Leveraging pre-built, highly customizable, and accessible component libraries to accelerate UI development and ensure consistency.",
    subSkills: [
      {
        name: "shadcn/ui",
        icon: <FaCubes className="text-white" />,
        desc: "A collection of beautifully designed, accessible components that you can copy and paste into your apps.",
      },
      {
        name: "HeroUI",
        icon: <FaCubes className="text-blue-400" />,
        desc: "A modern, highly customizable UI component library for building fast, beautiful web interfaces.",
      },
      {
        name: "Ant Design",
        icon: <SiAntdesign className="text-blue-500" />,
        desc: "An enterprise-class UI design language and React UI library with a set of high-quality components.",
      },
    ],
  },
  {
    title: "Development Tools",
    icon: <FaTools className="text-gray-400" />,
    description:
      "Essential build tools, package managers, and version control systems that streamline my development workflow.",
    subSkills: [
      {
        name: "Git & GitHub",
        icon: <FaGitAlt className="text-white" />,
        desc: "Version control system and collaborative platform for tracking code changes and team collaboration.",
      },
      {
        name: "Vite",
        icon: <SiVite className="text-purple-500" />,
        desc: "A blazing fast, next-generation frontend build tool that provides a leaner development experience.",
      },
      {
        name: "NPM",
        icon: <FaNpm className="text-red-500" />,
        desc: "The default package manager for JavaScript, used to install, share, and manage project dependencies.",
      },
      {
        name: "VS Code",
        icon: <VscVscode className="text-blue-500" />,
        desc: "A powerful, lightweight source-code editor with built-in debugging and extensive extension support.",
      },
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "CineStream",
    description:
      "A movie streaming experience focused on fast browsing, polished visuals, and a smooth entertainment-first flow.",
    image: CineStream,
    liveLink: "https://cine-stream-murex.vercel.app/",
    githubLink: "https://github.com/Omar123990/CineStream.git",
    tags: ["Next.js", "React", "Responsive UI", "Movie Platform"],
  },
  {
    id: 1,
    title: "freshCart",
    description:
      "A clean e-commerce interface for fresh produce with strong product presentation and a conversion-friendly layout.",
    image: freshCartImg,
    liveLink: "https://frish-cart-qkht1zmug-omar123990s-projects.vercel.app/",
    githubLink: "https://github.com/Omar123990/FrishCart.git",
    tags: ["Next.js", "React", "E-commerce", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Lamma Social",
    description:
      "A social media concept built to highlight engaging content flows and a friendly, modern community style.",
    image: lammaImg,
    liveLink: "https://lamma-app-amber.vercel.app/",
    githubLink: "https://github.com/Omar123990/Lamma-App",
    tags: ["Next.js", "React", "Social UI", "Modern Layout"],
  },
  {
    id: 3,
    title: "LUXE FASHION",
    description:
      "A premium e-commerce storefront built with Next.js and connected to dummyjson for live product data, cart interaction, and polished shopping flows.",
    image: LUXE,
    liveLink: "https://luxe-gules-omega.vercel.app/",
    githubLink: "https://github.com/Omar123990/luxe.git",
    tags: ["Next.js", "Ecommerce", "API Integration", "DummyJSON"],
  },
  {
    id: 4,
    title: "QuizMaster",
    description:
      "An interactive trivia app with a playful interface and quick user feedback for a fun learning flow.",
    image: quizMasterImg,
    liveLink: "https://omar123990.github.io/Quiz-App/",
    githubLink: "https://github.com/Omar123990/Quiz-App",
    tags: ["JavaScript", "OOP", "Interactive UI", "Quiz App"],
  },
  {
    id: 5,
    title: "NutriPlan",
    description:
      "A wellness-oriented app concept centered on meal planning, guidance, and a calm visual experience.",
    image: nutriPlanImg,
    liveLink: "https://omar123990.github.io/Nutriplan---Design/",
    githubLink: "https://github.com/Omar123990/Nutriplan---Design",
    tags: ["UI Design", "Wellness", "Frontend"],
  },
  {
    id: 6,
    title: "Clarity Digital",
    description:
      "A services-focused landing page built to communicate business value and encourage action clearly.",
    image: clarityImg,
    liveLink:
      "https://omar123990.github.io/Clarity---Digital-Solutions-Platform/",
    githubLink:
      "https://github.com/Omar123990/Clarity---Digital-Solutions-Platform",
    tags: ["Landing Page", "Conversion", "Brand"],
  },
  {
    id: 7,
    title: "Cosmos Dashboard",
    description:
      "A data-rich dashboard concept with an immersive space theme and clear visual hierarchy.",
    image: cosmosImg,
    liveLink: "https://omar123990.github.io/COSMOS---Space-Dashboard/",
    githubLink: "https://github.com/Omar123990/COSMOS---Space-Dashboard",
    tags: ["Dashboard", "NASA API", "Data UI", "Creative Design"],
  },
];
