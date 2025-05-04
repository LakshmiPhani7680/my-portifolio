import './App.css'
import About from './Components/About'
import Experience from './Components/Experience'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Certifications from './Components/Certifications'
import Awards from './Components/Awards'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="font-sans">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Awards />
      <Contact />
    </div>
  )
}

export default App