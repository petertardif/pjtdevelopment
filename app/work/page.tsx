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
            <WorkCard tag="Web app" title="Financial hub" placeholder="screenshot · booking" image="/images/one-stop-dashboard.png" imagePosition="20% center">
              <p>One Stop is a private, family-focused financial hub whose goal is to consolidate everything related to the family's financial life into a single trusted app: live account balances, investing, and a contingency guide for the partner.</p>
              <div className="stat"><div><b>100%</b><span>Financial Knowledge</span></div><div><b>24/7</b><span>self-serve</span></div></div>
            </WorkCard>
            <WorkCard tag="Full Stack Web App" title="Cabin Owner and HOA Administration" placeholder="screenshot · webapp" image="/images/cabin-app-login.png" imagePosition="85% center">
              <p>Cabin manages the administration of a small cabin community: site/lot records, owner accounts, the annual water bill, board/governance records, and day-to-day admin tasks and messaging.</p>
              <div className="stat"><div><b>95%</b><span>bill collection</span></div><div><b>1 day</b><span>to first draft</span></div></div>
            </WorkCard>
            {/* <WorkCard tag="Internal tool" title="Field-service scheduler" placeholder="screenshot · scheduler">
              <p>A local HVAC company was juggling jobs across whiteboards and group texts. I built a drag-and-drop scheduler that assigns techs and texts customers automatically.</p>
              <div className="stat"><div><b>8 hrs</b><span>saved / week</span></div><div><b>0</b><span>double-bookings</span></div></div>
            </WorkCard> */}
          </div>
          <div style={{ marginTop: '56px' }}>
            <Link href="/contact" className="btn btn-primary">Start your project <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
