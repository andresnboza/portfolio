import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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

// ── Data ─────────────────────────────────────────────────────────────────────

const tiers = [
  {
    id: 'startup',
    label: 'Startup / Small Business',
    headline: 'You need a trusted partner, not a vendor.',
    body: "You have an idea or a problem. You need someone who can think it through with you, architect the right solution, and build it — fast. I work directly with you, end to end. No middlemen, no overhead, just sharp execution.",
    highlights: [
      'Direct access to a senior engineer',
      'MVP to production in weeks, not months',
      'Mobile, web, or AI — I do it all',
      'Flexible engagement: hourly, project, or retainer',
    ],
    cta: 'Talk to Andres',
    ctaHref: `mailto:${personal.email}?subject=Project Inquiry`,
    accent: 'tier--startup',
    badge: 'Most personal',
  },
  {
    id: 'medium',
    label: 'Growing Business',
    headline: 'You need structure, speed, and a technical leader.',
    body: "Your product is growing and you need someone who can lead architecture decisions, scale your team, and own delivery. I step in as your technical anchor — designing systems that grow with you and bringing in sharp engineers when the scope demands it.",
    highlights: [
      'Andres as lead architect and delivery owner',
      'Scalable system design from day one',
      'Team augmentation as the project scales',
      'AI-first approach built into your roadmap',
      'Full-stack: frontend, backend, mobile, data',
    ],
    cta: 'Let\'s scope your project',
    ctaHref: `mailto:${personal.email}?subject=Growing Business Inquiry`,
    accent: 'tier--medium',
    badge: 'Most popular',
    featured: true,
  },
  {
    id: 'enterprise',
    label: 'Enterprise / Large Corporation',
    headline: 'You need a proven team across borders.',
    body: "Large-scale transformation, modernization, or a greenfield platform? We bring a vetted team of senior engineers placed in both the US and Costa Rica — overlapping time zones, competitive rates, and the caliber you'd expect from top-tier firms.",
    highlights: [
      'Senior engineers in the US and Costa Rica',
      'US time-zone overlap for seamless collaboration',
      'AI, cloud, microservices, and data at scale',
      'Staff augmentation or full delivery model',
      'NDA-ready, SOC-2 aware, enterprise processes',
    ],
    cta: 'Request a team',
    ctaHref: `mailto:${personal.email}?subject=Enterprise Team Inquiry`,
    accent: 'tier--enterprise',
    badge: 'Full team',
  },
]

const capabilities = [
  {
    icon: <MobileIcon />,
    title: 'Mobile',
    color: 'cap--mobile',
    items: [
      'iOS & Android (React Native)',
      'App Store & Play Store publishing',
      'Offline-first architecture',
      'Push notifications & real-time sync',
      'Performance optimization',
    ],
  },
  {
    icon: <WebIcon />,
    title: 'Web',
    color: 'cap--web',
    items: [
      'React / Next.js SPAs & SSR',
      'Full-stack APIs (Node, .NET, Python)',
      'E-commerce & SaaS platforms',
      'High-performance frontends',
      'Accessibility & SEO',
    ],
  },
  {
    icon: <DataIcon />,
    title: 'Data & AI',
    color: 'cap--data',
    items: [
      'LLM-powered agents & chatbots',
      'RAG pipelines & vector search',
      'Data pipelines & ETL',
      'Analytics dashboards',
      'AI feature integration into existing products',
    ],
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud & DevOps',
    color: 'cap--cloud',
    items: [
      'Azure, AWS, GCP architecture',
      'Kubernetes & container orchestration',
      'CI/CD pipelines & GitOps',
      'Infrastructure as Code',
      'Cost optimization',
    ],
  },
]

