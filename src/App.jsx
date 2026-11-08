import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage.jsx'

function IntroLoader() {
  return (
    <div
      className="intro-loader"
      role="status"
      aria-label="Loading Mubashir Ali's portfolio"
      aria-live="polite"
    >
      <div className="intro-loader-content">
        <span className="intro-loader-mark" aria-hidden="true">M</span>
        <p className="intro-loader-name">Mubashir <span>Ali</span></p>
        <p className="intro-loader-caption">Full-stack developer</p>
        <span className="intro-loader-track" aria-hidden="true"><span /></span>
      </div>
    </div>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsLoading(false)
      return undefined
    }

    const timeoutId = window.setTimeout(() => setIsLoading(false), 850)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <>
      {isLoading && <IntroLoader />}
      <HomePage />
    </>
  )
}
