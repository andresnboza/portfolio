import { useTranslation } from 'react-i18next'
import { skills } from '../data/resume'
import { useInView } from '../hooks/useInView'
import './About.css'

export default function About() {
  const { t } = useTranslation()
  const { ref: headRef, inView: headVisible } = useInView()
  const { ref: bioRef, inView: bioVisible } = useInView()
  const { ref: skillsRef, inView: skillsVisible } = useInView()

  const bio = t('about.bio', { returnObjects: true }) as string[]

  return (
    <section id="about">
      <div className="container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`animate anim-fade-up${headVisible ? ' is-visible' : ''}`}
        >
          <p className="section-label">{t('about.label')}</p>
          <h2 className="section-title">{t('about.title')}</h2>
        </div>

        <div className="about__grid">
          <div
            ref={bioRef as React.RefObject<HTMLDivElement>}
            className={`about__bio animate anim-slide-right${bioVisible ? ' is-visible' : ''}`}
          >
            {bio.map((para, i) => <p key={i}>{para}</p>)}
          </div>

          <div
            ref={skillsRef as React.RefObject<HTMLDivElement>}
            className={`about__skills stagger-children${skillsVisible ? ' is-visible' : ''}`}
          >
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-group">
                <h4 className="skill-group__title">{category}</h4>
                <div className="skill-group__tags">
                  {items.map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
