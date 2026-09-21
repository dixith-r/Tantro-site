import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { whyTantro } from '../content'

export default function WhyTantro() {
  return (
    <section id="why" className="relative py-28 sm:py-36">
      {/* Ambient violet glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[320px] w-[500px] -translate-y-1/2 rounded-full bg-violet/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index={whyTantro.index}
          eyebrow={whyTantro.eyebrow}
          title={whyTantro.title}
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-600/40 sm:grid-cols-2">
          {whyTantro.points.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.08}>
              <div className="group h-full bg-ink-900/80 p-8 transition-colors duration-300 hover:bg-ink-800/80 sm:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs tracking-[0.22em] text-mist-400">
                    {p.k}
                  </span>
                  <span className="h-px w-10 bg-ink-500 transition-all duration-500 group-hover:w-20 group-hover:bg-teal" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-mist-100 sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-300 sm:text-base">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
