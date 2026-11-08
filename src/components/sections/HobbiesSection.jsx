import { BookOpen, Camera, Compass, Sparkles } from 'lucide-react'

const hobbies = [
  { icon: Camera, title: 'Photography', note: 'Finding interesting details in everyday places.' },
  { icon: BookOpen, title: 'Reading', note: 'Making time for new ideas and perspectives.' },
  { icon: Compass, title: 'Exploring', note: 'Discovering new places, interests, and inspiration.' },
]

export default function HobbiesSection() {
  return (
    <section id="interests" className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute -left-24 bottom-[-200px] size-[400px] rounded-full bg-[radial-gradient(circle,#704300_0%,transparent_70%)] opacity-30 blur-2xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-accent"><span className="h-[3px] w-7 rounded-full bg-accent" /> Outside the code</p>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><h2 className="font-display text-3xl font-extrabold tracking-[-.04em] text-white sm:text-4xl">A little more about me</h2><p className="mt-2 text-sm text-copy-muted">A few things I enjoy beyond the screen.</p></div><Sparkles className="mr-3 hidden text-accent sm:block" size={28} aria-hidden="true" /></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">{hobbies.map(({ icon: Icon, title, note }) => <article key={title} className="group rounded-[20px] border border-white/[.08] bg-gradient-to-br from-[#181715] to-[#10100f] p-5 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40"><span className="mb-5 grid size-11 place-items-center rounded-2xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-ink"><Icon size={19} aria-hidden="true" /></span><h3 className="font-display text-base font-bold text-white">{title}</h3><p className="mt-2 text-xs leading-6 text-copy-muted">{note}</p></article>)}</div>
      </div>
    </section>
  )
}
