import { Check } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { services } from '../content'

// Gradient overlays per accent color
const accentGlow = {
  azure:  'from-azure/20 via-transparent to-transparent',
  violet: 'from-violet/20 via-transparent to-transparent',
  teal:   'from-teal/20 via-transparent to-transparent',
}
const accentIcon = {
  azure:  'text-azure-glow',
  violet: 'text-violet-glow',
  teal:   'text-teal-glow',
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      {/* Ambient gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[1100px] -translate-x-1/2 rounded-full bg-azure/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index={services.index}
          eyebrow={services.eyebrow}
          title={services.title}
          sub={services.sub}
        />

        {/* Service cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.items.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.name} delay={i * 0.1}>
                <article className="scanline brackets glass group relative h-full p-8 transition-transform duration-500 hover:-translate-y-1">
                  {/* Accent gradient */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${accentGlow[s.accent]} opacity-60`}
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-ink-800 ring-1 ring-ink-600 ${accentIcon[s.accent]}`}>
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist-400">
                        0{i + 1} / 0{services.items.length}
                      </span>
                    </div>

                    <h3 className="mt-8 font-display text-2xl font-semibold text-mist-100">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist-300">
                      {s.blurb}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-mist-200">
                          <Check size={14} className="mt-1 shrink-0 text-teal" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Capabilities strip */}
        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-900/40 backdrop-blur">
            <div className="flex items-center gap-3 border-b border-ink-600/60 px-5 py-3">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist-300">
                Core capabilities
              </span>
            </div>
            <div className="group relative overflow-hidden">
              <div className="flex animate-marquee gap-12 whitespace-nowrap py-5 [animation-play-state:running] group-hover:[animation-play-state:paused]">
                {[...services.capabilities, ...services.capabilities].map((c, i) => {
                  const Icon = c.icon
                  return (
                    <div key={i} className="flex shrink-0 items-center gap-3 px-6 font-mono text-xs uppercase tracking-[0.22em] text-mist-200">
                      <Icon size={16} className="text-azure-glow" />
                      {c.label}
                    </div>
                  )
                })}
              </div>
              {/* Edge fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink-900 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-900 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
