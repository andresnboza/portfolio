import { experience } from '../data/resume'
import { useInView } from '../hooks/useInView'
import './Experience.css'

export default function Experience() {
  const { ref: headRef, inView: headVisible } = useInView()
  const { ref: listRef, inView: listVisible } = useInView()

  return (
    <section id="experience">
      <div className="container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`animate anim-fade-up${headVisible ? ' is-visible' : ''}`}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div
          ref={listRef as React.RefObject<HTMLDivElement>}
          className={`timeline stagger-children${listVisible ? ' is-visible' : ''}`}
        >
          {experience.map((exp, i) => (
            <div key={i} className="timeline__item">
              <div className="timeline__meta">
                <span className="timeline__period">{exp.period}</span>
              </div>
              <div className="timeline__content">
                <h3 className="timeline__role">{exp.role}</h3>
                <p className="timeline__company">{exp.company}</p>
                {exp.location && <p className="timeline__location">{exp.location}</p>}
                <ul className="timeline__bullets">
                  {exp.description.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                <div className="timeline__tech">
                  {exp.tech.map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
