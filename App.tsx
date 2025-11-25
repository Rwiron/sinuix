import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { SectionId, Project } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: SectionId) => {
    // If in detail view, go back to home first
    if (selectedProject) {
      setSelectedProject(null);
      // Wait for render to find element
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(id);
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  };

  return (
    <div className="font-sans antialiased text-siunex-dark selection:bg-siunex-gold selection:text-white bg-siunex-base">

      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <>
          <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

          <main>
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Services />
            <Projects onProjectSelect={setSelectedProject} />
            <Contact />
          </main>
        </>
      )}

      <Footer />
      {/* ChatWidget disabled - requires GEMINI_API_KEY environment variable */}
      {/* <ChatWidget /> */}
    </div>
  );
};

export default App;