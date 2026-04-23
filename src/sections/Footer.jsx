import { Linkedin, Github, Mail } from 'lucide-react'
import { brand, nav } from '../content'

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-ink-600/70 bg-ink-950">
      {/* Top gradient line */}
      <div className="h-px w-full bg-brand-gradient opacity-70" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Massive wordmark */}
        <div className="select-none overflow-hidden pb-8">
          <div className="bg-brand-gradient bg-clip-text font-display text-[22vw] font-semibold leading-[0.85] tracking-tight text-transparent">
            TANTRO
          </div>
        </div>

        <div className="grid gap-10 border-t border-ink-600/60 pt-10 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="" className="h-9 w-9" />
              <span className="font-display text-lg tracking-[0.25em] text-mist-100">
                {brand.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist-300">
              Industrial technology for the next era. Automation, IIoT, digital twins, and AI-driven
              intelligence — engineered in {brand.location.split(',')[0]}, deployed worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink icon={Linkedin} href="#" label="LinkedIn" />
              <SocialLink icon={Github} href="#" label="GitHub" />
              <SocialLink icon={Mail} href={`mailto:${brand.email}`} label="Email" />
            </div>
          </div>

          {/* Nav column */}
          <div className="md:col-span-4">
            <div className="section-index mb-5">Explore</div>
            <ul className="grid grid-cols-2 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-mono text-xs uppercase tracking-[0.22em] text-mist-200 hover:text-teal"
                  >
                    <span className="text-mist-400">/</span>{item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3">
            <div className="section-index mb-5">Contact</div>
            <a
              href={`mailto:${brand.email}`}
              className="block text-sm text-mist-100 hover:text-teal"
            >
              {brand.email}
            </a>
            <div className="mt-2 text-sm text-mist-300">{brand.location}</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-ink-600/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist-400">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist-400">
            {brand.tagline}
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-500 text-mist-200 transition-all hover:border-teal hover:text-teal"
    >
      <Icon size={15} />
    </a>
  )
}
