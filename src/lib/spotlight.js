// Shared handler for the mouse-tracked spotlight glow used on cards.
// Sets --mx/--my custom properties (as percentages) on the element so the
// CSS radial-gradient in .spotlight::before can follow the cursor.
export function handleSpotlightMove(e) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  el.style.setProperty('--mx', `${x}%`)
  el.style.setProperty('--my', `${y}%`)
}
