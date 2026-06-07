'use client'
import { useState, type FormEvent, type ReactNode } from 'react'

interface ContactFormProps {
  children: ReactNode
}

export default function ContactForm({ children }: ContactFormProps) {
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState<'ok' | 'err' | ''>('')
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget))
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setDone(true)
      else throw new Error()
    } catch {
      setStatus('Something went wrong — email hello@pjtdevelopment.com instead.')
      setStatusType('err')
      setSending(false)
    }
  }

  if (done) {
    return (
      <div className="form-done reveal in">
        <h3>Thanks — message sent.</h3>
        <p>I&apos;ll get back to you within one business day. Talk soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
      {status && <div className={`form-status ${statusType}`}>{status}</div>}
      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? 'Sending…' : <>Request discovery call <span className="arrow">→</span></>}
      </button>
    </form>
  )
}
