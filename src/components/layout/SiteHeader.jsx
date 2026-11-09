import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import logoPath from '../../assets/logo.png'

const navigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5" aria-label="Muhammad Mubashir, home">
          <img
            src={logoPath}
            alt="Muhammad Mubashir logo"
            className="size-10 rounded-xl object-contain drop-shadow-[0_4px_16px_#ffa80055]"
          />
          <span className="font-display text-[14px] font-bold tracking-[-.03em] text-white sm:text-base">
            Mubashir <span className="text-accent">Ali</span>
          </span>
        </a>
        <button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-accent hover:text-accent lg:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-[75px] flex-col items-center border-b border-white/10 bg-[#0d0d0b] px-5 pb-6 pt-3 text-center text-sm text-white/75 lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0`}>
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="w-full border-b border-white/5 py-3 transition-colors hover:text-accent lg:w-auto lg:border-0 lg:py-2">{label}</a>)}
          <a href="#contact" onClick={closeMenu} className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-accent px-5 text-xs font-semibold text-white transition hover:bg-accent hover:text-ink lg:mt-0">Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  )
}
