import type { Metadata } from 'next'
import BookingTabs from '@/components/BookingTabs'

export const metadata: Metadata = { title: 'Contact — PJT Development' }

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="deco-grid"></div>
        <div className="deco-glow"></div>
        <div className="wrap">
          <span className="crumb">Contact</span>
          <h1>Let&apos;s build <span className="accent">your idea.</span></h1>
          <p className="lead">Book a time directly or send a message — either way, I&apos;ll get back to you within one business day.</p>
        </div>
      </section>

      {/* BOOKING / FORM */}
      <section className="sec">
        <div className="wrap cta-grid" style={{ alignItems: 'start' }}>
          <div className="reveal">
            <span className="idx">Two ways to get started</span>
            <p style={{ marginTop: '12px', color: 'var(--muted)', fontSize: '15.5px', marginBottom: '28px' }}>Pick whichever feels right. Either path gets you to the same place.</p>
            <ol style={{ listStyle: 'none', counterReset: 's', display: 'flex', flexDirection: 'column', gap: '26px' }}>
              <li style={{ counterIncrement: 's', display: 'flex', gap: '18px' }}>
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--accent)', fontSize: '22px', minWidth: '34px' }}>01</span>
                <div><h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '5px' }}>You reach out</h3><p style={{ color: 'var(--muted)', fontSize: '15.5px' }}>Book a slot that works for you, or drop me a message. No wrong answer.</p></div>
              </li>
              <li style={{ counterIncrement: 's', display: 'flex', gap: '18px' }}>
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--accent)', fontSize: '22px', minWidth: '34px' }}>02</span>
                <div><h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '5px' }}>We talk through your idea</h3><p style={{ color: 'var(--muted)', fontSize: '15.5px' }}>A free 30-minute call or a quick email exchange. I&apos;ll get to know what you&apos;re building and give you honest feedback on what&apos;s possible.</p></div>
              </li>
              <li style={{ counterIncrement: 's', display: 'flex', gap: '18px' }}>
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--accent)', fontSize: '22px', minWidth: '34px' }}>03</span>
                <div><h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '5px' }}>You get a clear next step</h3><p style={{ color: 'var(--muted)', fontSize: '15.5px' }}>Whether or not you hire me, you&apos;ll leave knowing what&apos;s possible and what it&apos;d take to build it.</p></div>
              </li>
            </ol>
          </div>

          <div className="reveal">
            <BookingTabs>
              <div className="row2">
                <div className="field"><label>Your name</label><input type="text" name="name" placeholder="Jane Smith" required /></div>
                <div className="field"><label>Business</label><input type="text" name="business" placeholder="Smith &amp; Co." /></div>
              </div>
              <div className="field"><label>Email</label><input type="email" name="email" placeholder="jane@smithco.com" required /></div>
              <div className="field"><label>Phone (optional)</label><input type="tel" name="phone" placeholder="(716) 555-0123" /></div>
              <div className="field">
                <label>What kind of project?</label>
                <select name="project_type">
                  <option>Not sure yet — let&apos;s talk</option>
                  <option>Custom software / internal tool</option>
                  <option>Full-stack web app</option>
                  <option>Mobile app</option>
                  <option>AI integration</option>
                  <option>Scripting / automation</option>
                  <option>Google Workspace</option>
                </select>
              </div>
              <div className="field"><label>What do you want to build?</label><textarea rows={3} name="project" placeholder="Imagine if my team could… / I want to give customers a way to…" required></textarea></div>
            </BookingTabs>
          </div>
        </div>
      </section>

    </>
  )
}
