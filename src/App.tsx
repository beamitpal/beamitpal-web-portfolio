import "./App.css";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import { Toaster } from "./components/ui/sonner";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Hackathon from "./pages/Hackathon";
import Home from "./pages/Home";
import OpenSource from "./pages/OpenSource";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
function App() {
  return (
    <>
    <Header />
      <main>
        <Home />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Hackathon />
        <OpenSource />
        <Contact />
        <Toaster />
      </main>
      <Footer />
    </>
  );
}

export default App;
