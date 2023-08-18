import About from "./components/About/About"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import SkillBar from "./components/SkillBar/SkillBar"
import Skills from "./components/Skills/Skills"
import WaveAnimation from "./components/WaveAnimation/WaveAnimation"


function App() {

  return (
    <>
      <Navbar />
      <About />
      <SkillBar />
      <Skills />
      <WaveAnimation/>
      <Projects />
    </>
  )
}

export default App
