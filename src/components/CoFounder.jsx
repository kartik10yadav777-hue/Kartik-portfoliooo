import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export default function CoFounder() {
  const { ref, inView } = useReveal()

  return (
    <section id="cofounder" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="orb w-80 h-80 bg-gold/6 top-0 right-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">The Partnership</div>
          <h2 className="font-display text-5xl lg:text-7xl text-offwhite leading-tight">
            Better together.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left founder */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border border-gold/30 mx-auto mb-4">
                <span className="font-display text-4xl text-gold">K</span>
              </div>
              <h3 className="font-display text-2xl text-offwhite mb-1">Kartik Yadav</h3>
              <p className="text-gold/70 text-xs tracking-wider">Founder · Visionary</p>
            </div>
          </motion.div>

          {/* Center connection */}
          <motion.div
            className="lg:col-span-1 flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-offwhite/20 text-sm tracking-widest uppercase">5+ years</div>
            <div className="glass-light w-16 h-16 rounded-full flex items-center justify-center border border-gold/20">
              <span className="text-gold text-2xl">∞</span>
            </div>
            <div className="text-offwhite/20 text-sm tracking-widest uppercase">Together</div>
          </motion.div>

          {/* Right founder */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-800/10 flex items-center justify-center border border-blue-500/30 mx-auto mb-4">
                <span className="font-display text-4xl text-blue-300">B</span>
              </div>
              <h3 className="font-display text-2xl text-offwhite mb-1">Bhavya</h3>
              <p className="text-blue-300/70 text-xs tracking-wider">Co-Founder · Builder</p>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          className="mt-12 glass rounded-3xl p-10 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-3">The Bond</div>
              <p className="text-offwhite/60 leading-relaxed text-sm">
                Kartik and Bhavya have been friends for over five years. Through every idea, every failure, and every late-night conversation about the future — they've been there for each other. That kind of trust doesn't get built in boardrooms.
              </p>
            </div>
            <div>
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-3">The Mission</div>
              <p className="text-offwhite/60 leading-relaxed text-sm">
                Together they are building NeoOS, Vedra, and future ventures with a shared understanding that the best companies are built by people who genuinely believe in each other — not just the idea.
              </p>
            </div>
            <div>
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-3">The Future</div>
              <p className="text-offwhite/60 leading-relaxed text-sm">
                The partnership is built on ambition, loyalty, and a shared vision for creating globally impactful systems. This is a founding story that's still being written — one chapter at a time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
