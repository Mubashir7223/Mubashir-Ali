import { Cloud, Code2, ShieldCheck, Terminal } from 'lucide-react'

const learningAreas = [
  {
    icon: Code2,
    title: 'LeetCode practice',
    note: 'Practicing data structures, algorithms, and clear problem-solving through coding challenges.',
    label: 'Problem solving',
  },
  {
    icon: Cloud,
    title: 'Cloud fundamentals',
    note: 'Learning cloud concepts, deployment workflows, and how applications run in hosted environments.',
    label: 'Cloud & deployment',
  },
  {
    icon: ShieldCheck,
    title: 'Hack The Box labs',
    note: 'Studying ethical hacking concepts through guided, authorized labs and defensive security practice.',
    label: 'Authorized labs',
  },
  {
    icon: Terminal,
    title: 'Linux & security',
    note: 'Building command-line fluency and security awareness in controlled learning environments.',
    label: 'Systems & security',
  },
]

export default function HobbiesSection() {
  return (
    <section id="interests" className="relative overflow-hidden border-b border-white/10" aria-labelledby="learning-title">
      <div className="pointer-events-none absolute -left-24 bottom-[-200px] size-[400px] rounded-full bg-[radial-gradient(circle,#704300_0%,transparent_70%)] opacity-30 blur-2xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-accent">
          <span className="h-[3px] w-7 rounded-full bg-accent" />
          Learning in progress
        </p>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-9">
          <div>
            <h2 id="learning-title" className="font-display text-3xl font-extrabold tracking-[-.04em] text-white sm:text-4xl">
              Growing beyond the stack
            </h2>
            <p className="mt-2 max-w-[620px] text-sm leading-6 text-copy-muted">
              Building stronger foundations in problem-solving, cloud platforms, Linux, and authorized security labs.
            </p>
          </div>
          <span className="rounded-full border border-accent/20 bg-accent/[.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-accent">
            Curious by default
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learningAreas.map(({ icon: Icon, title, note, label }, index) => (
            <article
              key={title}
              className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-[20px] border border-white/[.08] bg-gradient-to-br from-[#181715] to-[#10100f] p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_38px_#0008] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-accent/[.06] blur-2xl transition-opacity group-hover:bg-accent/[.12]" aria-hidden="true" />
              <div className="relative mb-6 flex items-start justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-2xl border border-accent/15 bg-accent/10 text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent group-hover:text-ink">
                  <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="font-mono text-[9px] tracking-[.16em] text-white/35">
                  FOCUS {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="relative font-display text-base font-bold tracking-[-.02em] text-white">{title}</h3>
              <p className="relative mt-2 flex-1 text-xs leading-6 text-copy-muted">{note}</p>
              <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-white/[.08] pt-4">
                <span className="font-mono text-[9px] uppercase tracking-[.1em] text-accent/80">{label}</span>
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_#ffa80080]" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
