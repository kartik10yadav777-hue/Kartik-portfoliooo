import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'

const HeroScene3D = lazy(() => import('./HeroScene3D'))

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

function ScrambleText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState(text)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let frame = 0
    const totalFrames = 25
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        setDisplayed(
          text.split('').map((char, i) => {
            if (char === ' ') return ' '
            if (i / text.length < progress) return char
            return chars[Math.floor(Math.random() * chars.length)]
          }).join('')
        )
        if (frame >= totalFrames) {
          clearInterval(interval)
          setDisplayed(text)
          setDone(true)
        }
      }, 40)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return <span className="font-mono text-xs">{displayed}</span>
}

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen pt-32 flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="canvas-wrapper opacity-60">
        <Suspense fallback={null}>
          <HeroScene3D />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/60 pointer-events-none z-[1]" />

      {/* Floating orbs */}
      <div className="orb w-96 h-96 bg-gold/8 top-1/4 -left-48 z-[1]" style={{ animationDelay: '0s' }} />
      <div className="orb w-72 h-72 bg-blue-600/8 bottom-1/4 -right-36 z-[1]" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold/20 text-gold/80 text-xs tracking-widest uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <ScrambleText text="STUDENT ENTREPRENEUR · INDIA · 2024" delay={800} />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight mb-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-offwhite/95">Building for</span>
          <span className="block text-gradient glow-text italic">the Long</span>
          <span className="block text-offwhite/95">Game.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="max-w-2xl mx-auto text-offwhite/50 text-base lg:text-lg leading-relaxed mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Student entrepreneur from India building digital brands, future technology concepts,
          and preparing for a global future in business and computer science.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={handleScrollDown}
            className="group relative px-8 py-4 bg-gold text-navy font-medium text-sm tracking-widest uppercase rounded-full overflow-hidden hover:shadow-lg hover:shadow-gold/20 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Explore Journey</span>
            <motion.div
              className="absolute inset-0 bg-gold-light"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-8 py-4 border border-offwhite/20 text-offwhite/80 font-light text-sm tracking-widest uppercase rounded-full hover:border-gold/40 hover:text-gold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex items-center justify-center gap-8 sm:gap-16 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[
            { num: '4+', label: 'Projects Built' },
            { num: '16', label: 'Years Young' },
            { num: '∞', label: 'Ambition' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl text-gold/90 mb-1">{stat.num}</div>
              <div className="text-offwhite/40 text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        onClick={handleScrollDown}
      >
        <div className="text-offwhite/30 text-xs tracking-widest uppercase">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </motion.div>
    </section>
  )
}
