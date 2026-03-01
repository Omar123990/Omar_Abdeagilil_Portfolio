import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0B0F19] min-h-screen font-sans relative overflow-hidden">
      <div className="fixed top-[-10%] left-[-10%] w-150 h-150 bg-purple-600/50 rounded-full blur-3xl pointer-events-none z-0 animate-pulse [animation-duration:2s]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-150 h-150 bg-blue-600/50 rounded-full blur-3xl pointer-events-none z-0  animate-pulse [animation-duration:2s]"></div>
      <div className="fixed hidden xl:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-purple-600/50 via-blue-500/50 to-purple-600/50 rounded-full blur-3xl pointer-events-none z-0 animate-pulse [animation-duration:4s]"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
