'use client'
import { useState, useRef } from 'react'

interface FaqItemProps {
  question: string
  answer: string
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false)
  const answerRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    const next = !open
    setOpen(next)
    if (answerRef.current) {
      answerRef.current.style.maxHeight = next ? `${answerRef.current.scrollHeight}px` : '0px'
    }
  }

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-q" onClick={toggle}>
        {question} <span className="pm">+</span>
      </div>
      <div className="faq-a" ref={answerRef} style={{ maxHeight: '0px' }}>
        <p>{answer}</p>
      </div>
    </div>
  )
}