const reasons = [
  {
    icon: <BrainIcon />,
    title: 'AI-first mindset',
    body: 'Every solution is evaluated for AI leverage — from automation to intelligent features built directly into your product.',
  },
  {
    icon: <UsaFlagIcon />,
    title: 'US & Costa Rica coverage',
    body: 'Engineers placed in both markets. Competitive rates with US-overlap time zones — the best of nearshore without the trade-offs.',
  },
  {
    icon: <CloudIcon />,
    title: 'Senior-level only',
    body: 'No juniors parachuted into your codebase. Every engineer on your project has the scar tissue to navigate complexity.',
  },
  {
    icon: <CheckIcon />,
    title: 'End-to-end delivery',
    body: 'From architecture to app store. We own the full lifecycle so you never have to coordinate between five different vendors.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const { ref: heroRef, inView: heroVisible } = useInView()
  const { ref: tiersRef, inView: tiersVisible } = useInView()
  const { ref: capRef, inView: capVisible } = useInView()
  const { ref: whyRef, inView: whyVisible } = useInView()
  const { ref: ctaRef, inView: ctaVisible } = useInView()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          <p className="section-label">Work with us</p>
          <h1 className="svc-hero__title">
            Let's talk about<br />
            <span className="svc-hero__title-accent">your project.</span>
          </h1>
          <p className="svc-hero__sub">
            Whether you're a founder with an idea, a business ready to scale,
            or a corporation modernizing at speed — we have the right team, the right experience,
            and the right approach to make it happen.
          </p>
          <div className="svc-hero__badges">
            <span className="svc-badge"><MobileIcon /> Mobile</span>
            <span className="svc-badge"><WebIcon /> Web</span>
            <span className="svc-badge"><DataIcon /> Data &amp; AI</span>
            <span className="svc-badge"><CloudIcon /> Cloud</span>
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
            <p className="section-label">Who we help</p>
            <h2 className="section-title">The right fit for every scale</h2>
          </div>
          <div className="tiers-grid">
            {tiers.map((t) => (
              <div key={t.id} className={`tier-card ${t.accent}${t.featured ? ' tier-card--featured' : ''}`}>
                {t.featured && <div className="tier-card__glow" aria-hidden />}
                <div className="tier-card__badge">{t.badge}</div>
                <p className="tier-card__label">{t.label}</p>
                <h3 className="tier-card__headline">{t.headline}</h3>
                <p className="tier-card__body">{t.body}</p>
                <ul className="tier-card__list">
                  {t.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="tier-card__check"><CheckIcon /></span>
                      {h}
                    </li>
                  ))}
                </ul>
                <a href={t.ctaHref} className={`tier-card__cta${t.featured ? ' tier-card__cta--featured' : ''}`}>
                  {t.cta} <ArrowIcon />
                </a>
              </div>
            ))}
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
            <p className="section-label">What we build</p>
            <h2 className="section-title">Full-spectrum delivery</h2>
          </div>
          <div className={`cap-grid stagger-children${capVisible ? ' is-visible' : ''}`}>
            {capabilities.map((c) => (
              <div key={c.title} className={`cap-card ${c.color}`}>
                <div className="cap-card__icon">{c.icon}</div>
                <h3 className="cap-card__title">{c.title}</h3>
                <ul className="cap-card__list">
                  {c.items.map((item, i) => (
                    <li key={i}>
                      <span className="cap-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            <p className="section-label">Why us</p>
            <h2 className="section-title">Built different</h2>
          </div>
          <div className={`why-grid stagger-children${whyVisible ? ' is-visible' : ''}`}>
            {reasons.map((r, i) => (
              <div key={i} className="why-card">
                <div className="why-card__icon">{r.icon}</div>
                <h3 className="why-card__title">{r.title}</h3>
                <p className="why-card__body">{r.body}</p>
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
          <p className="section-label">Ready?</p>
          <h2 className="svc-cta__title">
            Tell us what you're building.
          </h2>
          <p className="svc-cta__sub">
            No commitment. No sales deck. Just a conversation about your problem
            and how we can solve it.
          </p>
          <div className="svc-cta__actions">
            <a href={`mailto:${personal.email}?subject=Project Inquiry`} className="btn btn--primary btn--lg">
              Start a conversation <ArrowIcon />
            </a>
            <Link to="/" className="btn btn--ghost btn--lg">
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span>Andres Navarrete · AI Architect & Senior Software Engineer</span>
        </div>
      </footer>
    </div>
  )
}
