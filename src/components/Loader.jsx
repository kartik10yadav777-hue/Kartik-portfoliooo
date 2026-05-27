import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const intervals = [
      setTimeout(() => setProgress(30), 200),
      setTimeout(() => setProgress(60), 600),
      setTimeout(() => setProgress(85), 1000),
      setTimeout(() => setProgress(100), 1400),
      setTimeout(() => setDone(true), 1800),
      setTimeout(() => onComplete(), 2200),
    ]
    return () => intervals.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[9999] bg-navy flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl border border-gold/30 flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-gold text-4xl">K</span>
            </div>
            <div className="font-display text-offwhite/60 text-lg tracking-widest">Kartik Yadav</div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-offwhite/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold/60 to-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          {/* Loading text */}
          <motion.div
            className="mt-4 text-offwhite/25 text-xs tracking-widest font-mono"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            {progress < 50 ? 'INITIALIZING' : progress < 90 ? 'LOADING SYSTEMS' : 'READY'}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
