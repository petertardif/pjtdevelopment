'use client'
import { useEffect } from 'react'

export default function ThemeToggle() {
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mq) return
    const onSys = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('pjt-theme')) return
      const root = document.documentElement
      root.classList.add('theming')
      root.setAttribute('data-theme', e.matches ? 'dark' : 'light')
      clearTimeout((window as any).__themeT)
      ;(window as any).__themeT = setTimeout(() => root.classList.remove('theming'), 560)
    }
    mq.addEventListener('change', onSys)
    return () => mq.removeEventListener('change', onSys)
  }, [])

  const handleClick = () => {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    root.classList.add('theming')
    root.setAttribute('data-theme', next)
    try { localStorage.setItem('pjt-theme', next) } catch {}
    clearTimeout((window as any).__themeT)
    ;(window as any).__themeT = setTimeout(() => root.classList.remove('theming'), 560)
  }

  return (
    <button className="toggle" onClick={handleClick} aria-label="Toggle dark mode" title="Toggle dark mode">
      <span className="knob">
        <svg className="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
        </svg>
        <svg className="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4.2"/>
          <path d="M12 1.5v2.5M12 20v2.5M3.5 12H1M23 12h-2.5M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19"/>
        </svg>
      </span>
    </button>
  )
}
