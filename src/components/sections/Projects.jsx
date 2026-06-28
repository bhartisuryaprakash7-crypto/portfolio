import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/content.js'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'featured'
    ? projects.filter((p) => p.featured)
    : projects

  return (
    <section id="projects" className="py-28 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-purple
            border border-glow px-4 py-1.5 rounded-full">
            WHAT I'VE BUILT
          </span>
          <h2 className="font-syne text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-dim text-lg max-w-md mx-auto">
            Real-world products I've designed and shipped.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {['all', 'featured'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full font-mono text-sm transition-all
                ${filter === f
                  ? 'bg-purple text-white shadow-glow'
                  : 'border border-glow text-dim hover:text-white hover:border-purple/40'
                }`}
            >
              {f === 'all' ? 'All Projects' : '⭐ Featured'}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1   }}
                exit={{    opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative card-bg border border-white/5
                  hover:border-purple/30 rounded-2xl p-7 overflow-hidden
                  transition-all duration-300"
              >
                <div className={`absolute bottom-0 left-0 right-0 h-0.5
                  bg-gradient-to-r ${p.gradient}
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left`}
                />

                <div className="flex items-center justify-between mb-4">
                  <span className={`font-syne text-3xl font-black
                    bg-gradient-to-r ${p.gradient}
                    bg-clip-text text-transparent opacity-30`}>
                    0{p.id}
                  </span>
                  <span className="font-mono text-xs text-muted">{p.year}</span>
                </div>

                <h3 className="font-syne text-xl font-bold text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-dim text-sm leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t}
                      className="font-mono text-xs px-2.5 py-1 bg-white/5
                        border border-white/10 rounded-md text-dim">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5">
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono
                      text-muted hover:text-purple transition-colors">
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono
                      text-muted hover:text-purple transition-colors">
                    <FaGithub /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}