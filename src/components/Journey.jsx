import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const milestones = [
  {
    year: 'Age 12',
    date: '2022',
    title: 'The Obsession Begins',
    description: 'Something clicked. The idea of building meaningful systems — not just having a job — became an obsession that refused to quiet down.',
    status: 'completed',
    icon: '💡',
  },
  {
    year: 'Age 13',
    date: '2023',
    title: 'First Experiments',
    description: 'Content creation, early trading experiments, and the first taste of what it means to build something from nothing. Mostly learning what doesn\'t work.',
    status: 'completed',
    icon: '🔬',
  },
  {
    year: 'Age 14',
    date: '2024',
    title: 'Trading & Learning Phase',
    description: 'Deeper exploration of financial markets, digital commerce, and self-directed learning outside the traditional education system.',
    status: 'completed',
    icon: '📈',
  },
  {
    year: 'Age 15',
    date: '2025',
    title: 'Building Digital Projects',
    description: 'First real projects take shape — AeroSet, Veltrix, and early Vedra concepts. Learning to execute, not just ideate.',
    status: 'completed',
    icon: '🏗️',
  },
  {
    year: 'Age 16',
    date: '2026',
    title: 'Portfolio & Startup Ecosystem',
    description: 'Building this portfolio, refining Vedra, developing NeoOS as a long-term vision, and preparing seriously for international opportunities.',
    status: 'active',
    icon: '⚡',
  },
  {
    year: 'Near Future',
    date: '2025–26',
    title: 'Germany & Global Education',
    description: 'Pursuing international education in Germany — accessing a world-class innovation ecosystem and expanding global networks.',
    status: 'upcoming',
    icon: '🌍',
  },
  {
    year: 'Long Term',
    date: '2030+',
    title: 'NeoOS & Global Vision',
    description: 'Building advanced technology systems, scaling global ventures, and contributing to civilization-level technological progress.',
    status: 'upcoming',
    icon: '🚀',
  },
]

export default function Journey() {
  const { ref, inView } = useReveal()

  return (
    <section id="journey" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="orb w-96 h-96 bg-gold/5 top-1/4 right-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">Timeline</div>
          <h2 className="font-display text-5xl lg:text-7xl text-offwhite leading-tight">
            The <span className="text-gradient italic">journey</span> so far.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px timeline-line transform lg:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <TimelineItem key={i} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ milestone, index }) {
  const { ref, inView } = useReveal(0.2)
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start gap-6 lg:gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dot - desktop center */}
      <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 mt-6 z-10 border-2 border-navy"
        style={{
          background: milestone.status === 'active' ? '#C8A96B' : milestone.status === 'completed' ? '#334155' : 'transparent',
          borderColor: milestone.status === 'active' ? '#C8A96B' : '#334155',
        }}
      >
        {milestone.status === 'active' && (
          <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-50" />
        )}
      </div>

      {/* Content */}
      <div className={`ml-10 lg:ml-0 w-full lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
        <div className={`glass rounded-2xl p-6 group hover:border-gold/20 border transition-colors duration-300 ${
          milestone.status === 'active' ? 'border-gold/30' : 'border-transparent'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">{milestone.icon}</span>
              <div>
                <div className="text-gold/70 text-xs tracking-widest">{milestone.year}</div>
                <div className="text-offwhite/30 text-xs">{milestone.date}</div>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs tracking-wider ${
              milestone.status === 'active' ? 'bg-gold/20 text-gold' :
              milestone.status === 'completed' ? 'bg-offwhite/5 text-offwhite/40' :
              'bg-offwhite/5 text-offwhite/20'
            }`}>
              {milestone.status === 'active' ? 'Now' : milestone.status === 'completed' ? 'Done' : 'Soon'}
            </span>
          </div>
          <h3 className="text-offwhite/90 font-medium mb-2">{milestone.title}</h3>
          <p className="text-offwhite/45 text-sm leading-relaxed">{milestone.description}</p>
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block w-5/12" />
    </motion.div>
  )
}
