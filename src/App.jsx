import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Stats from "./sections/Stats";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
