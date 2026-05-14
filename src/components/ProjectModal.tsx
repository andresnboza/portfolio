import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../data/resume'
import './ProjectModal.css'

interface Props {
  project: Project | null
  onClose: () => void
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function ProjectModal({ project, onClose }: Props) {
  const { t } = useTranslation()
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!project) return null

  const longDescription = t(`projects.items.${project.i18nKey}.longDescription`)
  const highlights = t(`projects.items.${project.i18nKey}.highlights`, { returnObjects: true }) as string[]

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()} role="dialog" aria-modal>
      <div className="modal" ref={modalRef}>
        <div className="modal__accent-bar" />

        <button className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal__body">
          <div className="modal__header">
            <h2 className="modal__title">{project.name}</h2>
            <div className="modal__header-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal__link">
                  <GithubIcon /> {t('projects.sourceBtn')}
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="modal__link modal__link--primary">
                  <ExternalIcon /> {t('projects.liveBtn')}
                </a>
              )}
            </div>
          </div>

          <p className="modal__desc">{longDescription}</p>

          {Array.isArray(highlights) && highlights.length > 0 && (
            <div className="modal__section">
              <h3 className="modal__section-title">{t('projects.keyHighlights')}</h3>
              <ul className="modal__highlights">
                {highlights.map((h, i) => (
                  <li key={i} style={{ animationDelay: `${0.18 + i * 0.07}s` }}>
                    <span className="modal__bullet" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal__section">
            <h3 className="modal__section-title">{t('projects.techStack')}</h3>
            <div className="modal__tech">
              {project.tech.map((tech, i) => (
                <span key={tech} className="modal__tech-tag" style={{ animationDelay: `${0.22 + i * 0.05}s` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
