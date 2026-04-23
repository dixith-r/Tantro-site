import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { products } from '../content'

const statusDot = {
  'In development': 'bg-teal',
  'Concept':        'bg-azure',
  'Research':       'bg-violet',
}

export default function Products() {
  return (
    <section id="products" className="relative py-28 sm:py-36">
      {/* Ambient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[320px] w-[600px] rounded-full bg-teal/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index={products.index}
          eyebrow={products.eyebrow}
          title={products.title}
          sub={products.sub}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {products.items.map((p, i) => (
            <Reveal key={p.code} delay={i * 0.08}>
              <div className="glass brackets group relative h-full overflow-hidden p-8">
                {/* Decorative blueprint circuits */}
                <svg
                  className="absolute -right-10 -top-10 h-48 w-48 text-ink-600 opacity-40 transition-opacity group-hover:opacity-70"
                  viewBox="0 0 200 200"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 100 20 L 100 180 M 20 100 L 180 100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                </svg>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.22em] text-mist-400">
                      {p.code}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-ink-500 bg-ink-800/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mist-200">
                      <span className={`h-1.5 w-1.5 rounded-full ${statusDot[p.status]} animate-pulse-slow`} />
                      {p.status}
                    </span>
                  </div>

                  <h3 className="mt-10 font-display text-2xl font-semibold text-mist-100">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300">
                    {p.blurb}
                  </p>

                  <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-mist-400">
                    — Coming soon
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
