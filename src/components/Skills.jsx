import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const skills = [
  { name: 'Entrepreneurship', level: 82, icon: '🚀' },
  { name: 'Branding', level: 78, icon: '✦' },
  { name: 'Content Creation', level: 75, icon: '📸' },
  { name: 'Startup Thinking', level: 85, icon: '💡' },
  { name: 'Ecommerce', level: 72, icon: '🛒' },
  { name: 'Trading', level: 65, icon: '📊' },
  { name: 'Creative Direction', level: 80, icon: '🎨' },
  { name: 'Global Strategy', level: 70, icon: '🌍' },
  { name: 'Technology Vision', level: 88, icon: '⚡' },
  { name: 'Leadership', level: 75, icon: '◈' },
  { name: 'Social Media', level: 77, icon: '📱' },
  { name: 'UI/UX Direction', level: 73, icon: '◇' },
]

function SkillBar({ skill, index, inView }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-sm">{skill.icon}</span>
          <span className="text-offwhite/70 text-sm group-hover:text-offwhite/90 transition-colors">{skill.name}</span>
        </div>
        <span className="text-gold/60 text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-px bg-offwhite/8 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gold/60 to-gold rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.3 + index * 0.05, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  )
}

const currentlyBuilding = [
  'Personal brand development',
  'Ecommerce experiments',
  'Startup concepts & MVPs',
  'Future technology systems',
  'Internship preparation',
  'International opportunities',
  'German language (A1 → B1)',
  'Global networking',
  'Portfolio building',
]

export default function Skills() {
  const { ref, inView } = useReveal(0.1)
  const { ref: buildRef, inView: buildInView } = useReveal(0.1)

  return (
    <section id="skills" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0c1525] to-navy pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Skills */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">Capabilities</div>
              <h2 className="font-display text-5xl text-offwhite leading-tight">
                What I bring<br />
                <span className="text-gradient italic">to the table.</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Currently Building */}
          <div ref={buildRef} id="currently-building">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={buildInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">Active Now</div>
              <h2 className="font-display text-5xl text-offwhite leading-tight">
                Currently<br />
                <span className="text-gradient italic">building.</span>
              </h2>
            </motion.div>

            <div className="space-y-3">
              {currentlyBuilding.map((item, i) => (
                <motion.div
                  key={item}
                  className="glass rounded-xl px-5 py-4 flex items-center gap-4 group hover:border-gold/20 border border-transparent transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  animate={buildInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors shrink-0" />
                  <span className="text-offwhite/60 text-sm group-hover:text-offwhite/80 transition-colors">{item}</span>
                  <span className="ml-auto text-offwhite/20 text-xs">→</span>
                </motion.div>
              ))}
            </div>

            {/* Status widget */}
            <motion.div
              className="mt-8 glass rounded-2xl p-6 border border-gold/15"
              initial={{ opacity: 0, y: 20 }}
              animate={buildInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold/80 text-xs tracking-widest uppercase">Live Status</span>
              </div>
              <p className="text-offwhite/50 text-sm leading-relaxed">
                Actively building, learning, and networking. Open to internships, collaborations, and meaningful global opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
