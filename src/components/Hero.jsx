import { useRef } from 'react'
import Reveal from './Reveal'
import CursorTrail from './CursorTrail'
import './Hero.css'

function Hero() {
  const cardRef = useRef(null)

  const handleTilt = (e) => {
    const card = cardRef.current
    if (!card || window.matchMedia('(pointer: coarse)').matches) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(900px) rotateX(${py * -6}deg) rotateY(${px * 8}deg) translateY(-2px)`
  }

  const resetTilt = () => {
    const card = cardRef.current
    if (card) card.style.transform = ''
  }

  return (
    <section id="top" className="hero">
      <CursorTrail />
      <div className="blob-field" aria-hidden="true">
        <span className="blob hero__blob hero__blob--pink" />
        <span className="blob hero__blob hero__blob--violet" />
        <span className="blob hero__blob hero__blob--green" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__chip hero__line hero__line--0 mono">
            <span className="hero__chip-dot" />
            peer connection · ready
          </span>
          <h1 className="hero__headline">
            <span className="hero__line hero__line--1">The desktop stays put.</span>
            <br />
            <span className="hero__line hero__line--2 hero__headline-accent">
              You don't <em className="accent-serif">have</em> to.
            </span>
          </h1>
          <p className="hero__sub hero__line hero__line--3">
            Nexadesk captures a Windows screen and streams it straight to your
            browser over WebRTC — a direct peer connection, not a relay
            server holding your session hostage. Move the cursor, click,
            watch it land.
          </p>
          <div className="hero__actions hero__line hero__line--4">
            <a className="btn btn--primary" href="#how-it-works">See how it connects</a>
            <a className="btn btn--ghost" href="#status">Current build status</a>
          </div>
        </div>

        <Reveal className="hero__demo" delay={120} as="div">
          <div
            className="demo"
            ref={cardRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            aria-hidden="true"
          >
            <div className="demo__frame demo__frame--client">
              <span className="demo__label mono">
                <span className="demo__label-dot demo__label-dot--cyan" />
                client · browser
              </span>
              <div className="demo__glass">
                <div className="demo__chrome">
                  <span className="demo__chrome-dot" />
                  <span className="demo__chrome-dot" />
                  <span className="demo__chrome-dot" />
                  <span className="demo__chrome-bar" />
                </div>
                <span className="demo__cursor-dot" />
              </div>
            </div>

            <div className="demo__frame demo__frame--host">
              <span className="demo__label mono">
                <span className="demo__label-dot demo__label-dot--amber" />
                host · windows
              </span>
              <div className="demo__glass">
                <div className="demo__chrome demo__chrome--host">
                  <span className="demo__chrome-dot" />
                  <span className="demo__chrome-dot" />
                  <span className="demo__chrome-dot" />
                </div>
                <div className="demo__host-body">
                  <span className="demo__click-ring" />
                  <div className="demo__ui-line" style={{ width: '70%' }} />
                  <div className="demo__ui-line" style={{ width: '45%' }} />
                  <div className="demo__ui-line" style={{ width: '58%' }} />
                </div>
              </div>
            </div>

            <svg className="demo__path" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M6,14 C 35,2 60,26 84,15" />
            </svg>

            <div className="demo__cursor">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <path d="M2 2 L19 9.5 L11.2 11.6 L9.5 19 Z" fill="var(--signal)" stroke="var(--ink)" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="demo__caption mono">one cursor, two machines</p>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
