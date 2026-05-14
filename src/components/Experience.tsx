import { useTranslation } from 'react-i18next'
import { experience } from '../data/resume'
import { useInView } from '../hooks/useInView'
import './Experience.css'

export default function Experience() {
  const { t } = useTranslation()
  const { ref: headRef, inView: headVisible } = useInView()
  const { ref: listRef, inView: listVisible } = useInView()

  return (
    <section id="experience">
      <div className="container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`animate anim-fade-up${headVisible ? ' is-visible' : ''}`}
        >
          <p className="section-label">{t('experience.label')}</p>
          <h2 className="section-title">{t('experience.title')}</h2>
        </div>

        <div
          ref={listRef as React.RefObject<HTMLDivElement>}
          className={`timeline stagger-children${listVisible ? ' is-visible' : ''}`}
        >
          {experience.map((exp) => {
            const bullets = t(`experience.jobs.${exp.id}`, { returnObjects: true }) as string[]
            return (
              <div key={exp.id} className="timeline__item">
                <div className="timeline__meta">
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <div className="timeline__content">
                  <h3 className="timeline__role">{exp.role}</h3>
                  <p className="timeline__company">{exp.company}</p>
                  {exp.location && <p className="timeline__location">{exp.location}</p>}
                  <ul className="timeline__bullets">
                    {bullets.map((d, j) => (
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
