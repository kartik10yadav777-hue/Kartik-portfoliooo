import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    id: 'neoos',
    name: 'NeoOS',
    category: 'Technology Ecosystem',
    description: 'A futuristic technology ecosystem and aerospace-oriented vision focused on AI systems, advanced hardware, future computing, and humanity\'s long-term technological evolution.',
    status: 'Vision Stage',
    color: '#C8A96B',
    gradient: 'from-gold/20 via-transparent to-transparent',
    icon: '◈',
    tags: ['AI Systems', 'Aerospace', 'Future Computing'],
  },
  {
    id: 'vedra',
    name: 'Vedra',
    category: 'Consumer Brand',
    description: 'A modern premium herbal and wellness brand focused on creating aesthetic, trustworthy, and globally scalable consumer products rooted in Indian heritage.',
    status: 'In Development',
    color: '#7CAF8A',
    gradient: 'from-emerald-800/20 via-transparent to-transparent',
    icon: '⬡',
    tags: ['Wellness', 'Herbal', 'Brand'],
  },
  {
    id: 'aeroset',
    name: 'AeroSet',
    category: 'Ecommerce',
    description: 'A modern ecommerce and branding experiment inspired by premium travel and lifestyle products — built to learn, iterate, and scale digital commerce.',
    status: 'Experiment',
    color: '#6B9AC8',
    gradient: 'from-blue-800/20 via-transparent to-transparent',
    icon: '◇',
    tags: ['Travel', 'Lifestyle', 'DTC'],
  },
  {
    id: 'veltrix',
    name: 'Veltrix',
    category: 'Digital Commerce',
    description: 'A creator-powered affiliate ecommerce system designed around modern branding, social media marketing, and scalable digital commerce infrastructure.',
    status: 'Building',
    color: '#C86B9A',
    gradient: 'from-pink-900/20 via-transparent to-transparent',
    icon: '△',
    tags: ['Affiliate', 'Creator', 'Commerce'],
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 12, y: -x * 12 })
  }

  const { ref, inView } = useReveal(0.1)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={cardRef}
        className="relative h-full glass rounded-3xl p-8 cursor-pointer overflow-hidden group"
        style={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          transformStyle: 'preserve-3d',
          transformPerspective: '1000px',
        }}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
        onMouseEnter={() => setHovered(true)}
        whileHover={{ scale: 1.02 }}
      >
        {/* Gradient bg */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Top row */}
        <div className="relative flex items-start justify-between mb-8">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border"
            style={{ borderColor: `${project.color}30`, background: `${project.color}10`, color: project.color }}
          >
            {project.icon}
          </div>
          <div className="glass-light px-3 py-1.5 rounded-full">
            <span className="text-xs tracking-wider" style={{ color: project.color }}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="text-offwhite/30 text-xs tracking-widest uppercase mb-2">{project.category}</div>
          <h3 className="font-display text-3xl text-offwhite mb-4 group-hover:text-gradient transition-all duration-300">{project.name}</h3>
          <p className="text-offwhite/55 leading-relaxed text-sm mb-6">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs border border-offwhite/10 text-offwhite/40 group-hover:border-gold/20 group-hover:text-gold/60 transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          className="absolute bottom-8 right-8 text-offwhite/20 text-xl group-hover:text-gold/60 transition-colors duration-300"
          animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ↗
        </motion.div>

        {/* Shine effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useReveal()

  return (
    <section id="projects" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0a1020] to-navy pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">Portfolio</div>
            <h2 className="font-display text-5xl lg:text-7xl text-offwhite leading-tight">
              What I'm <span className="text-gradient italic">building.</span>
            </h2>
          </div>
          <p className="text-offwhite/40 text-sm max-w-sm leading-relaxed">
            Four ventures at various stages — from active experiments to long-horizon visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
