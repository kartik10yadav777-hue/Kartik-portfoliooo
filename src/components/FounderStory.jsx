import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const storyParagraphs = [
  {
    label: 'The Beginning',
    text: 'At 12 years old, something shifted. While other kids thought about grades and cricket matches, Kartik found himself obsessed with something less tangible — the idea that a single person, with the right systems and the right thinking, could change something real in the world. Not just for themselves, but for generations.',
  },
  {
    label: 'The Weight',
    text: 'Growing up, financial struggles were never abstract. They were the reality of a family navigating a system that rarely rewards ambition without sacrifice. But instead of bowing under that weight, Kartik let it sharpen him. He decided early that he would be the first in his bloodline to break the ceiling — to go further, earn more, and build something that lasts beyond him.',
  },
  {
    label: 'The Isolation',
    text: 'The hardest part wasn\'t the work. It was the loneliness that comes from thinking differently. Most people around him were comfortable with small ambitions. The conversations about building globally, about Kardashev Type 2 civilizations, about systems that outlast their founders — those conversations happened mostly in his own head. He learned to be okay with that.',
  },
  {
    label: 'The Experiments',
    text: 'He started where most young builders do — with content, with trading, with experimentation. None of it was perfect. He struggled with inconsistency, with a broken education system, with the absence of real mentorship. But every failed attempt taught him something the classroom never could: what it actually costs to build, and why most people quit.',
  },
  {
    label: 'The Vision',
    text: 'Today, Kartik is pointed toward Germany, toward global education, toward the kind of international ecosystem where ideas can scale. He believes countries like the USA and Germany don\'t just offer opportunity — they offer exposure to the kind of thinking that creates the future, not just occupies it.',
  },
  {
    label: 'The Commitment',
    text: 'This isn\'t a story with an ending yet. It\'s a foundation document — the record of a young builder at the very beginning of something serious. The projects are real. The work is real. The vision, expansive as it is, is earned, not borrowed.',
  },
]

export default function FounderStory() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0d1929] to-navy pointer-events-none" />
      <div className="orb w-96 h-96 bg-gold/5 -bottom-20 -left-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-gold/70 text-xs tracking-widest uppercase mb-4">The Story</div>
          <h2 className="font-display text-5xl lg:text-7xl text-offwhite leading-tight">
            How it <span className="text-gradient italic">began.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {storyParagraphs.map((para, i) => (
            <StoryBlock key={i} para={para} index={i} />
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <blockquote className="font-display text-2xl lg:text-3xl text-offwhite/70 italic leading-relaxed max-w-2xl mx-auto">
            "The best time to start was 10 years ago. The second best time is right now, with everything I know."
          </blockquote>
          <div className="section-divider mx-auto mt-8" />
          <p className="text-gold/60 text-xs tracking-widest uppercase mt-4">— Kartik Yadav</p>
        </motion.div>
      </div>
    </section>
  )
}

function StoryBlock({ para, index }) {
  const { ref, inView } = useReveal(0.2)
  return (
    <motion.div
      ref={ref}
      className="relative flex gap-8 lg:gap-12 py-12 border-b border-offwhite/5 last:border-0"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Number */}
      <div className="hidden sm:flex flex-col items-center pt-1">
        <div className="font-mono text-gold/30 text-xs w-8 text-right shrink-0">
          0{index + 1}
        </div>
        <div className="w-px flex-1 mt-4 timeline-line" />
      </div>

      <div className="flex-1 pt-1">
        <div className="text-gold/80 text-xs tracking-widest uppercase mb-3">{para.label}</div>
        <p className="text-offwhite/65 leading-relaxed text-lg font-light">{para.text}</p>
      </div>
    </motion.div>
  )
}
