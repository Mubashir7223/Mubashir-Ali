import { ArrowUpRight, Atom, Braces, Code2, GitBranch, Globe2, PanelsTopLeft, ShieldCheck, Wind, Zap } from 'lucide-react'
import ScrollRevealGroup from '../ui/ScrollRevealGroup.jsx'

const skills = [
  { name: 'React', detail: 'Component-based interfaces', category: 'UI development', icon: Atom, color: '#61dafb' },
  { name: 'JavaScript', detail: 'Interactive web experiences', category: 'UI development', label: 'JS', color: '#f7df1e' },
  { name: 'HTML5', detail: 'Semantic page structure', category: 'UI development', icon: Code2, color: '#e34f26' },
  { name: 'CSS3', detail: 'Responsive visual styling', category: 'UI development', icon: PanelsTopLeft, color: '#1572b6' },
  { name: 'Tailwind CSS', detail: 'Utility-first styling', category: 'UI development', icon: Wind, color: '#38bdf8' },
  { name: 'API integration', detail: 'Connecting app services', category: 'Integration', icon: Globe2, color: '#4caf50' },
  { name: 'Git & GitHub', detail: 'Version control workflow', category: 'Workflow', icon: GitBranch, color: '#f05032' },
  { name: 'Accessibility', detail: 'Inclusive experiences', category: 'Practice', icon: ShieldCheck, color: '#a855f7' },
  { name: 'Vite', detail: 'Frontend build tooling', category: 'Tooling', icon: Zap, color: '#8b80ff' },
  { name: 'Web UI', detail: 'Clear interface patterns', category: 'Practice', icon: Braces, color: '#eab308' },
]

function moveCardTowardPointer(event) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  const offsetX = (event.clientX - bounds.left - bounds.width / 2) / bounds.width
  const offsetY = (event.clientY - bounds.top - bounds.height / 2) / bounds.height

  card.style.setProperty('--mag-x', `${offsetX * 5}px`)
  card.style.setProperty('--mag-y', `${offsetY * 5}px`)
}

function resetCardPosition(event) {
  event.currentTarget.style.removeProperty('--mag-x')
  event.currentTarget.style.removeProperty('--mag-y')
}

export default function SkillsSection() {
  return (
    <section id="skills" className="border-b border-white/10 bg-[#0b0b0a]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-[76px]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-accent"><span className="h-[2px] w-7 rounded-full bg-accent" /> My skills</p>
            <h2 className="font-display text-3xl font-extrabold tracking-[-.045em] text-white sm:text-4xl">Technologies I work with</h2>
            <p className="mt-3 max-w-[540px] text-sm leading-6 text-copy-muted">A practical toolkit for building responsive, accessible web products—from polished interfaces to the code behind them.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden border-l border-white/10 pl-4 font-mono text-[10px] uppercase leading-5 tracking-[.12em] text-white/45 sm:block"><span className="block text-lg font-semibold tracking-normal text-white">10</span>core tools</span>
            <a href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-xs font-semibold text-white transition duration-300 hover:border-accent hover:bg-accent/[.06] hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">View projects <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
        <ScrollRevealGroup as="ul" className="skills-grid grid grid-cols-2 gap-3 pb-5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-4">
          {skills.map(({ name, detail, category, icon: Icon, label, color }, index) => (
            <li
              key={name}
              data-reveal-item
              className="skill-card group flex min-h-[166px] flex-col items-start rounded-[18px] border border-white/[.08] bg-gradient-to-br from-[#171615] via-[#111110] to-[#0b0b0a] p-4 text-left shadow-[0_12px_30px_#00000030,inset_0_1px_0_#ffffff0d] transition duration-300 hover:border-white/15 hover:bg-[#171615] hover:shadow-[0_18px_38px_#00000050] sm:min-h-[178px] sm:p-[18px]"
              style={{ '--brand-color': color }}
              onPointerMove={moveCardTowardPointer}
              onPointerLeave={resetCardPosition}
            >
              <span className="relative z-[1] flex w-full items-start justify-between gap-2">
                <span className="skill-icon grid size-11 shrink-0 place-items-center rounded-[13px] border border-white/[.06] bg-[#080808] text-[var(--brand-color)] shadow-[inset_0_0_20px_#000000cc,0_5px_15px_#00000060] transition duration-300 group-hover:scale-105 group-hover:-translate-y-0.5 sm:size-12">
                  {Icon ? <Icon size={22} strokeWidth={2} aria-hidden="true" /> : <span className="font-display text-[17px] font-extrabold" aria-hidden="true">{label}</span>}
                </span>
                <span className="pt-1 font-mono text-[9px] tracking-[.1em] text-white/30">{String(index + 1).padStart(2, '0')}</span>
              </span>
              <span className="relative z-[1] mt-4 text-xs font-bold text-white transition-colors duration-300 group-hover:text-[var(--brand-color)] sm:text-[13px]">{name}</span>
              <span className="relative z-[1] mt-1.5 text-[10px] leading-4 text-copy-muted sm:text-[11px]">{detail}</span>
              <span className="relative z-[1] mt-auto pt-3 font-mono text-[8px] uppercase tracking-[.13em] text-white/35">{category}</span>
            </li>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
