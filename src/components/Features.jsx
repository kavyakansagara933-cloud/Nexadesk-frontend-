import Reveal from './Reveal'
import { handleSpotlightMove } from '../lib/spotlight'
import './Features.css'

const FEATURES = [
  {
    tint: 'pink',
    title: 'Peer-to-peer, not relayed',
    body: 'Video goes straight from the host to your browser over WebRTC. The signaling server helps both sides find each other, then gets out of the way — it never touches your screen data.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="5" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 10h5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 2" />
      </svg>
    ),
  },
  {
    tint: 'violet',
    title: 'One connection, both ways',
    body: "The same peer connection that streams the screen out carries your mouse input back in, over a WebRTC data channel — no second server, no separate control protocol to keep in sync.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 7.5 L16 7.5 M13 4.5 L16 7.5 L13 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 13 L4 13 M7 10 L4 13 L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tint: 'cyan',
    title: 'No drivers to install',
    body: "Capture runs through Electron's desktopCapturer and input lands through nut-js — both talking to what Windows already exposes, not a custom kernel-level recorder.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3.5" width="14" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 16.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="8.5" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
]

function Features() {
  return (
    <section className="features">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="section-kicker mono">section · 02</span>
          <h2>Why it's built this way</h2>
          <p>A few deliberate choices in how Nexadesk moves data around — built <em className="accent-serif">without</em> shortcuts, and without a relay server pretending to be optional.</p>
        </Reveal>

        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <Reveal
              className={`feature-card accent-top spotlight feature-card--${f.tint}`}
              key={f.title}
              delay={i * 90}
              as="div"
              onMouseMove={handleSpotlightMove}
            >
              <span className="feature-card__icon">{f.icon}</span>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__body">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
