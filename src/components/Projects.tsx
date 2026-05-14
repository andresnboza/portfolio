import { useState, useCallback } from 'react'
import { projects, Project } from '../data/resume'
import { useInView } from '../hooks/useInView'
import ProjectModal from './ProjectModal'
import './Projects.css'

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

interface CardProps {
  project: Project
  onClick: (p: Project) => void
  small?: boolean
}

function ProjectCard({ project: p, onClick, small }: CardProps) {
  return (
    <div
      className={`project-card${small ? ' project-card--small' : ' project-card--featured'}`}
      onClick={() => onClick(p)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(p)}
    >
      <div className="project-card__header">
        <h3 className="project-card__name">{p.name}</h3>
        <div className="project-card__links" onClick={e => e.stopPropagation()}>
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live site">
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
      <p className="project-card__desc">{p.description}</p>
      <div className="project-card__footer">
        <div className="project-card__tech">
          {p.tech.slice(0, 4).map(t => (
            <span key={t} className="skill-tag">{t}</span>
          ))}
          {p.tech.length > 4 && (
            <span className="skill-tag skill-tag--more">+{p.tech.length - 4}</span>
          )}
        </div>
        <span className="project-card__cta">
          Details <ArrowIcon />
        </span>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref: headRef, inView: headVisible } = useInView()
  const { ref: featRef, inView: featVisible } = useInView()
  const { ref: otherRef, inView: otherVisible } = useInView()

  const [selected, setSelected] = useState<Project | null>(null)
  const handleClose = useCallback(() => setSelected(null), [])

  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <>
      <section id="projects">
        <div className="container">
          <div
            ref={headRef as React.RefObject<HTMLDivElement>}
            className={`animate anim-fade-up${headVisible ? ' is-visible' : ''}`}
          >
            <p className="section-label">Projects</p>
            <h2 className="section-title">Things I've built and helped transform</h2>
          </div>

          <div
            ref={featRef as React.RefObject<HTMLDivElement>}
            className={`projects__featured stagger-children${featVisible ? ' is-visible' : ''}`}
          >
            {featured.map((p, i) => (
              <ProjectCard key={i} project={p} onClick={setSelected} />
            ))}
          </div>

          {others.length > 0 && (
            <div
              ref={otherRef as React.RefObject<HTMLDivElement>}
              className={`projects__others stagger-children${otherVisible ? ' is-visible' : ''}`}
            >
              <p className="projects__others-label">Other projects</p>
              <div className="projects__others-grid">
                {others.map((p, i) => (
                  <ProjectCard key={i} project={p} onClick={setSelected} small />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ProjectModal project={selected} onClose={handleClose} />
    </>
  )
}
