import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { contact, brand } from '../content'

/**
 * Contact form notes for setup:
 *   The form currently uses a mailto: fallback so the site works out-of-the-box
 *   on static hosting. For production lead capture, swap the handleSubmit body
 *   with a POST to Formspree, Web3Forms, Resend, or your own endpoint.
 *   Search for "ENDPOINT" below to find the spot.
 */
export default function Contact() {
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({
    name: '', company: '', email: '', interest: 'Industrial Solutions', message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setState('sending')

    // === ENDPOINT ===
    // Replace the mailto fallback with a real endpoint for production use.
    // Example with Formspree:
    //   const r = await fetch('https://formspree.io/f/XXXX', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //   if (!r.ok) throw new Error('Failed')
    //
    // For now we open the user's mail client:
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nInterest: ${form.interest}\n\n${form.message}`
    )
    const subject = encodeURIComponent(`New inquiry from ${form.name || 'tantro.in'}`)
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`

    // Simulate success after a beat
    setTimeout(() => setState('sent'), 600)
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index={contact.index}
          eyebrow={contact.eyebrow}
          title={contact.title}
          sub={contact.sub}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Left info column */}
          <Reveal className="lg:col-span-4">
            <div className="glass brackets h-full p-8 sm:p-10">
              <div className="section-index">Get in touch</div>
              <div className="mt-8 space-y-7">
                <div>
                  <div className="flex items-center gap-3 text-mist-300">
                    <Mail size={16} className="text-teal" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist-400">
                      Email
                    </span>
                  </div>
                  <a
                    href={`mailto:${brand.email}`}
                    className="mt-2 block font-display text-xl text-mist-100 hover:text-teal"
                  >
                    {brand.email}
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-mist-300">
                    <MapPin size={16} className="text-teal" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist-400">
                      Based in
                    </span>
                  </div>
                  <div className="mt-2 font-display text-xl text-mist-100">
                    {brand.location}
                  </div>
                  <div className="mt-1 text-sm text-mist-300">
                    Serving clients globally.
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-xl border border-ink-600/60 bg-ink-800/60 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist-400">
                  Typical response
                </div>
                <div className="mt-2 font-display text-lg text-mist-100">
                  Within 1 business day.
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-8" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass brackets relative p-8 sm:p-10"
            >
              {state === 'sent' ? (
                <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                  <CheckCircle2 size={48} className="text-teal" />
                  <h3 className="mt-6 font-display text-2xl text-mist-100">
                    Message drafted.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-mist-300">
                    Your mail client should now be open with a message addressed to us.
                    Send it off and we&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" required>
                      <input
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Jane Doe"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Company">
                      <input
                        value={form.company}
                        onChange={update('company')}
                        placeholder="Acme Industries"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@company.com"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Area of interest">
                      <select
                        value={form.interest}
                        onChange={update('interest')}
                        className={inputCls}
                      >
                        <option>Industrial Solutions</option>
                        <option>Digital Transformation</option>
                        <option>Technical Consulting</option>
                        <option>Investor / Partnership</option>
                        <option>Other</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="How can we help?" required className="mt-5">
                    <textarea
                      required
                      value={form.message}
                      onChange={update('message')}
                      rows={5}
                      placeholder="A few lines about your plant, problem, or project…"
                      className={`${inputCls} resize-none`}
                    />
                  </Field>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <p className="max-w-sm font-mono text-[11px] uppercase tracking-[0.2em] text-mist-400">
                      By sending this, you agree we may contact you about your inquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={state === 'sending'}
                      className="btn-primary disabled:opacity-60"
                    >
                      {state === 'sending' ? 'Sending…' : 'Send message'}
                      {state === 'sending' ? <Send size={16} /> : <ArrowRight size={16} />}
                    </button>
                  </div>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const inputCls =
  'w-full rounded-lg border border-ink-500 bg-ink-900/60 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400 outline-none transition-colors focus:border-teal focus:bg-ink-800/70'

function Field({ label, required, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.22em] text-mist-300">
        {label}{required && <span className="ml-1 text-teal">*</span>}
      </span>
      {children}
    </label>
  )
}
