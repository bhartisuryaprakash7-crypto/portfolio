import { motion } from 'framer-motion'
import { skills } from '../../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
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
            WHAT I KNOW
          </span>
          <h2 className="font-syne text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-dim text-lg max-w-md mx-auto">
            Tools and technologies I use to turn ideas into real products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative card-bg border border-white/5 ${group.border}
                rounded-2xl p-7 group transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5
                bg-gradient-to-r ${group.color}
                opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-syne text-lg font-bold text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 bg-white/5
                      border border-white/10 rounded-lg text-violet
                      hover:border-purple/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}