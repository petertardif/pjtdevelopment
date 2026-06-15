'use client'
import { useState } from 'react'
import { InlineWidget } from 'react-calendly'
import ContactForm from './ContactForm'

const CALENDLY_URL = 'https://calendly.com/peter-tardif/30min'

export default function BookingTabs({ children }: { children: React.ReactNode }) {
  const [tab, setTab] = useState<'book' | 'message'>('book')

  return (
    <div>
      <div className="tab-bar">
        <button className={tab === 'book' ? 'active' : ''} onClick={() => setTab('book')}>Book a call</button>
        <button className={tab === 'message' ? 'active' : ''} onClick={() => setTab('message')}>Send a message</button>
      </div>
      {tab === 'book' ? (
        <InlineWidget url={CALENDLY_URL} styles={{ height: '660px' }} />
      ) : (
        <>
          <ContactForm>{children}</ContactForm>
          <p style={{ color: 'var(--faint)', fontSize: '13px', marginTop: '2px' }}>No spam, ever. Your details only go to me.</p>
        </>
      )}
    </div>
  )
}
