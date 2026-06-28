import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { teamWork } from '../../data/content.js'

export default function Team() {
  const [active, setActive] = useState(0)
  const item = teamWork[active]

  return (
    <section id="team" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-purple
            border border-glow px-4 py-1.5 rounded-full">
            TEAMWORK
          </span>
          <h2 className="font-syne text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Team <span className="text-gradient">Contributions</span>
          </h2>
          <p className="text-dim text-lg max-w-md mx-auto">
            How I've contributed in collaborative, cross-functional teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Tabs */}
          <div className="flex flex-col gap-3">
            {teamWork.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 p-4 rounded-xl border text-left
                  transition-all duration-300
                  ${active === i
                    ? `${t.border} ${t.bg}`
                    : 'border-white/5 hover:border-white/10'
                  }`}
              >
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <p className={`text-sm font-semibold
                    ${active === i ? t.accent : 'text-white'}`}>
                    {t.role}
                  </p>
                  <p className="text-xs font-mono text-muted mt-0.5">
                    {t.project.split('—')[0]}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 24  }}
                animate={{ opacity: 1, x: 0   }}
                exit={{    opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="card-bg border border-white/5 rounded-2xl p-8"
              >
                <div className="pb-5 mb-6 border-b border-white/5">
                  <h3 className="font-syne text-xl font-bold text-white mb-3">
                    {item.project}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="font-mono text-xs text-dim bg-white/5 px-3 py-1 rounded-lg">
                      👥 {item.team}
                    </span>
                    <span className="font-mono text-xs text-dim bg-white/5 px-3 py-1 rounded-lg">
                      ⏱ {item.duration}
                    </span>
                    <span className={`font-mono text-xs px-3 py-1 rounded-lg
                      border ${item.border} ${item.accent} ${item.bg}`}>
                      {item.role}
                    </span>
                  </div>
                </div>

                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
                  What I did
                </p>
                <ul className="space-y-3 mb-6">
                  {item.contributions.map((c, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0  }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 text-sm text-dim leading-relaxed"
                    >
                      <span className={`mt-0.5 text-base ${item.accent}`}>▹</span>
                      {c}
                    </motion.li>
                  ))}
                </ul>

                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
                  Impact
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.impact.map((imp) => (
                    <span
                      key={imp}
                      className={`font-mono text-xs px-3 py-1.5 rounded-lg
                        border ${item.border} ${item.accent} ${item.bg}`}
                    >
                      ✓ {imp}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}