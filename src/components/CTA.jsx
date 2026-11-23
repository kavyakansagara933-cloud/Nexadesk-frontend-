import { useState } from 'react'
import Reveal from './Reveal'
import { GITHUB_URL } from '../siteConfig'
import './CTA.css'

const CLONE_CMD = 'git clone ' + GITHUB_URL.replace(/\/$/, '') + '/nexadesk-frontend.git'

function CTA() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CLONE_CMD)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard API unavailable — fail silently, the text is still selectable
    }
  }

  return (
    <section id="source" className="cta">
      <Reveal className="container cta__box" as="div">
        <div className="blob-field" aria-hidden="true">
          <span className="blob cta__blob cta__blob--pink" />
          <span className="blob cta__blob cta__blob--violet" />
        </div>
        <div className="cta__text">
          <h2 className="cta__title">Built in the open, one milestone at a time</h2>
          <p className="cta__sub">
            The host app, signaling server, and control pipeline are all real,
            running code — not a mockup. Read through it, or follow along as
            the Android client gets built.
          </p>

          <div className="clone-box mono">
            <span className="clone-box__prompt">$</span>
            <span className="clone-box__cmd">{CLONE_CMD}</span>
            <button className="clone-box__copy" onClick={handleCopy} aria-label="Copy clone command">
              {copied ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.2 L5.6 10.3 L11.5 3.8" stroke="var(--connected)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="4.5" y="4.5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M2.5 9.5V2.5a1 1 0 0 1 1-1h7" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="hero__actions cta__actions">
          <a className="btn btn--primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
            Browse the code
          </a>
          <a className="btn btn--ghost" href="#status">Read the status log</a>
        </div>
      </Reveal>
    </section>
  )
}

export default CTA
