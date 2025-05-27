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
import Navigation from './Components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0a192f] to-black relative overflow-hidden">
      {/* Matrix-style animated background */}
      <div className="absolute inset-0 z-0">
        <div className="matrix-bg w-full h-full opacity-10"></div>
      </div>
      
      {/* Main content with glass-morphism effect */}
      <div className="relative z-10 backdrop-blur-sm">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Home />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Awards />
          <Certifications />
          <Contact />
        </div>
      </div>

      {/* Animated gradient lines */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/20 via-transparent to-green-400/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/20 via-transparent to-green-400/20"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400/20 via-transparent to-green-400/20"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-green-400/20 via-transparent to-green-400/20"></div>
      </div>
    </div>
  )
}

export default App
