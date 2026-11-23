import { GITHUB_URL } from '../siteConfig'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <span className="footer__brand mono">Nexadesk</span>
        <p className="footer__note">
          A WebRTC remote desktop project, designed and built by Kavya.
        </p>
        <div className="footer__links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
