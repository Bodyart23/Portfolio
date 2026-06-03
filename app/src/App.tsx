import './App.css'
import patternRings from './assets/pattern-rings.svg'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="app" id="top">
      <img src={patternRings} alt="" className="rings rings-top" />

      <Header />

      <main className="content">
        <Hero />
        <Skills />
        <Projects />
      </main>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
