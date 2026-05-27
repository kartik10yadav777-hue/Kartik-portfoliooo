import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-offwhite/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <div className="w-8 h-8 rounded-lg bg-navy border border-gold/30 flex items-center justify-center">
              <span className="font-display text-gold font-medium text-lg">K</span>
            </div>
            <div>
              <div className="font-display text-offwhite/70 text-sm">Kartik Yadav</div>
              <div className="text-offwhite/30 text-xs tracking-wider">Building for the Long Game</div>
            </div>
          </motion.div>

          {/* Center */}
          <div className="text-offwhite/25 text-xs tracking-wider text-center">
            © {year} Kartik Yadav · Made with ♦ in India
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {['LinkedIn', 'Instagram', 'Email'].map(link => (
              <a key={link} href="#" className="text-offwhite/30 text-xs tracking-wider hover:text-gold/70 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
