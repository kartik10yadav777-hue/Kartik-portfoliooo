import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const goals = [
    {
    phase: '01',
    title: 'Learning and Building ',
    timeframe: '2023-2027',
    description: 'Developing skills in web development, product design, AI, and entrepreneurship while building real projects and working with clients.',
    flag: '🛠️',
    color: '#C8A96B',
  },
  {
    phase: '02',
    title: 'Global Education ',
    timeframe: '2028–2032',
    description: 'Pursuing higher education, expanding technical knowledge, and building an international perspective.',
    flag: '🌍',
    color: '#6B9AC8',
  },
  {
    phase: '03',
    title: 'Global Entrepreneurship',
    timeframe: '2028–2035',
    description: 'Building technology companies and digital products for international markets.',
    flag: '💼',
    color: '#7CAF8A',
  },
  {
    phase: '04',
    title: 'Advanced Technologies',
    timeframe: '2030+',
    description: 'Build systems at the technological frontier — AI, aerospace, hardware, and the infrastructure of the next civilization. NeoOS begins here.',
    flag: '🚀',
    color: '#C86B9A',
  },
]

export default function GlobalGoals() {
  const { ref, inView } = useReveal()

  return (
    <section id="goals" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="orb w-96 h-96 bg-gold/5 bottom-0 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">The Roadmap</div>
          <h2 className="font-display text-5xl lg:text-7xl text-offwhite leading-tight">
            Global <span className="text-gradient italic">goals.</span>
          </h2>
          <p className="text-offwhite/40 text-sm max-w-xl mx-auto mt-6 leading-relaxed">
            A sequence of milestones, not a guarantee — each one building the foundation for the next.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, i) => (
            <GoalCard key={i} goal={goal} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GoalCard({ goal, index }) {
  const { ref, inView } = useReveal(0.1)
  return (
    <motion.div
      ref={ref}
      className="relative glass rounded-3xl p-7 group hover:border-opacity-30 border border-transparent transition-all duration-500 overflow-hidden"
      style={{ '--card-color': goal.color }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      {/* Bottom gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `linear-gradient(135deg, ${goal.color}12, transparent)` }}
      />

      <div className="relative">
        {/* Phase */}
        <div className="font-mono text-offwhite/15 text-xs mb-6">{goal.phase}</div>

        {/* Flag/icon */}
        <div className="text-3xl mb-4">{goal.flag}</div>

        {/* Title */}
        <h3 className="text-offwhite/90 font-medium text-lg mb-2 group-hover:text-gradient transition-all duration-300">{goal.title}</h3>

        {/* Timeframe */}
        <div className="text-xs tracking-wider mb-4" style={{ color: goal.color + 'aa' }}>
          {goal.timeframe}
        </div>

        {/* Description */}
        <p className="text-offwhite/45 text-sm leading-relaxed">{goal.description}</p>
      </div>
    </motion.div>
  )
}
