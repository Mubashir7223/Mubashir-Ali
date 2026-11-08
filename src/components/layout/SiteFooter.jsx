import { ArrowUp, Github, Linkedin } from 'lucide-react'

const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]

export default function SiteFooter() {
  return (
    <footer className="bg-[#080807]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top"><span className="grid size-8 place-items-center rounded-lg bg-accent font-display font-extrabold text-ink">M</span><span className="font-display text-sm font-bold text-white">Mubashir <span className="text-accent">Ali</span></span></a>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-white/55">{links.map(([label, href]) => <a className="transition-colors hover:text-accent" href={href} key={href}>{label}</a>)}</nav>
        <div className="flex items-center gap-3 text-white/65"><a className="grid size-9 place-items-center rounded-full border border-white/10 transition hover:border-accent hover:text-accent" href="https://github.com/your-username" aria-label="GitHub profile"><Github size={16} aria-hidden="true" /></a><a className="grid size-9 place-items-center rounded-full border border-white/10 transition hover:border-accent hover:text-accent" href="https://linkedin.com/in/your-profile" aria-label="LinkedIn profile"><Linkedin size={16} aria-hidden="true" /></a><a className="ml-2 grid size-9 place-items-center rounded-full bg-accent text-ink transition hover:-translate-y-1 hover:bg-accent-bright" href="#home" aria-label="Back to top"><ArrowUp size={16} aria-hidden="true" /></a></div>
      </div>
      <div className="border-t border-white/[.07]"><div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-4 text-[10px] text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><span>© {new Date().getFullYear()} Mubashir Ali. All rights reserved.</span><span>React · Tailwind CSS · EmailJS</span></div></div>
    </footer>
  )
}
