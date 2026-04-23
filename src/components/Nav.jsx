import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { brand, nav } from '../content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-600/70 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <img
            src="/logo.png"
            alt="TANTRO logo"
            className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[8deg]"
          />
          <span className="font-display text-lg font-semibold tracking-[0.25em] text-mist-100">
            {brand.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-mono text-xs uppercase tracking-[0.22em] text-mist-200 transition-colors hover:text-white"
            >
              <span className="text-mist-400">/</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a href="#contact" className="btn-primary hidden md:inline-flex text-sm px-5 py-2.5">
          Start a project
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-full border border-ink-500 p-2 text-mist-100"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-ink-600 bg-ink-950/95 backdrop-blur"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-mono text-xs uppercase tracking-[0.22em] text-mist-200 hover:bg-ink-800 hover:text-white"
                >
                  <span className="text-mist-400">/</span>
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 text-sm"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
