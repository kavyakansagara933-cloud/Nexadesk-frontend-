import './SpecStrip.css'

const SPECS = [
  { label: 'transport', value: 'WebRTC · P2P media + data channel', tint: 'pink' },
  { label: 'signaling', value: 'Node.js over WSS', tint: 'violet' },
  { label: 'host', value: 'Electron · desktopCapturer', tint: 'cyan' },
  { label: 'input', value: 'nut-js · mouse move + left-click', tint: 'amber' },
  { label: 'client', value: 'browser today · Android in progress', tint: 'neutral' },
]

const LEGEND = [
  { tint: 'pink', meaning: 'connection' },
  { tint: 'violet', meaning: 'signaling / data' },
  { tint: 'cyan', meaning: 'capture / video' },
  { tint: 'amber', meaning: 'input / control' },
]

function SpecStrip() {
  return (
    <div className="spec-strip">
      <div className="container spec-strip__row">
        {SPECS.map((spec) => (
          <div className="spec-strip__item" key={spec.label}>
            <span className="spec-strip__label mono">
              <span className={`spec-strip__dot spec-strip__dot--${spec.tint}`} />
              {spec.label}
            </span>
            <span className="spec-strip__value">{spec.value}</span>
          </div>
        ))}
      </div>

      <div className="container spec-strip__legend">
        <span className="spec-strip__legend-title mono">color key</span>
        {LEGEND.map((item) => (
          <span className="spec-strip__legend-item mono" key={item.tint}>
            <span className={`spec-strip__dot spec-strip__dot--${item.tint}`} />
            {item.meaning}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SpecStrip
