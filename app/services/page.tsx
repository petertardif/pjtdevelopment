import type { Metadata } from 'next'
import Link from 'next/link'
import FaqItem from '@/components/FaqItem'

export const metadata: Metadata = { title: 'Services — PJT Development' }

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="deco-grid"></div>
        <div className="deco-glow"></div>
        <div className="wrap">
          <span className="crumb">Services</span>
          <h1>Whatever you need built, <span className="accent">I can build it.</span></h1>
          <p className="lead">One developer covering the whole stack — so your idea ships as one coherent thing, with one person accountable for all of it.</p>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="sec">
        <div className="wrap">
          <div className="svc-cards">
            <div className="svc-card reveal">
              <div className="k">01</div>
              <h3>Custom Software &amp; Tools</h3>
              <p>Internal tools that replace the spreadsheets, sticky notes, and manual work slowing your team down.</p>
              <ul className="checklist">
                <li>Admin dashboards &amp; internal portals</li>
                <li>Inventory, CRM &amp; scheduling tools</li>
                <li>Role-based access for your team</li>
                <li>Reporting that pulls your data together</li>
              </ul>
            </div>
            <div className="svc-card reveal">
              <div className="k">02</div>
              <h3>Full-Stack Web Apps</h3>
              <p>Customer-facing applications designed and built end to end — front to back, nothing outsourced.</p>
              <ul className="checklist">
                <li>Responsive web apps &amp; customer portals</li>
                <li>Secure login &amp; user accounts</li>
                <li>Online payments &amp; subscriptions</li>
                <li>Integrations with the tools you already use</li>
              </ul>
            </div>
            <div className="svc-card reveal">
              <div className="k">03</div>
              <h3>Mobile Apps</h3>
              <p>iOS and Android apps that put your business in your customers&apos; pockets.</p>
              <ul className="checklist">
                <li>Native-feel apps for iPhone &amp; Android</li>
                <li>Push notifications &amp; reminders</li>
                <li>Works offline when the signal drops</li>
                <li>App Store &amp; Play Store submission</li>
              </ul>
            </div>
            <div className="svc-card reveal">
              <div className="k">04</div>
              <h3>AI Integration</h3>
              <p>Practical AI wired into how you already work — not hype, just things that save you time.</p>
              <ul className="checklist">
                <li>Chat assistants for customers or staff</li>
                <li>Document reading &amp; data extraction</li>
                <li>Smart search across your content</li>
                <li>AI-assisted workflows &amp; drafting</li>
              </ul>
            </div>
            <div className="svc-card reveal">
              <div className="k">05</div>
              <h3>Scripting &amp; Automation</h3>
              <p>Stop doing the repetitive stuff by hand. I script it once so it runs itself, every time.</p>
              <ul className="checklist">
                <li>Data migration &amp; clean-up</li>
                <li>Scheduled jobs &amp; auto-generated reports</li>
                <li>API integrations between systems</li>
                <li>Bulk tasks that used to eat your day</li>
              </ul>
            </div>
            <div className="svc-card reveal">
              <div className="k">06</div>
              <h3>Google Workspace</h3>
              <p>Sheets, Apps Script, and Workspace integrations tailored to exactly how your business runs.</p>
              <ul className="checklist">
                <li>Custom Google Sheets tools &amp; functions</li>
                <li>Gmail, Drive &amp; Calendar automation</li>
                <li>Google Forms → workflow pipelines</li>
                <li>Connecting Workspace to your other apps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx">Investment</span>
            <h2>Three ways to work together.</h2>
            <p className="note">Every project starts with a free call. You&apos;ll get a written quote — with scope, timeline, and price — before any work begins.</p>
          </div>
          <div className="svc-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="svc-card reveal">
              <div className="k">01</div>
              <h3>Quick Win</h3>
              <p>You have one thing that&apos;s eating time. I fix it fast — a script, a Google Sheets tool, a Zapier-killer, a simple dashboard. Scoped tight, priced tight, delivered in days or weeks.</p>
              <ul className="checklist">
                <li>Scripting &amp; automation</li>
                <li>Google Workspace tools</li>
                <li>Small admin dashboards</li>
                <li>One-off integrations</li>
              </ul>
            </div>
            <div className="svc-card reveal">
              <div className="k">02</div>
              <h3>Build</h3>
              <p>You need something built properly, end to end. I scope it, quote it, build it in the open with regular demos, and hand it off with training you&apos;ll actually use.</p>
              <ul className="checklist">
                <li>Internal tools &amp; portals</li>
                <li>Full-stack web apps</li>
                <li>Mobile apps</li>
                <li>AI integrations</li>
              </ul>
            </div>
            <div className="svc-card reveal">
              <div className="k">03</div>
              <h3>Scale</h3>
              <p>You launched. Now you want the same person keeping it running, potentially adding features, and growing it with you. No account managers, no handoffs — one developer, consistent and accountable.</p>
              <ul className="checklist">
                <li>New features as you grow</li>
                <li>Bug fixes &amp; small tweaks</li>
                <li>One point of contact, always me</li>
                <li>Priority turnaround</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx">Common questions</span>
            <h2>Before you reach out.</h2>
          </div>
          <div className="faq reveal">
            <FaqItem
              question="How much does a project cost?"
              answer="It depends on what you need, but you'll always get a fixed, written quote before any work starts — no surprises. After our call I can give you a realistic ballpark quickly."
            />
            <FaqItem
              question="How long does it take?"
              answer="Small tools and automations can take a couple of weeks; larger apps take longer. I'll give you an honest timeline as part of the written plan, and you'll see working demos along the way."
            />
          </div>
        </div>
      </section>

      {/* NOT SURE */}
      <section className="sec nolast">
        <div className="wrap">
          <div className="about reveal">
            <div>
              <span className="idx">Not sure what you need?</span>
              <h2>That&apos;s exactly what the discovery call is for.</h2>
              <p>Plenty of clients come to me with a problem, not a spec — &quot;my team wastes hours on X,&quot; or &quot;I wish customers could just do Y themselves.&quot; You don&apos;t need to know the technical answer. That&apos;s my job.</p>
              <p>We&apos;ll talk through what you&apos;re trying to fix, I&apos;ll tell you honestly what&apos;s possible and what it&apos;d take, and you&apos;ll leave the call with a clear next step — whether or not you hire me.</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '6px' }}>Book a discovery call <span className="arrow">→</span></Link>
            </div>
            <div className="pic">
              <img className="photo-light" src="/images/services-light-alvaro-bernal-QPRd_UC3nE4-unsplash.jpg" alt="Two people planning on a whiteboard" />
              <img className="photo-dark" src="/images/services-dark-alvaro-reyes-zvmZiw3vdsQ-unsplash.jpg" alt="Planning session in a dark office" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
