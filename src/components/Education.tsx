import { education, certifications } from '../data/resume'
import { useInView } from '../hooks/useInView'
import './Education.css'

function GradIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3.333 1.667 6.667 1.667 10 0v-5" />
    </svg>
  )
}

function BadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

export default function Education() {
  const { ref: headRef, inView: headVisible } = useInView()
  const { ref: bodyRef, inView: bodyVisible } = useInView()

  return (
    <section id="education">
      <div className="container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`animate anim-fade-up${headVisible ? ' is-visible' : ''}`}
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">Education & Certifications</h2>
        </div>

        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={`edu__grid stagger-children${bodyVisible ? ' is-visible' : ''}`}
        >
          {/* Education card */}
          <div className="edu__card">
            <div className="edu__card-icon">
              <GradIcon />
            </div>
            <div className="edu__card-body">
              <p className="edu__card-label">Degree</p>
              <h3 className="edu__card-title">{education.degree}</h3>
              <p className="edu__card-sub">{education.emphasis}</p>
              <div className="edu__card-meta">
                <span>{education.school}</span>
                <span className="edu__dot" />
                <span>{education.year}</span>
              </div>
            </div>
          </div>

          {/* Certification cards */}
          {certifications.map((cert, i) => (
            <div key={i} className="edu__card edu__card--cert">
              <div className="edu__card-icon edu__card-icon--cert">
                <BadgeIcon />
              </div>
              <div className="edu__card-body">
                <p className="edu__card-label">Certification</p>
                <h3 className="edu__card-title">{cert.name}</h3>
                <div className="edu__card-meta">
                  <span>{cert.issuer}</span>
                  <span className="edu__dot" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
