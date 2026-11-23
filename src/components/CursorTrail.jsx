import { useEffect, useRef } from 'react'
import './CursorTrail.css'

/**
 * A tiny, hero-only decorative trail: small fading dots that follow the
 * REAL system cursor as it moves over the hero section. This does not hide
 * or replace the system pointer — it's purely additive, and it's the only
 * place on the site this happens (restrained, not a site-wide gimmick).
 * No-ops entirely under prefers-reduced-motion.
 */
function CursorTrail() {
  const containerRef = useRef(null)
  const lastSpawnRef = useRef(0)
  const dotCountRef = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const hero = document.getElementById('top')
    const container = containerRef.current
    if (!hero || !container) return

    const MIN_INTERVAL = 55 // ms between spawned dots — keeps DOM churn low
    const MAX_DOTS = 10

    function handleMove(e) {
      const now = performance.now()
      if (now - lastSpawnRef.current < MIN_INTERVAL) return
      lastSpawnRef.current = now

      if (dotCountRef.current >= MAX_DOTS) return

      const rect = hero.getBoundingClientRect()
      const dot = document.createElement('span')
      dot.className = 'cursor-trail__dot'
      dot.style.left = `${e.clientX - rect.left}px`
      dot.style.top = `${e.clientY - rect.top}px`
      container.appendChild(dot)
      dotCountRef.current += 1

      dot.addEventListener('animationend', () => {
        dot.remove()
        dotCountRef.current -= 1
      })
    }

    hero.addEventListener('mousemove', handleMove)
    return () => hero.removeEventListener('mousemove', handleMove)
  }, [])

  return <div className="cursor-trail" ref={containerRef} aria-hidden="true" />
}

export default CursorTrail
