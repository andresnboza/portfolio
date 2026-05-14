import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { personal } from '../data/resume'
import { useScrollNav } from '../hooks/useScrollNav'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isServices = location.pathname === '/services'
  const { t, i18n } = useTranslation()
  const scrollTo = useScrollNav()

  const portfolioLinks = [
    { label: t('nav.about'),      id: 'about' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.education'),  id: 'education' },
    { label: t('nav.projects'),   id: 'projects' },
    { label: t('nav.contact'),    id: 'contact' },
  ]

  function toggleLang() {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  function handleNavLink(id: string) {
    setMenuOpen(false)
    scrollTo(id)
  }

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 40)
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__progress" style={{ width: `${progress}%` }} />
        <div className="nav__inner">
          <button className="nav__logo" onClick={() => handleNavLink('hero')}>
            {personal.name.split(' ')[0].toLowerCase()}<span className="nav__logo-accent">.</span>
          </button>

          {/* Desktop links */}
          <ul className="nav__links nav__links--desktop">
            {!isServices && portfolioLinks.map(l => (
              <li key={l.id}>
                <button className="nav__link" onClick={() => handleNavLink(l.id)}>
                  {l.label}
                </button>
              </li>
            ))}
            {isServices && (
              <li>
                <Link to="/" className="nav__link">{t('nav.portfolio')}</Link>
              </li>
            )}
            <li>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="nav__github" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </li>
            <li className="nav__lang-li">
              <button className="nav__lang" onClick={toggleLang} aria-label="Toggle language">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </button>
            </li>
            <li>
              <Link to="/services" className={`nav__cta${isServices ? ' nav__cta--active' : ''}`}>
                {t('nav.letsTalk')}
              </Link>
            </li>
          </ul>

          {/* Mobile right side */}
          <div className="nav__mobile-right">
            <button className="nav__lang nav__lang--mobile" onClick={toggleLang} aria-label="Toggle language">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav__drawer${menuOpen ? ' nav__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="nav__drawer-links">
          {!isServices && portfolioLinks.map((l, i) => (
            <li key={l.id} style={{ animationDelay: `${i * 0.06}s` }}>
              <button onClick={() => handleNavLink(l.id)}>{l.label}</button>
            </li>
          ))}
          {isServices && (
            <li style={{ animationDelay: '0s' }}>
              <Link to="/" onClick={() => setMenuOpen(false)}>{t('nav.portfolio')}</Link>
            </li>
          )}
          <li style={{ animationDelay: `${portfolioLinks.length * 0.06}s` }}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>GitHub</a>
          </li>
          <li style={{ animationDelay: `${(portfolioLinks.length + 1) * 0.06}s` }}>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="nav__drawer-cta">
              {t('nav.letsTalk')}
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="nav__backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
