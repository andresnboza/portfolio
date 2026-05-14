import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/resume'
import './ServicesPage.css'

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
