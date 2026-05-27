import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { ref, inView } = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [focused, setFocused] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/xeedrqev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const socials = [
    { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
    { label: 'Instagram', icon: '📸', href: 'https://instagram.com' },
    { label: 'Email', icon: '✉️', href: 'mailto:kartikyadav@example.com' },
  ]

  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0a0f1e] to-navy pointer-events-none" />
      <div className="orb w-80 h-80 bg-gold/6 top-1/4 right-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">Get in Touch</div>
          <h2 className="font-display text-5xl lg:text-7xl text-offwhite leading-tight">
            Let's <span className="text-gradient italic">connect.</span>
          </h2>
          <p className="text-offwhite/40 text-sm max-w-lg mx-auto mt-6 leading-relaxed">
            Whether you're a founder, investor, collaborator, or just someone who thinks in decades — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 lg:p-10 space-y-6">
              {/* Name */}
              <div className="relative">
                <label className="block text-offwhite/40 text-xs tracking-widest uppercase mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-offwhite/5 border rounded-xl px-4 py-3.5 text-offwhite/90 text-sm outline-none transition-all duration-300 placeholder:text-offwhite/20"
                  style={{ borderColor: focused === 'name' ? 'rgba(200,169,107,0.5)' : 'rgba(255,255,255,0.08)' }}
                  placeholder="Kartik Yadav"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-offwhite/40 text-xs tracking-widest uppercase mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-offwhite/5 border rounded-xl px-4 py-3.5 text-offwhite/90 text-sm outline-none transition-all duration-300 placeholder:text-offwhite/20"
                  style={{ borderColor: focused === 'email' ? 'rgba(200,169,107,0.5)' : 'rgba(255,255,255,0.08)' }}
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-offwhite/40 text-xs tracking-widest uppercase mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-offwhite/5 border rounded-xl px-4 py-3.5 text-offwhite/90 text-sm outline-none transition-all duration-300 placeholder:text-offwhite/20 resize-none"
                  style={{ borderColor: focused === 'message' ? 'rgba(200,169,107,0.5)' : 'rgba(255,255,255,0.08)' }}
                  placeholder="What's on your mind?"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-4 bg-gold text-navy font-medium text-sm tracking-widest uppercase rounded-xl relative overflow-hidden disabled:opacity-60 transition-opacity"
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Send Message →
                    </motion.span>
                  )}
                  {status === 'loading' && (
                    <motion.span key="loading" className="flex items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <span className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                      Sending...
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      ✓ Message Sent
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      Try Again ↺
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {status === 'error' && (
                <p className="text-red-400/70 text-xs text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Available card */}
            <div className="glass rounded-3xl p-7 border border-gold/15">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold/80 text-xs tracking-widest uppercase">Status</span>
              </div>
              <h3 className="text-offwhite/90 font-medium mb-2">Open to Opportunities</h3>
              <p className="text-offwhite/45 text-sm leading-relaxed">
                Actively looking for internships, collaborations, mentorships, and meaningful global connections.
              </p>
            </div>

            {/* Response time */}
            <div className="glass rounded-3xl p-7">
              <div className="text-offwhite/30 text-xs tracking-widest uppercase mb-2">Response Time</div>
              <div className="text-offwhite/80 text-lg font-display">Within 24 hours</div>
            </div>

            {/* Socials */}
            <div className="glass rounded-3xl p-7 space-y-3">
              <div className="text-offwhite/30 text-xs tracking-widest uppercase mb-4">Connect</div>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-3 border-b border-offwhite/5 last:border-0 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-lg">{s.icon}</span>
                  <span className="text-offwhite/60 text-sm group-hover:text-offwhite/90 transition-colors">{s.label}</span>
                  <span className="ml-auto text-offwhite/20 group-hover:text-gold/60 transition-colors text-sm">↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
