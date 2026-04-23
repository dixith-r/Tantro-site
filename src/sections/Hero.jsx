import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import HeroCanvas from '../components/HeroCanvas'
import { hero, brand } from '../content'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      {/* 3D background */}
      <HeroCanvas />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-ink bg-grid-lg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Soft gradient wash at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent -z-10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Eyebrow / status line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          <span className="eyebrow">{hero.eyebrow}</span>
        </motion.div>

        {/* Headline */}
        <h1 className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-mist-100 sm:text-7xl md:text-[88px]">
          {hero.headline.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {i === hero.headline.length - 1 ? (
                <span className="text-gradient">{line}</span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg"
        >
          {hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href={hero.primaryCta.href} className="btn-primary">
            {hero.primaryCta.label}
            <ArrowRight size={16} />
          </a>
          <a href={hero.secondaryCta.href} className="btn-ghost">
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-800/40 backdrop-blur sm:grid-cols-3"
        >
          {hero.stats.map((s) => (
            <div key={s.label} className="bg-ink-900/60 p-6">
              <div className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-mist-300">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom brand line + scroll cue */}
        <div className="mt-16 flex items-center justify-between pb-10">
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.3em] text-mist-400 sm:block">
            {brand.tagline}
          </div>
          <a
            href="#about"
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-mist-300 transition-colors hover:text-teal"
          >
            Scroll
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
