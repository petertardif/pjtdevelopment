'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav className="wrap">
        <Link href="/" className="logo">
          <img src="/logo/pjt-lockup-horizontal-light.svg" alt="PJT Development" className="logo-light" />
          <img src="/logo/pjt-lockup-horizontal-dark.svg" alt="PJT Development" className="logo-dark" />
        </Link>
        <div className="navlinks">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary">Book a call</Link>
          <button className="hamb" id="hamb" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Book a call</Link>
      </div>
    </header>
  )
}
