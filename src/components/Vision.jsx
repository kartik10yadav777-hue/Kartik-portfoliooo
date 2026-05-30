import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Suspense, lazy } from 'react'

const Globe3D = lazy(() => import('./Globe3D'))

const visionPoints = [
 { icon: '🎓', label: 'Future Education', desc: 'Preparing for higher education in Germany while building technical and entrepreneurial skills.' },
  { icon: '🌐', label: 'Global Entrepreneurship', desc: 'Building companies that operate across borders, serving global markets from day one.' },
  { icon: '⚡', label: 'Advanced Technology', desc: 'Creating systems at the frontier — AI, aerospace, hardware, and the infrastructure of tomorrow.' },
  { icon: '🤝', label: 'Intelligent Networks', desc: 'Building meaningful connections with builders, founders, and thinkers across the world.' },
  { icon: '📈', label: 'Meaningful Impact', desc: 'Creating value that outlasts the creator — systems, brands, and ideas that scale beyond any one person.' },
]
export default function Vision() {
  const { ref, inView } = useReveal()

  return (
    <section id="vision" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0a1220] to-navy pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">The Vision</div>
            <h2 className="font-display text-5xl lg:text-6xl text-offwhite leading-tight mb-8">
              Thinking<br />
              Beyond<br />
              <span className="text-gradient italic">Borders.</span>
            </h2>
            <p className="text-offwhite/55 leading-relaxed mb-8">
              Kartik believes the next generation of builders will not be limited by geography.
              Technology, the internet, and global access to information have made it possible
              for young founders to learn globally, build globally, and create opportunities
              beyond traditional limitations.
            </p>
            <p className="text-offwhite/40 leading-relaxed text-sm">
              His long-term vision encompasses international education, global entrepreneurship,
              advanced technology systems, and meaningful impact at scale — a mission that
              started in India but has no fixed endpoint.
            </p>
          </motion.div>

          {/* Right: 3D Globe */}
          <motion.div
            className="relative h-80 lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-gold/20 animate-pulse" />
              </div>
            }>
              <Globe3D />
            </Suspense>

            {/* Overlay labels */}
            <motion.div
              className="absolute top-8 right-4 glass rounded-xl px-4 py-3 border border-gold/20"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <div className="text-gold text-xs tracking-wider">🇩🇪 Germany</div>
            </motion.div>
            <motion.div
              className="absolute bottom-16 left-4 glass rounded-xl px-4 py-3 border border-gold/20"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 2 }}
            >
              <div className="text-gold text-xs tracking-wider">🇮🇳 India</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Vision grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionPoints.map((point, i) => (
            <VisionCard key={i} point={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VisionCard({ point, index }) {
  const { ref, inView } = useReveal(0.1)
  return (
    <motion.div
      ref={ref}
      className="glass rounded-2xl p-6 group hover:border-gold/20 border border-transparent transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="text-2xl mb-4">{point.icon}</div>
      <h3 className="text-offwhite/90 font-medium mb-2 text-sm tracking-wide group-hover:text-gold transition-colors duration-300">{point.label}</h3>
      <p className="text-offwhite/45 text-sm leading-relaxed">{point.desc}</p>
    </motion.div>
  )
}
