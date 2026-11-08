import { useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Bot, Cloud, Network, ShieldCheck, Terminal } from 'lucide-react'
import ScrollRevealGroup from '../ui/ScrollRevealGroup.jsx'

const learningAreas = [
  {
    icon: Terminal,
    title: 'Linux & command line',
    detail: 'Practicing shell basics, file permissions, and the tools used to work comfortably in a Linux environment.',
    label: 'Systems',
    color: '#f5c451',
  },
  {
    icon: Cloud,
    title: 'Cloud fundamentals',
    detail: 'Learning core cloud concepts, deployment workflows, and how web applications run beyond a local machine.',
    label: 'Infrastructure',
    color: '#64c8ff',
  },
  {
    icon: Bot,
    title: 'AI tools',
    detail: 'Exploring AI-assisted development workflows and evaluating where these tools can support practical work.',
    label: 'Emerging tools',
    color: '#b69cff',
  },
  {
    icon: Network,
    title: 'Cloudflare Tunnel',
    detail: 'Learning how tunnels can securely connect a local development service to an approved external endpoint.',
    label: 'Networking',
    color: '#ffad55',
  },
  {
    icon: ShieldCheck,
    title: 'Security testing',
    detail: 'Building security awareness through controlled labs, safe test environments, and defensive testing basics.',
    label: 'Authorized labs',
    color: '#67d6a0',
  },
]

function LearningCard({ area, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [pinnedFace, setPinnedFace] = useState(null)
  const frontButtonRef = useRef(null)
  const backButtonRef = useRef(null)
  const isFlipped = pinnedFace ?? isHovered
  const { icon: Icon, title, detail, label, color } = area
  const cardNumber = String(index + 1).padStart(2, '0')

  function showBack() {
    setPinnedFace(true)
    window.requestAnimationFrame(() => backButtonRef.current?.focus())
  }

  function showFront() {
    setPinnedFace(false)
    window.requestAnimationFrame(() => frontButtonRef.current?.focus())
  }

  function handlePointerMove(event) {
    if (event.pointerType !== 'mouse') return

    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <article
      className="growth-flip-card"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setIsHovered(true)
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== 'mouse') return
        setIsHovered(false)
        setPinnedFace(null)
      }}
      onPointerMove={handlePointerMove}
      style={{ '--growth-color': color }}
    >
      <div className={`growth-flip-inner${isFlipped ? ' is-flipped' : ''}`}>
        <div className="growth-flip-face growth-flip-front" aria-hidden={isFlipped}>
          <div className="growth-card-top">
            <span className="growth-icon-box"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
            <span className="growth-card-number">{cardNumber}</span>
          </div>
          <div className="growth-card-copy">
            <h3>{title}</h3>
            <p>{detail}</p>
          </div>
          <div className="growth-card-bottom">
            <span className="growth-tag">{label}</span>
            <button
              ref={frontButtonRef}
              className="growth-flip-control"
              type="button"
              disabled={isFlipped}
              onClick={showBack}
              aria-label={`Show learning details for ${title}`}
            >
              Explore <ArrowUpRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="growth-flip-face growth-flip-back"
          aria-hidden={!isFlipped}
        >
          <div className="growth-card-top">
            <span className="growth-icon-box"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
            <span className="growth-card-number">{cardNumber}</span>
          </div>
          <div className="growth-card-copy">
            <span className="growth-back-eyebrow">Currently exploring</span>
            <h3>{title}</h3>
            <p>{detail}</p>
          </div>
          <div className="growth-card-bottom">
            <span className="growth-tag">{label}</span>
            <button
              ref={backButtonRef}
              className="growth-flip-control growth-flip-back-control"
              type="button"
              disabled={!isFlipped}
              onClick={showFront}
              aria-label={`Return to ${title} card front`}
            >
              <ArrowLeft size={14} aria-hidden="true" /> Back
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section border-b border-white/10 bg-[#0d0d0c]">
      <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6 sm:mb-11">
          <div className="max-w-[650px]">
            <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-accent"><span className="h-[3px] w-7 rounded-full bg-accent" /> Experience & growth</p>
            <h2 className="font-display text-3xl font-extrabold tracking-[-.04em] text-white sm:text-4xl">Learning beyond the interface</h2>
            <p className="mt-3 max-w-[560px] text-sm leading-7 text-copy-muted">I’m expanding my web development foundations by exploring the systems, tools, and safe practices behind reliable applications.</p>
          </div>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-xs font-medium text-white transition duration-300 hover:border-accent hover:bg-accent/[.05] hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Let’s build together <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>

        <ScrollRevealGroup as="ul" className="growth-grid grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" stagger={90}>
          {learningAreas.map((area, index) => (
            <li className="growth-reveal-item" data-reveal-item key={area.title}>
              <LearningCard area={area} index={index} />
            </li>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
