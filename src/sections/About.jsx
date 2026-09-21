import { ShieldCheck, Sparkles, Sprout } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { about } from '../content'

const pillarIcons = [ShieldCheck, Sparkles, Sprout]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index={about.index}
          eyebrow={about.eyebrow}
          title={about.title}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          {/* Vision */}
          <Reveal className="lg:col-span-7">
            <div className="glass brackets p-8 sm:p-10">
              <div className="section-index mb-4">Vision</div>
              <p className="font-display text-2xl leading-snug text-mist-100 sm:text-3xl">
                {about.vision}
              </p>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="glass brackets h-full p-8 sm:p-10">
              <div className="section-index mb-4">Mission</div>
              <p className="text-base leading-relaxed text-mist-200 sm:text-lg">
                {about.mission}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {about.pillars.map((p, i) => {
            const Icon = pillarIcons[i]
            return (
              <Reveal key={p.label} delay={i * 0.08}>
                <div className="glass flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-800 text-teal ring-1 ring-ink-600">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-base font-medium text-mist-100">{p.label}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist-400">
                      {p.note}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
