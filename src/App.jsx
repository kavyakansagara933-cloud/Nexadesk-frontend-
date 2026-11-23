import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import SpecStrip from './components/SpecStrip'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Status from './components/Status'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { ThemeProvider } from './theme/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="grain" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <Nav />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <SpecStrip />
        <Status />
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
