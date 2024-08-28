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
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex flex-1 flex-col gap-4 p-4 bg-muted/40 md:gap-8 md:p-10">
        <Header />
        <Home />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Hackathon />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
