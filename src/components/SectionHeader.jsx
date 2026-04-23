import Reveal from './Reveal'

/**
 * SectionHeader
 * Standard blueprint-style header used across sections.
 *   [ /01 ]  EYEBROW
 *   Big display title.
 *   Optional subtitle.
 */
export default function SectionHeader({ index, eyebrow, title, sub, align = 'left' }) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="section-index">{index}</span>
          <span className="h-px w-12 bg-ink-500" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-mist-100 sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  )
}
