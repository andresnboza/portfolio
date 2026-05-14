import { useTranslation } from 'react-i18next'
import { personal } from '../data/resume'
import { useScrollNav } from '../hooks/useScrollNav'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()
  const scrollTo = useScrollNav()
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" aria-hidden />
      <div className="hero__glow hero__glow--1" aria-hidden />
      <div className="hero__glow hero__glow--2" aria-hidden />

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__greeting hero-anim hero-anim--1">{t('hero.greeting')}</p>
          <h1 className="hero__name hero-anim hero-anim--2">{personal.name}</h1>
          <h2 className="hero__title hero-anim hero-anim--3">{personal.title}</h2>
          <p className="hero__tagline hero-anim hero-anim--4">{t('hero.tagline')}</p>
          <div className="hero__actions hero-anim hero-anim--5">
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>{t('hero.viewWork')}</button>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href={`mailto:${personal.email}`} className="btn btn--ghost">{t('hero.contact')}</a>
          </div>
        </div>

        <div className="hero__avatar-wrap hero-anim hero-anim--2">
          <div className="hero__avatar-ring" aria-hidden />
          <img
            src="/portfolio/avatar.jpg"
            alt={personal.name}
            className="hero__avatar"
          />
        </div>
      </div>
    </section>
  )
}
