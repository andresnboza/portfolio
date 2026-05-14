import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/resume'
import './ServicesPage.css'

const WHATSAPP_NUMBER = '50686381731'

// ── Icons ────────────────────────────────────────────────────────────────────

function MobileIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function DataIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4c0 .34-.04.67-.1 1H16a4 4 0 0 1 0 8h-1v1a3 3 0 0 1-6 0v-1H8a4 4 0 0 1 0-8h.1A4.07 4.07 0 0 1 8 6a4 4 0 0 1 4-4z" />
      <line x1="12" y1="6" x2="12" y2="10" />
      <line x1="10" y1="8" x2="14" y2="8" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function UsaFlagIcon() {
  return <span className="flag-icon">🇺🇸</span>
}

function CrFlagIcon() {
  return <span className="flag-icon">🇨🇷</span>
}

// ── Component ─────────────────────────────────────────────────────────────────

const tierMeta = [
  { id: 'startup', accent: 'tier--startup', featured: false, subjectKey: 'Project Inquiry' },
  { id: 'medium',  accent: 'tier--medium',  featured: true,  subjectKey: 'Growing Business Inquiry' },
  { id: 'enterprise', accent: 'tier--enterprise', featured: false, subjectKey: 'Enterprise Team Inquiry' },
]

const capMeta = [
  { id: 'mobile', icon: <MobileIcon />, color: 'cap--mobile' },
  { id: 'web',    icon: <WebIcon />,    color: 'cap--web' },
  { id: 'data',   icon: <DataIcon />,   color: 'cap--data' },
  { id: 'cloud',  icon: <CloudIcon />,  color: 'cap--cloud' },
]

const reasonMeta = [
  { id: 'ai',       icon: <BrainIcon /> },
  { id: 'team',     icon: <UsaFlagIcon /> },
  { id: 'senior',   icon: <CloudIcon /> },
  { id: 'delivery', icon: <CheckIcon /> },
]

