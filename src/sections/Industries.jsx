import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { industries } from '../content'

export default function Industries() {
  return (
    <section id="industries" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index={industries.index}
          eyebrow={industries.eyebrow}
          title={industries.title}
          sub={industries.sub}
        />

        {/* 12-cell grid with internal hairlines */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-900/40 backdrop-blur">
          <div className="grid grid-cols-2 divide-x divide-y divide-ink-600/50 sm:grid-cols-3 lg:grid-cols-4">
            {industries.items.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.label} delay={(i % 4) * 0.05}>
                  <div className="group relative flex aspect-square flex-col items-start justify-between p-6 transition-colors duration-300 hover:bg-ink-800/60">
                    {/* Corner tick */}
                    <span className="font-mono text-[10px] text-mist-400">
                      /{String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-800 ring-1 ring-ink-600 transition-all duration-300 group-hover:ring-teal group-hover:text-teal">
                      <Icon size={20} className="text-mist-200 transition-colors group-hover:text-teal" />
                    </div>
                    <div className="font-display text-base font-medium text-mist-100">
                      {item.label}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
