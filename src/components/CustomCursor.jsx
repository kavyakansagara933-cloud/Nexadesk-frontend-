import { useEffect, useRef } from 'react'
import './CustomCursor.css'

const INTERACTIVE_SELECTOR = 'a, button, .feature-card, .status__panel, .steps__item'

function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isCoarsePointer || prefersReduced) return

    document.body.classList.add('has-custom-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = window.innerWidth / 2
    let ringY = window.innerHeight / 2
    let targetX = ringX
    let targetY = ringY

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`
    }

    let raf
    const tick = () => {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onEnter = () => ring.classList.add('cursor-ring--active')
    const onLeave = () => ring.classList.remove('cursor-ring--active')

    window.addEventListener('mousemove', onMove, { passive: true })

    const attachTargets = () => {
      document.querySelectorAll(INTERACTIVE_SELECTOR).forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachTargets()

    const observer = new MutationObserver(attachTargets)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}

export default CustomCursor
