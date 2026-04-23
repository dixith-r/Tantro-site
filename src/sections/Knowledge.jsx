import { BookOpen, ArrowUpRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { knowledge } from '../content'

export default function Knowledge() {
  return (
    <section id="knowledge" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index={knowledge.index}
          eyebrow={knowledge.eyebrow}
          title={knowledge.title}
        />

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist-300 sm:text-lg">
            {knowledge.body}
          </p>
        </Reveal>

        {/* Post preview grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {knowledge.posts.map((post, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <a
                href="#"
                className="glass brackets group relative block h-full p-7 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{post.tag}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-mist-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal"
                  />
                </div>

                <h3 className="mt-8 font-display text-xl font-medium leading-snug text-mist-100 group-hover:text-white">
                  {post.title}
                </h3>

                <div className="mt-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist-400">
                  <BookOpen size={12} />
                  {post.read}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a href="#" className="btn-ghost">
            Visit the Knowledge Hub
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
