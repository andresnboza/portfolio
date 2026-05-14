import { skills } from '../data/resume'
import { useInView } from '../hooks/useInView'
import './About.css'

export default function About() {
  const { ref: headRef, inView: headVisible } = useInView()
  const { ref: bioRef, inView: bioVisible } = useInView()
  const { ref: skillsRef, inView: skillsVisible } = useInView()

  return (
    <section id="about">
      <div className="container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`animate anim-fade-up${headVisible ? ' is-visible' : ''}`}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">What I do</h2>
        </div>

        <div className="about__grid">
          <div
            ref={bioRef as React.RefObject<HTMLDivElement>}
            className={`about__bio animate anim-slide-right${bioVisible ? ' is-visible' : ''}`}
          >
            <p>
              I'm a Senior Software Engineer with deep expertise in AI systems architecture.
              I design and build intelligent applications — from LLM-powered agents and RAG pipelines
              to production-grade APIs and full-stack products.
            </p>
            <p>
              My focus is on bridging the gap between cutting-edge AI capabilities and
              real-world engineering: building systems that are reliable, maintainable,
              and actually solve the problem at hand.
            </p>
            <p>
              I've worked across the full stack, led cross-functional teams, and shipped
              products used by thousands of users. Currently open to interesting problems
              at the intersection of AI and product.
            </p>
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
