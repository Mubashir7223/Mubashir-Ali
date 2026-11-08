import { useEffect, useRef } from 'react'

export default function ScrollRevealGroup({ as: Element = 'div', children, className = '', stagger = 70, ...props }) {
  const groupRef = useRef(null)

  useEffect(() => {
    const items = groupRef.current?.querySelectorAll('[data-reveal-item]')
    if (!items?.length) return

    const revealAll = () => items.forEach((item) => {
      item.dataset.revealState = 'visible'
    })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    items.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${index * stagger}ms`)
      item.dataset.revealState = 'pending'
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.dataset.revealState = 'visible'
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' })

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [stagger])

  return <Element ref={groupRef} className={`reveal-group ${className}`} {...props}>{children}</Element>
}
