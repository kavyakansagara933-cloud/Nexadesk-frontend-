/**
 * The NexaDesk mark: an N and a cursor merged into one geometric form.
 * The cursor isn't placed beside the N — it's a real negative-space cutout
 * carved directly out of the N's diagonal stroke (a compound path with
 * fill-rule="evenodd"), so it's discovered on closer inspection rather than
 * announced. Uses currentColor so it automatically follows light/dark theme
 * via CSS — no separate light/dark asset needed.
 */
function Logo({ size = 28, showAccent = true, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12,12 L44,12 L72,88 L88,88 L88,12 L72,12 L72,88 L56,88 L28,12 L28,88 L12,88 Z
            M45.9,41.2 L56.6,51.4 L50.2,50.9 L46.9,56.0 Z"
      />
      {showAccent && <circle cx="43" cy="37.8" r="2.3" fill="var(--accent-violet)" />}
    </svg>
  )
}

export default Logo
