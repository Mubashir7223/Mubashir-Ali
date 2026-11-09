import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import portraitPath from '../../assets/protfile pic.png'
import HeroLineField from './HeroLineField.jsx'
import HeroTypewriter from './HeroTypewriter.jsx'

export default function HeroSection() {
  return (
    <section id="home" className="hero-shell relative isolate overflow-hidden border-b border-white/10" aria-labelledby="hero-title">
      <HeroLineField />
      <div className="pointer-events-none absolute -left-40 -top-44 size-[460px] rounded-full bg-[radial-gradient(circle,#c46b00_0%,#754000_36%,transparent_70%)] opacity-40 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[16%] top-[13%] h-[440px] w-[330px] rotate-[28deg] rounded-[48%] bg-gradient-to-b from-[#ffbe21] via-[#ec8a00] to-[#492400] opacity-25 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-[18%] h-[340px] w-[280px] bg-[radial-gradient(#f6a400_1px,transparent_1px)] bg-[size:13px_13px] opacity-25" aria-hidden="true" />
      <div className="hero-portrait hero-portrait-mobile pointer-events-none absolute left-1/2 top-7 z-0 h-[300px] w-[300px] -translate-x-1/2 opacity-40 sm:top-10 sm:h-[340px] sm:w-[340px] lg:hidden" aria-hidden="true">
        <div className="hero-photo-halo absolute inset-0 rounded-full" />
        <div className="hero-orbit-ring hero-orbit-ring-mobile absolute inset-0 rounded-full" />
        <div className="hero-portrait-frame absolute inset-[7px] overflow-hidden rounded-full border border-accent/45 bg-[radial-gradient(ellipse_at_68%_34%,#21170b_0%,#0d0b09_58%,#080807_100%)]">
          <img className="hero-portrait-art h-full w-full object-cover object-[50%_20%]" src={portraitPath} alt="" />
        </div>
      </div>
      <div className="relative mx-auto grid min-h-[570px] max-w-[1280px] grid-cols-1 items-center px-5 pb-16 pt-12 sm:px-8 lg:min-h-[620px] lg:grid-cols-[1.03fr_.97fr] lg:px-12 lg:pb-10 lg:pt-8">
        <div className="relative z-20 max-w-[680px]">
          {/* Hidden SEO text — describes Mubashir for crawlers but not visible to users */}
          <span className="sr-only">
            Muhammad Mubashir, also known as Mubashir Ali, is a MERN Stack Developer and full-stack web developer
            from IUB (Islamia University of Bahawalpur), Pakistan. Available for freelance React, Node.js, and
            MongoDB development projects.
          </span>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[.08] px-3.5 py-2 text-[11px] font-medium text-emerald-200"><span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" /> Available for freelance</div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[.22em] text-copy-muted">Hello, I’m</p>
          <h1 id="hero-title" className="font-display text-[clamp(42px,7.1vw,78px)] font-extrabold leading-[1.02] tracking-[-.065em] text-white">
            Muhammad<br />Mubashir<br /><span className="text-accent">Ali</span>
          </h1>
          <HeroTypewriter />
          <p className="mt-3 font-display text-sm font-medium tracking-[-.01em] text-white/75 sm:text-base">Full-stack Developer <span className="text-accent">&</span> Software Engineer</p>
          <p className="mt-4 max-w-[520px] text-sm leading-7 text-copy-muted sm:text-[15px]">I build modern, responsive web applications with clean code and thoughtful user experiences—from the first interface to the logic behind it.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 text-sm font-bold text-ink shadow-[0_8px_30px_#ffa80030] transition duration-300 hover:-translate-y-1 hover:bg-accent-bright">View my projects <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></a>
            <a href="#contact" className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-accent/60 px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-accent/10"><Mail size={16} className="text-accent" aria-hidden="true" /> Contact me</a>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <a className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[.04] text-white/80 transition hover:-translate-y-1 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent" href="https://github.com/Mubashir7223/" target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)"><Github size={17} aria-hidden="true" /></a>
            <a className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[.04] text-white/80 transition hover:-translate-y-1 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent" href="https://www.linkedin.com/in/asad-ali-440212377" target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)"><Linkedin size={17} aria-hidden="true" /></a>
            <span className="ml-1 h-px w-10 bg-white/15" /><span className="font-mono text-[9px] uppercase tracking-[.17em] text-white/45">Building for the web</span>
          </div>
        </div>
        <div className="hero-portrait relative mt-2 hidden h-[580px] lg:mt-0 lg:block" aria-hidden="true">
          <div className="hero-photo-halo absolute left-[5%] top-[3%] aspect-square w-[88%] rounded-full" />
          <div className="hero-orbit-ring absolute left-[4%] top-[2%] aspect-square w-[90%] rounded-full" />
          <div className="hero-portrait-frame absolute left-[6%] top-[4%] aspect-square w-[86%] overflow-hidden rounded-full border border-accent/45 bg-[radial-gradient(ellipse_at_68%_34%,#21170b_0%,#0d0b09_58%,#080807_100%)]">
            <img className="hero-portrait-art h-full w-full object-cover object-[50%_20%]" src={portraitPath} alt="" />
          </div>
          <div className="absolute right-[-3%] top-[29%] max-w-[160px] rotate-[-8deg] font-display text-lg font-semibold italic leading-tight text-white drop-shadow-lg">Let’s build<br />something great<span className="text-accent">.</span><span className="mt-2 block h-1 w-20 rotate-[-8deg] rounded-full bg-accent" /></div>
          <span className="absolute bottom-[9%] right-[6%] font-mono text-[9px] tracking-[.2em] text-white/50">01 — 06</span>
        </div>
      </div>
    </section>
  )
}
