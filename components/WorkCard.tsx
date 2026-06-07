'use client'
import { useState, useRef, type ReactNode } from 'react'

interface WorkCardProps {
  tag: string
  title: string
  placeholder: string
  children: ReactNode
}

export default function WorkCard({ tag, title, placeholder, children }: WorkCardProps) {
  const [open, setOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    const next = !open
    setOpen(next)
    if (moreRef.current) {
      moreRef.current.style.maxHeight = next ? `${moreRef.current.scrollHeight}px` : '0px'
    }
  }

  return (
    <article className={`work${open ? ' open' : ''}`}>
      <div className="cover"><div className="ph"><span>{placeholder}</span></div></div>
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      <div className="more" ref={moreRef} style={{ maxHeight: '0px' }}>
        {children}
      </div>
      <button className="toggle-link" onClick={toggle}>
        Read the story <span className="pm">+</span>
      </button>
    </article>
  )
}
