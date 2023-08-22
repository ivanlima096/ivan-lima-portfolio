import About from "./components/About/About"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import SkillBar from "./components/SkillBar/SkillBar"
import Skills from "./components/Skills/Skills"
import WaveAnimation from "./components/WaveAnimation/WaveAnimation"
import ContactForm from "./components/Contact/ContactForm"
import Footer from "./components/Footer/Footer"

import React, { useState, useEffect } from 'react';

const titles = ["Ivan Lima | Portfolio", "Ivan Lima | Front End", "Contrate-me!", "Entre em Contato!", "Deixe sua Avaliação!"]

function App() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.title = titles[titleIndex];
  }, [titleIndex]);

  return (
    <>

      <Navbar />
      <About />
      <SkillBar />
      <Skills />
      <WaveAnimation />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
