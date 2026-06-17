import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About — PJT Development' }

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="deco-grid"></div>
        <div className="deco-glow"></div>
        <div className="wrap">
          <span className="crumb">About</span>
          <h1>A classroom, <span className="accent">not a server room.</span></h1>
          <p className="lead">I&apos;m the developer behind PJT Development. Here&apos;s where I come from, and why it means you&apos;ll actually understand what you&apos;re paying for.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="sec">
        <div className="wrap about">
          <div className="pic reveal"><img src="/images/headshot1.jpeg" alt="Peter Tardif, founder of PJT Development" /></div>
          <div className="prose reveal">
            <p>I grew up in <strong>Buffalo, NY</strong>. My father worked in chemical plants and my mother raised four boys and a girl. Needless to say, I&apos;m scrappy — I know how to fight for the last cheeseburger at the dinner table, and that&apos;s what I&apos;ve brought to every job I&apos;ve ever had. It&apos;s what I&apos;ll bring to your project.</p>
            <p>My career began in education, as a <strong>teacher</strong>. I taught inner-city kids who didn&apos;t really care about school how to appreciate a good story and get their work done. Someone who you can do that, can explain anything to anyone.</p>
            <p>From there I moved into <strong>leadership</strong>, collaborating with principals, high-school and elementary teachers, district and college admin, data analysts and software developers, and state officials. I learned how to get very different people pulling in the same direction to accomplish goals.</p>
            <p>Today I work as a <strong>full-stack developer</strong>, building and maintaining real production software — modern apps in Vue and a Node/TypeScript API, alongside older systems that still need care. I know how to build it right, and I know how to keep it running.</p>
          </div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx">The path here</span>
            <h2>From the dinner table to the dev team.</h2>
            <p className="note">Every step taught me something I now use on your project.</p>
          </div>
          <div className="timeline reveal">
            <div className="tl-item">
              <div><div className="step-n">↑</div><div className="when">Buffalo, NY</div></div>
              <div><h3>Scrappy roots</h3></div>
              <div><p>A big, loud, hard-working household where nothing was handed to you. I learned to show up, work hard, and figure it out — the same energy I bring to every build.</p></div>
            </div>
            <div className="tl-item">
              <div><div className="step-n">A</div><div className="when">The classroom</div></div>
              <div><h3>Teacher</h3></div>
              <div><p>Years spent making hard things make sense to people who&apos;d checked out. That&apos;s still my superpower: I can take something technical and explain it so it actually clicks for you.</p></div>
            </div>
            <div className="tl-item">
              <div><div className="step-n">B</div><div className="when">Education leadership</div></div>
              <div><h3>Leader &amp; collaborator</h3></div>
              <div><p>Working across teachers, admins, developers, and officials taught me how to listen, manage, take a back seat when it helps, and lead when it counts. I read the room before I write the code.</p></div>
            </div>
            <div className="tl-item">
              <div><div className="step-n">{'{ }'}</div><div className="when">Today</div></div>
              <div><h3>Full-stack developer</h3></div>
              <div><p>Shipping and maintaining production software every day — modern front-ends, typed APIs, and the unglamorous legacy code that keeps real businesses running. I&apos;ve seen what lasts and what breaks.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS MEANS FOR YOU */}
      <section className="sec nolast">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx">What it means for you</span>
            <h2>You get a builder who also speaks human.</h2>
          </div>
          <div className="features reveal">
            <div className="feature"><div className="fk">01</div><h3>I know how to teach</h3><p>You&apos;ll understand your own software. I&apos;ll never make you feel silly for asking a question.</p></div>
            <div className="feature"><div className="fk">02</div><h3>I know how to listen</h3><p>I get the problem before I propose a solution. Often the real need isn&apos;t the one you started with.</p></div>
            <div className="feature"><div className="fk">03</div><h3>I know how to ship</h3><p>Real production experience means I build things that work on launch day — and keep working after.</p></div>
          </div>
          <blockquote style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.25, maxWidth: '20ch', borderLeft: '3px solid var(--accent)', paddingLeft: '24px', marginTop: '56px' }}>
            I know how to learn, teach, listen, and lead. That&apos;s why I&apos;m the right choice for your business.
          </blockquote>
          <div style={{ marginTop: '44px' }}>
            <Link href="/contact" className="btn btn-primary">Let&apos;s talk about your idea <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
