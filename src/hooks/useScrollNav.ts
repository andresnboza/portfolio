import { useNavigate, useLocation } from 'react-router-dom'

const NAV_HEIGHT = 72

export function useScrollNav() {
  const navigate = useNavigate()
  const location = useLocation()

  function scrollToSection(id: string) {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
    } else {
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return scrollToSection
}
