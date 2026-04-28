import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingBackground from './components/FloatingBackground'

function App() {
  useEffect(() => {
    document.body.style.background = '#020408'
  }, [])

  return (
    <div className="relative min-h-screen bg-dark-950 overflow-x-hidden">
      <FloatingBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
