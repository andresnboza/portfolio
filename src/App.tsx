import { useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ServicesPage from './pages/ServicesPage'

function Portfolio() {
  const location = useLocation()

  // Scroll to section when navigating here from another route
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (target) {
      // Wait for the page to paint before scrolling
      const id = setTimeout(() => {
        const el = document.getElementById(target)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 80)
      return () => clearTimeout(id)
    }
  }, [location.state])

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
        {/* Catch-all: redirect unknown hashes back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
