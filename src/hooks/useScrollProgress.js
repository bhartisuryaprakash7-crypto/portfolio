import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [progress,       setProgress]       = useState(0)
  const [activeSection,  setActiveSection]  = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? window.scrollY / max : 0)

      const ids = ['hero','skills','projects','team','contact']
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= window.innerHeight * 0.45 && bottom >= window.innerHeight * 0.45) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { progress, activeSection }
}