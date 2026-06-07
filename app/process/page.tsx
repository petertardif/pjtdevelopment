import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Process — PJT Development' }

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="deco-grid"></div>
        <div className="deco-glow"></div>
        <div className="wrap">
          <span className="crumb">Process</span>
          <h1>No mystery. <span className="accent">Just a plan.</span></h1>
          <p className="lead">Hiring a developer can feel like handing money into a black box. Here&apos;s exactly how we&apos;ll work together, step by step, so you always know what&apos;s happening and what comes next.</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="sec">
        <div className="wrap">
          <div className="timeline reveal">
            <div className="tl-item">
              <div><div className="step-n">01</div><div className="when">Week 0 · free</div></div>
              <div><h3>We talk</h3></div>
              <div>
                <p>A relaxed, free call to understand your business, your goal, and your budget. No pressure and no obligation — if I&apos;m not the right fit, I&apos;ll tell you and point you somewhere better.</p>
                <ul><li>Understand the problem in your words</li><li>Talk through what&apos;s possible</li><li>Leave with a clear next step</li></ul>
              </div>
            </div>
            <div className="tl-item">
              <div><div className="step-n">02</div><div className="when">A few days later</div></div>
              <div><h3>Clear plan &amp; quote</h3></div>
              <div>
                <p>I write up exactly what I&apos;ll build, how long it&apos;ll take, and what it costs — in plain English. You approve it before a single line of code is written. No moving goalposts.</p>
                <ul><li>Written scope &amp; timeline</li><li>Fixed, transparent pricing</li><li>You sign off before we start</li></ul>
              </div>
            </div>
            <div className="tl-item">
              <div><div className="step-n">03</div><div className="when">Throughout the build</div></div>
              <div><h3>Build &amp; check in</h3></div>
              <div>
                <p>I build in the open. Every week or two you get a working demo and a plain-English update — so you see real progress, not radio silence. Change your mind on something? We adjust early, while it&apos;s cheap.</p>
                <ul><li>Regular demos you can click through</li><li>Updates without the jargon</li><li>Room to course-correct as we go</li></ul>
              </div>
            </div>
            <div className="tl-item">
              <div><div className="step-n">04</div><div className="when">Launch day</div></div>
              <div><h3>Launch &amp; train</h3></div>
              <div>
                <p>We ship it to the real world, test everything, and I sit down with you and your team so you actually know how to use it. You get documentation written for humans, not engineers.</p>
                <ul><li>Careful, tested launch</li><li>Hands-on training for your team</li><li>Plain-English documentation</li></ul>
              </div>
            </div>
            <div className="tl-item">
              <div><div className="step-n">05</div><div className="when">Ongoing</div></div>
              <div><h3>Support &amp; grow</h3></div>
              <div>
                <p>I don&apos;t disappear at launch. I&apos;m around for fixes, tweaks, and new features as your business grows. The same person who built it is the one who keeps it running.</p>
                <ul><li>Bug fixes &amp; small tweaks</li><li>New features as you scale</li><li>One point of contact — always me</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT FEELS LIKE */}
      <section className="sec nolast">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx">The difference</span>
            <h2>What working with me feels like.</h2>
            <p className="note">The teacher in me never left — I explain, I check for understanding, and I keep you in the loop.</p>
          </div>
          <div className="features reveal">
            <div className="feature"><div className="fk">01</div><h3>You&apos;re never lost</h3><p>Every update is in language that makes sense for your business. Ask &quot;why?&quot; as many times as you like.</p></div>
            <div className="feature"><div className="fk">02</div><h3>One person, accountable</h3><p>No account managers, no handoffs, no &quot;let me check with the team.&quot; You talk to the builder.</p></div>
            <div className="feature"><div className="fk">03</div><h3>No surprises</h3><p>Fixed scope and price up front. If something changes, you hear about it before it costs you.</p></div>
          </div>
          <div style={{ marginTop: '48px' }}>
            <Link href="/contact" className="btn btn-primary">Book a discovery call <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
