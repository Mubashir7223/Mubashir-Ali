import { useEffect, useRef } from 'react'

const PARTICLE_COLOR = '#fbbf24'
const LINE_COLOR = '251, 191, 36'
const MAX_PARTICLES = 44
const MAX_DISTANCE = 145

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    let particles = []
    let width = 0
    let height = 0
    let resizeFrameId = 0

    function createParticles() {
      const count = Math.min(MAX_PARTICLES, Math.max(24, Math.round((width * height) / 32000)))
      particles = Array.from({ length: count }, () => {
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 1 + Math.random() * 1.2,
        }
      })
    }

    function resizeCanvas() {
      resizeFrameId = 0
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)

      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      createParticles()
      drawFrame()
    }

    function drawFrame() {
      context.clearRect(0, 0, width, height)

      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const a = particles[first]
          const b = particles[second]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distanceSquared = dx * dx + dy * dy

          if (distanceSquared < MAX_DISTANCE * MAX_DISTANCE) {
            const opacity = (1 - Math.sqrt(distanceSquared) / MAX_DISTANCE) * 0.22
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.strokeStyle = `rgba(${LINE_COLOR}, ${opacity})`
            context.lineWidth = 0.7
            context.stroke()
          }
        }
      }

      context.fillStyle = PARTICLE_COLOR
      for (const particle of particles) {
        context.globalAlpha = 0.5
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()
      }
      context.globalAlpha = 1
    }

    function handleResize() {
      if (resizeFrameId) window.cancelAnimationFrame(resizeFrameId)
      resizeFrameId = window.requestAnimationFrame(resizeCanvas)
    }

    resizeCanvas()
    window.addEventListener('resize', handleResize)

    return () => {
      if (resizeFrameId) window.cancelAnimationFrame(resizeFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="particle-background h-full w-full" />
    </div>
  )
}
