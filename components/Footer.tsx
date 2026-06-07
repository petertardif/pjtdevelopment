import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <Link href="/" className="logo"><span className="sq"></span>PJT Development</Link>
        <div className="foot-links">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/process">Process</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <span className="muted">© 2026 PJT Development — from ideas to apps.</span>
      </div>
    </footer>
  )
}
