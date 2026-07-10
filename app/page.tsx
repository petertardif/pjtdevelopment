import type { Metadata } from 'next'
import Link from 'next/link'
import WorkCard from '@/components/WorkCard'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = { title: 'PJT Development — From ideas to apps' }

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="deco-grid"></div>
        <div className="deco-glow"></div>
        <div className="wrap">
          <div className="toprow">
            <span className="eyebrow">Software Development Consultancy</span>
            <span className="meta">Denver, CO · Available worldwide</span>
          </div>
          <h1>From ideas <br />to <span className="accent">apps.</span></h1>
          <div className="below">
            <p>Custom software, built and shipped by one developer who explains every step in plain English. No agency overhead. No handoffs. No jargon.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Book a discovery call <span className="arrow">→</span></Link>
              <Link href="/process" className="btn btn-ghost">How I work</Link>
            </div>
          </div>
          <div className="hero-img reveal">
            <img className="photo-light" src="/images/hero-workspace-light-jexo-tj7Bj_743JA-unsplash.jpg" alt="Developer working at a laptop in a bright workspace" />
            <img className="photo-dark" src="/images/hero-workspace-dark-charlesdeluvio-pjAH2Ax4uWk-unsplash.jpg" alt="Developer working at a laptop in a dark workspace" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx">01 — Services</span>
            <h2>Whatever you need built.</h2>
            <div className="note">One person covering the whole stack, so your idea ships as one cohesive app.<br /><Link href="/services" className="more-link">All services <span className="arrow">→</span></Link></div>
          </div>
          <div className="svc-list reveal">
            <div className="svc"><span className="n">01</span><h3>Custom Software &amp; Tools</h3><p>Internal tools that replace the spreadsheets and manual work slowing your team down.</p><span className="go">→</span></div>
            <div className="svc"><span className="n">02</span><h3>Full-Stack Web Apps</h3><p>Customer portals, dashboards, and applications designed and built end to end.</p><span className="go">→</span></div>
            <div className="svc"><span className="n">03</span><h3>Mobile Apps</h3><p>iOS and Android apps that put your business in your customers' pockets.</p><span className="go">→</span></div>
            <div className="svc"><span className="n">04</span><h3>AI Integration</h3><p>Practical AI assistants, automation, and smart features wired into your workflow.</p><span className="go">→</span></div>
            <div className="svc"><span className="n">05</span><h3>Scripting &amp; Automation</h3><p>Stop doing the repetitive work by hand. I script it so it runs itself.</p><span className="go">→</span></div>
            <div className="svc"><span className="n">06</span><h3>Google Workspace</h3><p>Sheets, Apps Script, and Workspace integrations tailored to how you work.</p><span className="go">→</span></div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx">02 — Work</span>
            <h2>Selected projects.</h2>
            <p className="note">Click any project to read the story behind it.</p>
          </div>
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
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec" id="process">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx">03 — Process</span>
            <h2>How we work together.</h2>
            <div className="note">No mystery. You always know what&apos;s happening and what&apos;s next.<br /><Link href="/process" className="more-link">The full process <span className="arrow">→</span></Link></div>
          </div>
          <div className="proc reveal">
            <div className="step"><div className="big">01</div><h3>We talk</h3><p>A free call to understand your business, your goal, and whether I&apos;m the right fit.</p></div>
            <div className="step"><div className="big">02</div><h3>Plan &amp; quote</h3><p>A written scope, timeline, and fixed price. No surprises later on.</p></div>
            <div className="step"><div className="big">03</div><h3>Build &amp; check in</h3><p>Regular demos and plain-English updates. You see progress, not silence.</p></div>
            <div className="step"><div className="big">04</div><h3>Launch &amp; support</h3><p>We ship it, I train you, and I stick around to keep it running.</p></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec" id="about">
        <div className="wrap about reveal">
          <div className="pic"><img src="/images/headshot1.jpeg" alt="Peter Tardif, founder of PJT Development" /></div>
          <div>
            <span className="idx">04 — About</span>
            <h2>A classroom, not a server room.</h2>
            <p>I grew up scrappy in Buffalo, NY, and started my career teaching inner-city kids who didn&apos;t care about school how to care about a good story. That taught me how to listen, explain hard things simply, and get the work done.</p>
            <p>Today I&apos;m a full-stack developer building real production software. You get both halves: the engineering to build it right, and the plain spoken communication to keep you in the loop the whole way.</p>
            <blockquote>You get a builder who also speaks human.</blockquote>
            <Link href="/about" className="more-link">My story <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="wrap cta-grid">
          <div className="reveal">
            <span className="idx">05 — Contact</span>
            <h2 style={{ marginTop: '16px' }}>Let&apos;s build it.</h2>
            <p className="sub">Tell me about your idea and I&apos;ll reply within one business day — even if it&apos;s just to point you in the right direction.</p>
          </div>
          <div className="reveal">
            <ContactForm>
              <div className="row2">
                <div className="field"><label>Your name</label><input type="text" name="name" placeholder="Jane Smith" required /></div>
                <div className="field"><label>Business</label><input type="text" name="business" placeholder="Smith &amp; Co." /></div>
              </div>
              <div className="field"><label>Email</label><input type="email" name="email" placeholder="jane@smithco.com" required /></div>
              <div className="field"><label>What do you want to build?</label><textarea rows={2} name="project" placeholder="My customers should be able to…" required></textarea></div>
            </ContactForm>
          </div>
        </div>
      </section>
    </>
  )
}
