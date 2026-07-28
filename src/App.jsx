import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import ProfessionalWork from "./components/work/ProfessionalWork";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProfessionalWork />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
