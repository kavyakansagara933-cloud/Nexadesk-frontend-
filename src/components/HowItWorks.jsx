import Reveal from './Reveal'
import './HowItWorks.css'

const STEPS = [
  {
    n: '01',
    tint: 'cyan',
    title: 'The host captures its own screen',
    body: "On the Windows machine, the Electron host app grabs the display through desktopCapturer — no third-party recording driver, just what the OS already exposes.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="3" width="14" height="9.5" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.5 15.5h5M9 12.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '02',
    tint: 'pink',
    title: 'The frame goes straight to your browser',
    body: 'That capture is streamed over WebRTC as a direct peer-to-peer connection. A small Node.js signaling server only helps the two sides find each other — it never sees the video.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="4" cy="9" r="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14" cy="9" r="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.3 8.1 L11.7 5.4M6.3 9.9 L11.7 12.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '03',
    tint: 'amber',
    title: 'Your input travels back the same way',
    body: 'A WebRTC data channel carries mouse movement and clicks from your browser back to the host, alongside the video, on the same connection.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2 L9 12M9 12 L5.5 8.5M9 12 L12.5 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 15.5h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '04',
    tint: 'violet',
    title: 'The host acts on your behalf',
    body: "nut-js turns those events into real OS-level input on the Windows machine — the cursor you see move is the cursor actually moving.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 2.5 L15 8 L9.2 9.7 L7.4 15.5 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="section-kicker mono">section · 03</span>
          <h2>How the connection actually works</h2>
          <p>Four hops, one round trip. Here's what happens between your click and the cursor landing on a screen you're not sitting in front of.</p>
        </Reveal>

        <Reveal className="arch-overview" as="div">
          <div className="arch-overview__row">
            <div className="arch-overview__node">
              <span className="arch-overview__dot arch-overview__dot--cyan" />
              <span className="mono">your browser</span>
            </div>
            <div className="arch-overview__link">
              <span className="arch-overview__link-line" />
              <span className="mono arch-overview__link-label">signaling</span>
              <span className="arch-overview__link-line" />
            </div>
            <div className="arch-overview__node">
              <span className="arch-overview__dot arch-overview__dot--amber" />
              <span className="mono">host desktop</span>
            </div>
          </div>
          <p className="arch-overview__caption">
            In plain terms: your browser and the host find each other through a small
            signaling server, then talk to each other directly. Video flows one way,
            your clicks flow the other — the signaling server isn't involved in either.
          </p>
        </Reveal>

        <span className="arch-overview__detail-label mono">the detailed version</span>

        <ol className="steps">
          {STEPS.map((step, i) => (
            <Reveal as="li" className="steps__item" key={step.n} delay={i * 70}>
              <div className={`steps__marker steps__marker--${step.tint}`}>
                <span className="steps__icon">{step.icon}</span>
              </div>
              <div className="steps__content">
                <span className="steps__n mono">{step.n}</span>
                <h3 className="steps__title">{step.title}</h3>
                <p className="steps__body">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
