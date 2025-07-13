import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Projects from './components/Projects';
import Certifications from './components/Certifications';
import PersonalInfo from './components/PersonalInfo';
import Declaration from './components/Declaration';
import WaterBackground from './components/WaterBackground';
import './styles/glassmorphism.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-x-hidden">
      <WaterBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Certifications />
      <PersonalInfo />
      <Declaration />
    </div>
  );
}

export default App;