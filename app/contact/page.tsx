import type { Metadata } from 'next'
import FaqItem from '@/components/FaqItem'
import ContactForm from '@/components/ContactForm'

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
          <p className="lead">Tell me a little about what you&apos;re trying to do. I&apos;ll reply within one business day — even if it&apos;s just to point you in the right direction.</p>
        </div>
      </section>

      {/* FORM */}
      <section className="sec">
        <div className="wrap cta-grid" style={{ alignItems: 'start' }}>
          <div className="reveal">
            <span className="idx">What happens next</span>
            <ol style={{ listStyle: 'none', counterReset: 's', marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '26px' }}>
              <li style={{ counterIncrement: 's', display: 'flex', gap: '18px' }}>
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--accent)', fontSize: '22px', minWidth: '34px' }}>01</span>
                <div><h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '5px' }}>You send this form</h3><p style={{ color: 'var(--muted)', fontSize: '15.5px' }}>Just the basics — no long brief required. A sentence or two is plenty to start.</p></div>
              </li>
              <li style={{ counterIncrement: 's', display: 'flex', gap: '18px' }}>
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--accent)', fontSize: '22px', minWidth: '34px' }}>02</span>
                <div><h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '5px' }}>I reply within a day</h3><p style={{ color: 'var(--muted)', fontSize: '15.5px' }}>We&apos;ll find a time for a free, no-pressure 30-minute discovery call.</p></div>
              </li>
              <li style={{ counterIncrement: 's', display: 'flex', gap: '18px' }}>
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--accent)', fontSize: '22px', minWidth: '34px' }}>03</span>
                <div><h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '5px' }}>You get a clear next step</h3><p style={{ color: 'var(--muted)', fontSize: '15.5px' }}>Whether or not you hire me, you&apos;ll leave knowing what&apos;s possible and what it&apos;d take.</p></div>
              </li>
            </ol>
            <p style={{ marginTop: '34px', color: 'var(--muted)', fontSize: '15.5px' }}>Prefer email? Reach me directly at<br /><a href="mailto:hello@pjtdevelopment.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>hello@pjtdevelopment.com</a></p>
          </div>

          <div className="reveal">
            <ContactForm>
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
              <div className="field"><label>What do you want to build?</label><textarea rows={3} name="project" placeholder="We waste hours every week on… / I wish customers could just…"></textarea></div>
            </ContactForm>
            <p style={{ color: 'var(--faint)', fontSize: '13px', marginTop: '2px' }}>No spam, ever. Your details only go to me.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec nolast">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx">Before you ask</span>
            <h2>Common questions.</h2>
          </div>
          <div className="faq reveal">
            <FaqItem
              question="Do I need to know what I want built?"
              answer="Not at all. Most clients come with a problem, not a spec — 'my team wastes hours on X.' Figuring out the right solution is my job, and that's exactly what the discovery call is for."
            />
            <FaqItem
              question="How much does a project cost?"
              answer="It depends on what you need, but you'll always get a fixed, written quote before any work starts — no surprises. After our call I can give you a realistic ballpark quickly."
            />
            <FaqItem
              question="How long does it take?"
              answer="Small tools and automations can take a couple of weeks; larger apps take longer. I'll give you an honest timeline as part of the written plan, and you'll see working demos along the way."
            />
            <FaqItem
              question="Will I be able to understand what's going on?"
              answer="Yes — that's the whole point of PJT. I came from teaching, so I explain everything in plain English and check that it actually makes sense to you. Ask 'why?' as often as you like."
            />
            <FaqItem
              question="What happens after launch?"
              answer="I don't disappear. I'm available for fixes, tweaks, and new features as your business grows — and the same person who built it is the one who supports it."
            />
          </div>
        </div>
      </section>
    </>
  )
}
