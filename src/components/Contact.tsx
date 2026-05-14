import { useState, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { personal } from '../data/resume'
import { useInView } from '../hooks/useInView'
import './Contact.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { t } = useTranslation()
  const { ref: headRef, inView: headVisible } = useInView()
  const { ref: formRef, inView: formVisible } = useInView()

  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `From-Portfolio: ${form.subject}`,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`animate anim-fade-up${headVisible ? ' is-visible' : ''}`}
        >
          <p className="section-label">{t('contact.label')}</p>
          <h2 className="section-title">{t('contact.title')}</h2>
        </div>

        <div
          ref={formRef as React.RefObject<HTMLDivElement>}
          className={`contact__layout animate anim-fade-up${formVisible ? ' is-visible' : ''}`}
        >
          <div className="contact__info">
            <p className="contact__text">{t('contact.blurb')}</p>
            <a href={`mailto:${personal.email}`} className="contact__email">{personal.email}</a>
            <div className="contact__socials">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t('contact.nameLabel')}</label>
                <input id="name" name="name" type="text" placeholder={t('contact.namePlaceholder')} value={form.name} onChange={handleChange} required disabled={status === 'sending'} />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.emailLabel')}</label>
                <input id="email" name="email" type="email" placeholder={t('contact.emailPlaceholder')} value={form.email} onChange={handleChange} required disabled={status === 'sending'} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('contact.subjectLabel')}</label>
              <input id="subject" name="subject" type="text" placeholder={t('contact.subjectPlaceholder')} value={form.subject} onChange={handleChange} required disabled={status === 'sending'} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea id="message" name="message" rows={5} placeholder={t('contact.messagePlaceholder')} value={form.message} onChange={handleChange} required disabled={status === 'sending'} />
            </div>

            {status === 'success' && <p className="form-feedback form-feedback--success">{t('contact.successMsg')}</p>}
            {status === 'error' && <p className="form-feedback form-feedback--error">{t('contact.errorMsg')}</p>}

            <button type="submit" className={`btn btn--primary form-submit${status === 'sending' ? ' btn--loading' : ''}`} disabled={status === 'sending'}>
              {status === 'sending' ? t('contact.sendingBtn') : t('contact.submitBtn')}
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <span>{t('contact.builtBy')} {personal.name}</span>
        </div>
      </footer>
    </section>
  )
}
