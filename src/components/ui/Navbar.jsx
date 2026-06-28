import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useScrollProgress } from '../../hooks/useScrollProgress.js'

const links = [
  { id: 'hero',     label: 'Home'     },
  { id: 'skills',   label: 'Skills'   },
  { id: 'projects', label: 'Projects' },
  { id: 'team',     label: 'Team'     },
  { id: 'contact',  label: 'Contact'  },
]

export default function Navbar() {
  const { activeSection } = useScrollProgress()
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      className={`transition-all duration-300
        ${scrolled
          ? 'bg-[#06060f]/80 backdrop-blur-xl border-b border-purple/10 py-3'
          : 'py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => goto('hero')}
          className="font-mono text-xl font-bold text-purple hover:text-violet transition-colors"
        >
          &lt;RS /&gt;
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => goto(l.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors
                  ${activeSection === l.id ? 'text-white' : 'text-dim hover:text-white'}`}
              >
                {l.label}
                {activeSection === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-purple/20 border border-purple/30 rounded-lg -z-10"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => goto('contact')}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-purple
              hover:bg-purple/90 text-white text-sm font-semibold rounded-lg
              shadow-glow transition-all hover:-translate-y-0.5"
          >
            Hire Me
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-dim hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            className="md:hidden bg-[#06060f]/95 backdrop-blur-xl
              border-t border-purple/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => goto(l.id)}
                  className="text-left py-3 px-4 rounded-lg text-dim
                    hover:text-white hover:bg-purple/10 transition-all font-medium"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => goto('contact')}
                className="mt-2 py-3 px-4 bg-purple text-white
                  rounded-lg font-semibold text-sm"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}