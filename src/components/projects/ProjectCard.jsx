import { useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import ProjectVisual from './ProjectVisual.jsx'

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isManuallyFlipped, setIsManuallyFlipped] = useState(false)
  const [isBackFocused, setIsBackFocused] = useState(false)
  const frontButtonRef = useRef(null)
  const backButtonRef = useRef(null)
  const backFaceRef = useRef(null)
  const isFlipped = isHovered || isManuallyFlipped || isBackFocused

  function showDetails() {
    setIsManuallyFlipped(true)
    window.requestAnimationFrame(() => backButtonRef.current?.focus())
  }

  function showPreview() {
    setIsManuallyFlipped(false)
    setIsBackFocused(false)
    window.requestAnimationFrame(() => frontButtonRef.current?.focus())
  }

  return (
    <article
      data-reveal-item
      className="project-flip-card"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setIsHovered(true)
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setIsHovered(false)
      }}
      onFocusCapture={(event) => {
        if (backFaceRef.current?.contains(event.target)) setIsBackFocused(true)
      }}
      onBlurCapture={(event) => {
        if (!backFaceRef.current?.contains(event.relatedTarget)) setIsBackFocused(false)
      }}
    >
      <div className={`project-flip-inner${isFlipped ? ' is-flipped' : ''}`}>
        <div className="project-flip-face project-flip-front" aria-hidden={isFlipped}>
          <div className="project-flip-visual" aria-hidden="true">
            <ProjectVisual kind={project.visual} />
          </div>
          <div className="project-front-overlay">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[.14em] text-accent">{project.type}</span>
              <h3 className="font-display text-xl font-bold tracking-[-.03em] text-white sm:text-2xl">{project.title}</h3>
            </div>
            <button
              ref={frontButtonRef}
              className="project-flip-control"
              type="button"
              disabled={isFlipped}
              onClick={showDetails}
              aria-label={`Show details for ${project.title}`}
            >
              Details <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          </div>
          <span className="project-card-count" aria-hidden="true">{project.number} / 03</span>
        </div>

        <div
          ref={backFaceRef}
          className="project-flip-face project-flip-back"
          aria-hidden={!isFlipped}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[.14em] text-accent">{project.type}</span>
            <span className="font-mono text-[9px] text-white/35">{project.number} / 03</span>
          </div>
          <div className="my-auto py-6">
            <h3 className="font-display text-[25px] font-bold leading-tight tracking-[-.04em] text-white sm:text-[30px]">{project.title}</h3>
            <p className="mt-4 text-[13px] leading-7 text-copy-muted">{project.overview}</p>
            <p className="mt-3 text-[11px] leading-6 text-white/55">{project.approach}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} focus areas`}>
              {project.focus.map((item) => <li className="rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-[9px] text-white/75" key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
            <button
              ref={backButtonRef}
              className="project-flip-control project-flip-back-control"
              type="button"
              disabled={!isFlipped}
              onClick={showPreview}
              aria-label={`Back to ${project.title} preview`}
            >
              <ArrowLeft size={15} aria-hidden="true" /> Preview
            </button>
            <a className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-4 text-[10px] font-bold text-ink transition-colors hover:bg-accent-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" href="#contact" tabIndex={isFlipped ? 0 : -1}>
              Discuss project <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
