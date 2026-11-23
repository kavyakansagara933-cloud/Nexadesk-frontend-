import Reveal from './Reveal'
import { handleSpotlightMove } from '../lib/spotlight'
import './Status.css'

const WORKING = [
  'Device pairing between host and client',
  'Offer/answer exchange and ICE negotiation',
  'Live screen streaming, glass to glass',
  'Remote cursor movement',
  'Remote left-click',
]

const IN_PROGRESS = [
  'Right-click and double-click',
  'Scroll input',
  'Keyboard input',
  'Native Android client (replacing the browser test client)',
]

function Status() {
  return (
    <section id="status" className="status">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="section-kicker mono">section · 04</span>
          <h2>What's actually working right now</h2>
          <p>Nexadesk is a project in active, irregular progress. This is the real state of it, not a roadmap dressed up as a feature list.</p>
        </Reveal>

        <div className="status__grid">
          <Reveal className="status__panel accent-top spotlight status__panel--live" as="div" onMouseMove={handleSpotlightMove}>
            <h3 className="status__group-title">
              <span className="status__dot status__dot--live" />
              Working end to end
            </h3>
            <ul className="status__list">
              {WORKING.map((item) => (
                <li key={item}>
                  <svg className="status__icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7.2 L5.6 10.3 L11.5 3.8" stroke="var(--connected)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="status__panel accent-top spotlight" as="div" delay={90} onMouseMove={handleSpotlightMove}>
            <h3 className="status__group-title">
              <span className="status__dot status__dot--pending" />
              Not built yet
            </h3>
            <ul className="status__list status__list--pending">
              {IN_PROGRESS.map((item) => (
                <li key={item}>
                  <span className="status__icon status__icon--ring" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Status
