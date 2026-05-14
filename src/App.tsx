import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ServicesPage from './pages/ServicesPage'

function Portfolio() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </HashRouter>
  )
}