export default function ServicesPage() {
  const { t } = useTranslation()
  const { ref: heroRef, inView: heroVisible } = useInView()
  const { ref: tiersRef, inView: tiersVisible } = useInView()
  const { ref: capRef, inView: capVisible } = useInView()
  const { ref: whyRef, inView: whyVisible } = useInView()
  const { ref: ctaRef, inView: ctaVisible } = useInView()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="services-page">

      {/* ── Hero ── */}
      <section className="svc-hero">
        <div className="svc-hero__glow svc-hero__glow--1" aria-hidden />
        <div className="svc-hero__glow svc-hero__glow--2" aria-hidden />
        <div className="svc-hero__grid" aria-hidden />
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`container svc-hero__inner stagger-children${heroVisible ? ' is-visible' : ''}`}
        >
          <p className="section-label">{t('services.label')}</p>
          <h1 className="svc-hero__title">
            {t('services.heroTitle')}<br />
            <span className="svc-hero__title-accent">{t('services.heroTitleAccent')}</span>
          </h1>
          <p className="svc-hero__sub">{t('services.heroSub')}</p>
          <div className="svc-hero__badges">
            <span className="svc-badge"><MobileIcon /> {t('services.capabilities.mobile.title')}</span>
            <span className="svc-badge"><WebIcon /> {t('services.capabilities.web.title')}</span>
            <span className="svc-badge"><DataIcon /> {t('services.capabilities.data.title')}</span>
            <span className="svc-badge"><CloudIcon /> {t('services.capabilities.cloud.title')}</span>
          </div>
          <div className="svc-hero__flags">
            <span><UsaFlagIcon /> United States</span>
            <span className="svc-hero__flag-sep">+</span>
            <span><CrFlagIcon /> Costa Rica</span>
          </div>
        </div>
      </section>

      {/* ── Tiers ── */}
      <section className="svc-tiers">
        <div className="container">
          <div
            ref={tiersRef as React.RefObject<HTMLDivElement>}
            className={`animate anim-fade-up${tiersVisible ? ' is-visible' : ''}`}
          >
            <p className="section-label">{t('services.whoLabel')}</p>
            <h2 className="section-title">{t('services.whoTitle')}</h2>
          </div>
          <div className="tiers-grid">
            {tierMeta.map((tier) => {
              const highlights = t(`services.tiers.${tier.id}.highlights`, { returnObjects: true }) as string[]
              return (
                <div key={tier.id} className={`tier-card ${tier.accent}${tier.featured ? ' tier-card--featured' : ''}`}>
                  {tier.featured && <div className="tier-card__glow" aria-hidden />}
                  <div className="tier-card__badge">{t(`services.tiers.${tier.id}.badge`)}</div>
                  <p className="tier-card__label">{t(`services.tiers.${tier.id}.label`)}</p>
                  <h3 className="tier-card__headline">{t(`services.tiers.${tier.id}.headline`)}</h3>
                  <p className="tier-card__body">{t(`services.tiers.${tier.id}.body`)}</p>
                  <ul className="tier-card__list">
                    {highlights.map((h, i) => (
                      <li key={i}>
                        <span className="tier-card__check"><CheckIcon /></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${personal.email}?subject=${tier.subjectKey}`}
                    className={`tier-card__cta${tier.featured ? ' tier-card__cta--featured' : ''}`}
                  >
                    {t(`services.tiers.${tier.id}.cta`)} <ArrowIcon />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="svc-capabilities">
        <div className="container">
          <div
            ref={capRef as React.RefObject<HTMLDivElement>}
            className={`animate anim-fade-up${capVisible ? ' is-visible' : ''}`}
          >
            <p className="section-label">{t('services.capLabel')}</p>
            <h2 className="section-title">{t('services.capTitle')}</h2>
          </div>
          <div className={`cap-grid stagger-children${capVisible ? ' is-visible' : ''}`}>
            {capMeta.map((c) => {
              const items = t(`services.capabilities.${c.id}.items`, { returnObjects: true }) as string[]
              return (
                <div key={c.id} className={`cap-card ${c.color}`}>
                  <div className="cap-card__icon">{c.icon}</div>
                  <h3 className="cap-card__title">{t(`services.capabilities.${c.id}.title`)}</h3>
                  <ul className="cap-card__list">
                    {items.map((item, i) => (
                      <li key={i}><span className="cap-dot" />{item}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="svc-why">
        <div className="container">
          <div
            ref={whyRef as React.RefObject<HTMLDivElement>}
            className={`animate anim-fade-up${whyVisible ? ' is-visible' : ''}`}
          >
            <p className="section-label">{t('services.whyLabel')}</p>
            <h2 className="section-title">{t('services.whyTitle')}</h2>
          </div>
          <div className={`why-grid stagger-children${whyVisible ? ' is-visible' : ''}`}>
            {reasonMeta.map((r) => (
              <div key={r.id} className="why-card">
                <div className="why-card__icon">{r.icon}</div>
                <h3 className="why-card__title">{t(`services.reasons.${r.id}.title`)}</h3>
                <p className="why-card__body">{t(`services.reasons.${r.id}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta">
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`container svc-cta__inner animate anim-scale-in${ctaVisible ? ' is-visible' : ''}`}
        >
          <div className="svc-cta__glow" aria-hidden />
          <p className="section-label">{t('services.ctaLabel')}</p>
          <h2 className="svc-cta__title">{t('services.ctaTitle')}</h2>
          <p className="svc-cta__sub">{t('services.ctaSub')}</p>
          <div className="svc-cta__actions">
            <a href={`mailto:${personal.email}?subject=Project Inquiry`} className="btn btn--primary btn--lg">
              {t('services.ctaBtn')} <ArrowIcon />
            </a>
            <Link to="/" className="btn btn--ghost btn--lg">
              {t('services.backBtn')}
            </Link>
          </div>
          <div className="svc-cta__socials">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="svc-cta__social svc-cta__social--whatsapp">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="svc-cta__social">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="svc-cta__social">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span>{personal.name} · {personal.title}</span>
        </div>
      </footer>
    </div>
  )
}
