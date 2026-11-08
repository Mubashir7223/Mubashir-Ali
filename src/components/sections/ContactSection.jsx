import { ArrowUpRight, Code2, LoaderCircle, Mail, MessageCircle } from 'lucide-react'
import useContactForm from '../../hooks/useContactForm.js'

const messages = {
  sent: 'Thanks for reaching out. Your message has been sent.',
  'sent-no-auto-reply-config': 'Your message was sent. The automatic reply is not configured yet.',
  'sent-no-auto-reply': 'Your message was sent, but we could not send the automatic confirmation.',
  error: 'Something went wrong. Please try again in a moment.',
  'missing-config': 'EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.',
}

export default function ContactSection() {
  const { status, submit } = useContactForm()

  return (
    <section id="contact" className="relative overflow-hidden border-b border-white/10 bg-[#0d0d0c]">
      <div className="pointer-events-none absolute -right-24 top-0 size-[400px] rounded-full bg-[radial-gradient(circle,#734600_0%,transparent_70%)] opacity-25 blur-2xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-20">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-accent"><span className="h-[3px] w-7 rounded-full bg-accent" /> Get in touch</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-.045em] text-white sm:text-4xl">Let’s work<br /><span className="text-accent">together.</span></h2>
          <p className="mt-4 max-w-[400px] text-sm leading-7 text-copy-muted">Have a project in mind or want to talk through an idea? Send a note using the form and tell me what you’re looking to build.</p>
          <ul className="mt-7 space-y-3 text-xs text-white/75">
            <li className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-accent/10 text-accent"><Code2 size={16} aria-hidden="true" /></span> Web application development</li>
            <li className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-accent/10 text-accent"><MessageCircle size={16} aria-hidden="true" /></span> Project collaboration</li>
            <li className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-accent/10 text-accent"><Mail size={16} aria-hidden="true" /></span> General questions</li>
          </ul>
        </div>
        <form onSubmit={submit} className="rounded-[24px] border border-white/[.09] bg-gradient-to-br from-[#181715] to-[#111110] p-5 shadow-[0_20px_60px_#00000040] sm:p-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-xs font-medium text-white/80">Your name<input className="mt-2 block h-12 w-full rounded-xl border border-white/10 bg-[#0c0c0b] px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent/70 focus:ring-2 focus:ring-accent/10" name="from_name" required placeholder="Name" autoComplete="name" /></label>
            <label className="block text-xs font-medium text-white/80">Your email<input className="mt-2 block h-12 w-full rounded-xl border border-white/10 bg-[#0c0c0b] px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent/70 focus:ring-2 focus:ring-accent/10" name="reply_to" type="email" required placeholder="you@example.com" autoComplete="email" /></label>
          </div>
          <label className="mt-4 block text-xs font-medium text-white/80">A little about your project<textarea className="mt-2 block min-h-[150px] w-full resize-y rounded-xl border border-white/10 bg-[#0c0c0b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent/70 focus:ring-2 focus:ring-accent/10" name="message" required rows="5" placeholder="What are you hoping to build?" /></label>
          <button type="submit" disabled={status === 'sending'} className="mt-5 inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 text-sm font-bold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-accent-bright disabled:cursor-wait disabled:opacity-65">
            {status === 'sending' ? 'Sending…' : 'Send message'}
            {status === 'sending'
              ? <LoaderCircle className="animate-spin" size={17} aria-hidden="true" />
              : <ArrowUpRight size={17} aria-hidden="true" />}
          </button>
          <p
            className={`mt-4 min-h-5 text-xs ${status === 'error' || status === 'missing-config' ? 'text-red-300' : 'text-accent'} ${status === 'idle' ? 'opacity-0' : 'opacity-100'}`}
            role="status"
            aria-live="polite"
          >
            {status === 'sending' && <LoaderCircle className="mr-2 inline-block animate-spin align-[-3px]" size={14} aria-hidden="true" />}
            {status === 'sending' ? 'Sending your message securely…' : messages[status]}
          </p>
        </form>
      </div>
    </section>
  )
}
