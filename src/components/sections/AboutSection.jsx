import { ArrowRight, Braces, Code2, Sparkles, UserRound } from 'lucide-react'
import portraitPath from '../../assets/protfile pic.png'

const details = [
  { icon: UserRound, label: 'Name', value: 'Muhammad Mubashir' },
  { icon: Code2, label: 'Role', value: 'MERN Stack Developer' },
  { icon: Braces, label: 'Stack', value: 'React | Node | MongoDB' },
  { icon: Sparkles, label: 'Available', value: 'Freelance | Open to work' },
]

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-white/10 bg-[#0c0c0b]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 md:grid-cols-[.75fr_1.25fr] md:gap-10 lg:grid-cols-[.72fr_1.35fr_1fr] lg:px-12 lg:py-20">
        <div className="group relative mx-auto w-full max-w-[310px] md:max-w-none">
          <div className="absolute -inset-2 rotate-[-4deg] rounded-[28px] border border-accent/70 transition-transform duration-500 group-hover:rotate-[-1deg]" />
          <div className="about-portrait-frame relative aspect-[.84] overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(ellipse_at_70%_30%,#6b3b11,#171310_65%,#0a0908)]">
            <img src={portraitPath} alt="Portrait of Muhammad Mubashir, MERN Stack Developer from IUB Pakistan" className="about-portrait-art absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.035]" />
            <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.12em] text-white/70 backdrop-blur">Developer &middot; Creator</span>
          </div>
        </div>
        <div>
          <p className="mb-3 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[.16em] text-accent"><span className="h-[3px] w-7 rounded-full bg-accent" /> About me</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-.045em] text-white sm:text-4xl">Passionate MERN Stack<br className="hidden sm:block" /> developer who loves to <span className="text-accent">build solutions.</span></h2>
          <p className="mt-5 max-w-[620px] text-sm leading-7 text-copy-muted">I&apos;m Muhammad Mubashir &mdash; a full-stack MERN developer (MongoDB, Express, React, Node.js) from IUB (Islamia University of Bahawalpur), Pakistan. I focus on building useful, accessible web experiences, shaping ideas into clear interfaces connected to reliable application logic.</p>
          <p className="mt-3 max-w-[620px] text-sm leading-7 text-copy-muted">My work brings together React, Node.js, MongoDB, responsive design, and practical problem-solving &mdash; with care for both the experience people see and the code behind it.</p>
          <a href="#skills" className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-xs font-bold text-ink transition hover:-translate-y-0.5 hover:bg-accent-bright">Explore my toolkit <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></a>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-[#1a1917] to-[#111110] p-4 shadow-[0_20px_70px_#00000040] sm:p-5">
          {details.map(({ icon: Icon, label, value }, index) => <div className={`flex items-center gap-3 py-3.5 ${index < details.length - 1 ? 'border-b border-white/[.07]' : ''}`} key={label}><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={18} aria-hidden="true" /></span><span className="min-w-0 flex-1 text-xs text-copy-muted">{label}</span><strong className="text-right text-[11px] font-semibold text-white sm:text-xs">{value}</strong></div>)}
        </div>
      </div>
    </section>
  )
}
