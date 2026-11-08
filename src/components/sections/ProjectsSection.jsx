import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '../projects/ProjectCard.jsx'
import ScrollRevealGroup from '../ui/ScrollRevealGroup.jsx'
import { projects } from '../../data/projects.js'

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute -right-40 top-10 size-[440px] rounded-full bg-[radial-gradient(circle,#6b3800_0%,transparent_68%)] opacity-30 blur-2xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div><p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-accent"><span className="h-[3px] w-7 rounded-full bg-accent" /> My projects</p><h2 className="font-display text-3xl font-extrabold tracking-[-.045em] text-white sm:text-4xl">Selected work & concepts</h2><p className="mt-2 max-w-[620px] text-sm leading-6 text-copy-muted">A few full-stack and interface concepts exploring clear user flows, useful details, and responsive implementation.</p></div>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-accent px-5 text-xs font-semibold text-white transition hover:bg-accent hover:text-ink">Have a project? <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <ScrollRevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</ScrollRevealGroup>
        <p className="mt-5 text-[10px] text-white/35">Project cards are starter concepts. Replace them with your live work and case studies.</p>
      </div>
    </section>
  )
}
