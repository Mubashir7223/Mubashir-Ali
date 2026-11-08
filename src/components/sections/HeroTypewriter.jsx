import { useEffect, useState } from 'react'

const phrases = [
  'CRM dashboards',
  'website automation',
  'custom full-stack websites',
]

export default function HeroTypewriter() {
  const [text, setText] = useState('')

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (motionPreference.matches) {
      setText(phrases[0])
      return undefined
    }

    let phraseIndex = 0
    let characterIndex = 0
    let isDeleting = false
    let timeoutId

    function typeNextCharacter() {
      const phrase = phrases[phraseIndex]

      if (!isDeleting && characterIndex < phrase.length) {
        characterIndex += 1
        setText(phrase.slice(0, characterIndex))
        timeoutId = window.setTimeout(typeNextCharacter, 72)
        return
      }

      if (!isDeleting) {
        isDeleting = true
        timeoutId = window.setTimeout(typeNextCharacter, 1250)
        return
      }

      if (characterIndex > 0) {
        characterIndex -= 1
        setText(phrase.slice(0, characterIndex))
        timeoutId = window.setTimeout(typeNextCharacter, 34)
        return
      }

      phraseIndex = (phraseIndex + 1) % phrases.length
      isDeleting = false
      timeoutId = window.setTimeout(typeNextCharacter, 260)
    }

    setText('')
    timeoutId = window.setTimeout(typeNextCharacter, 300)

    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <p className="hero-typewriter-line font-display text-lg font-semibold tracking-[-.02em] text-white sm:text-xl">
      I can build{' '}
      <span className="hero-typewriter" aria-hidden="true">
        <span className="hero-typewriter-text">{text || '\u00a0'}</span>
        <span className="hero-typewriter-cursor" />
      </span>
      <span className="sr-only">CRM dashboards, website automation, and custom full-stack websites.</span>
    </p>
  )
}
