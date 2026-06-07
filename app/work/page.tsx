import type { Metadata } from 'next'
import Link from 'next/link'
import WorkCard from '@/components/WorkCard'

export const metadata: Metadata = { title: 'Work — PJT Development' }

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="deco-grid"></div>
        <div className="deco-glow"></div>
        <div className="wrap">
          <span className="crumb">Work</span>
          <h1>Selected <span className="accent">projects.</span></h1>
          <p className="lead">A few things I&apos;ve built. Click any card to read the story behind it.</p>
        </div>
      </section>

      <section className="sec nolast">
        <div className="wrap">
          <div className="work-grid reveal">
            <WorkCard tag="Internal tool" title="Field-service scheduler" placeholder="screenshot · scheduler">
              <p>A local HVAC company was juggling jobs across whiteboards and group texts. I built a drag-and-drop scheduler that assigns techs and texts customers automatically.</p>
              <div className="stat"><div><b>8 hrs</b><span>saved / week</span></div><div><b>0</b><span>double-bookings</span></div></div>
            </WorkCard>
            <WorkCard tag="Web app" title="Booking &amp; payments app" placeholder="screenshot · booking">
              <p>A wellness studio needed clients to book and pay online without phone tag. I built a branded booking flow with Stripe payments, reminders, and an owner dashboard.</p>
              <div className="stat"><div><b>2×</b><span>online bookings</span></div><div><b>24/7</b><span>self-serve</span></div></div>
            </WorkCard>
            <WorkCard tag="AI integration" title="AI client-intake assistant" placeholder="screenshot · ai intake">
              <p>A small law office spent hours on intake paperwork. I built an AI assistant that interviews clients in plain language and fills the forms for review.</p>
              <div className="stat"><div><b>60%</b><span>faster intake</span></div><div><b>1 day</b><span>to first draft</span></div></div>
            </WorkCard>
          </div>
          <div style={{ marginTop: '56px' }}>
            <Link href="/contact" className="btn btn-primary">Start your project <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
