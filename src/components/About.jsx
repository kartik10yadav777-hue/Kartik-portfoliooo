import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const traits = [
  { label: 'Origin', value: 'India' },
  { label: 'Focus', value: 'Technology & Startups' },
  { label: 'Building', value: 'Digital Brands' },
  { label: 'Destination', value: 'Global' },
]

export default function About() {
  const { ref, inView } = useReveal()

  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/20 to-navy pointer-events-none" />
      <div className="orb w-80 h-80 bg-gold/5 -top-20 -right-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative glass rounded-3xl p-8 lg:p-10 glow-gold overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="absolute w-px bg-gold" style={{
                    left: `${(i + 1) * 8.3}%`,
                    top: 0, bottom: 0,
                    opacity: 0.5
                  }} />
                ))}
              </div>

              {/* Avatar placeholder */}
              <div className="relative w-20 h-20 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border border-gold/30">
                  <span className="font-display text-4xl text-gold">K</span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-navy" />
              </div>

              <h3 className="font-display text-3xl text-offwhite mb-1">Kartik Yadav</h3>
              <p className="text-gold/80 text-sm tracking-wider mb-6">Student Entrepreneur · Future Computer Engineer · Founder</p>

              <div className="section-divider mb-6" />

              <div className="grid grid-cols-2 gap-4">
                {traits.map((t, i) => (
                  <motion.div
                    key={t.label}
                    className="glass-light rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="text-offwhite/30 text-xs tracking-widest uppercase mb-1">{t.label}</div>
                    <div className="text-offwhite/90 text-sm font-medium">{t.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 border border-gold/20"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            >
              <div className="text-gold text-xs tracking-widest uppercase mb-1">Currently</div>
              <div className="text-offwhite/80 text-sm">Learning · Building · Growing</div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">About</div>
            <h2 className="font-display text-5xl lg:text-6xl text-offwhite leading-tight mb-8">
              A globally-minded<br />
              <span className="text-gradient italic">founder</span> in the<br />
              making.
            </h2>

            <div className="space-y-5 text-offwhite/60 leading-relaxed">
              <p>
                Kartik Yadav is a 16-year-old student entrepreneur from India with an obsession for
                building meaningful systems, global businesses, and future-oriented technology.
              </p>
              <p>
                Passionate about startups, digital brands, and innovation, he is charting his own path
                far beyond traditional career expectations — preparing for international education
                and entrepreneurship at a global scale.
              </p>
              <p>
                He approaches every project with the mindset of someone playing the long game:
                patient in execution, bold in vision.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
