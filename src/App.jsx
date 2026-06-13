import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import RouteAcademy from "./components/RouteAcademy";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const pageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const MotionDiv = motion.div;

function App() {
  return (
    <MotionDiv
      className="min-h-screen font-sans relative overflow-hidden bg-[#04070f] text-white"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.12),transparent_25%),linear-gradient(180deg,#04070f_0%,#02040a_100%)] pointer-events-none -z-10"></div>
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-70 w-70 rounded-full bg-pink-500/10 blur-3xl animate-pulse" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <RouteAcademy />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionDiv>
  );
}

export default App;
